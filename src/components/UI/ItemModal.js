import React, { useContext, useEffect, useCallback, useState } from 'react'

import AlertContext from '../../contexts/AlertContext'
import HayaDBService from '../../services/HayaDBService'

import HouseDetail from '../Houses/HouseDetail'
import HouseForm from '../Houses/HouseForm'

import { Button, Modal } from 'react-bootstrap'

const ItemModal = ({ itemType, modalType, itemId, show, closeModal}) => {
  const alert = useContext(AlertContext)

  const [item, setItem] = useState(null)
  const [modalState, setModalState] = useState(modalType)
  const [requestDelete, setRequestDelete] = useState(false)

  const getItem = useCallback(() => {
    if (modalState !== 'create') {
      HayaDBService[`get${itemType}Detail`](itemId)
        .then(item => {
          setItem(item)
        })
        .catch(error => {
          closeModal()
          alert.launchErrorAlert(`ERROR: registro no encontrado`, error ? error : null)
        })
    }  
  }, [modalState, itemType, itemId, closeModal, alert])

  useEffect(() => {
    if (modalState !== 'create') {
      getItem()
    }
  }, [modalState, getItem])

  const handleClose = () => {
    if (modalState === 'detail') {
      closeModal()
    }  
  }

  const handleExitCreate = () => {
    closeModal()
  }

  const handleEdit = () => {
    setModalState('edit')
  }

  const handleExitEdit = () => {
    setModalState('detail')
    getItem()
  }

  const handleRequestDelete = () => {
    setRequestDelete(true)
  }

  const handleAbortRequestDelete = () => {
    setRequestDelete(false)
  }

  const handleDelete = () => {
    HayaDBService[`delete${itemType}`](itemId)
      .then(() => {
        closeModal()
        alert.launchSuccessAlert('Registro eliminado correctamente')
      })
      .catch(error => {
        alert.launchErrorAlert('ERROR: registro no eliminado', error ? error : null)
      })
  }

  return (
    <div>
      {modalState === 'create' && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Nuevo Registro</Modal.Title>
          </Modal.Header>

          {itemType === 'House' && (<HouseForm formType={'create'} exit={handleExitCreate}/>)}
        </Modal>
      )}

      {(modalState === 'edit' || modalState === 'detail') && item && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              {item.id}
            </Modal.Title>
          </Modal.Header>

          {modalState === 'detail' && (
            <>
              <Modal.Body>
                {itemType === 'House' && (<HouseDetail house={item}/>)}
              </Modal.Body>

              {!requestDelete && (
                <Modal.Footer>
                  <Button variant='primary' onClick={handleEdit}>Editar</Button>
                  <Button variant='danger' onClick={handleRequestDelete}>Eliminar</Button>
                  <Button variant='primary' onClick={handleClose}>Salir</Button>
                </Modal.Footer>
              )}
            </>
          )}

          {modalState === 'edit' && (
            <>
              {itemType === 'House' && (<HouseForm house={item} formType={'edit'} exit={handleExitEdit}/>)}
            </>  
          )}

          {requestDelete && (
            <>
              <Modal.Footer>
                <p>¿Eliminar registro?</p>
                <Button variant='danger' onClick={handleDelete}>Sí</Button>
                <Button variant='success' onClick={handleAbortRequestDelete}>No</Button>
              </Modal.Footer>
            </>
          )}

        </Modal>
      )}
    </div>
  )
}

export default ItemModal
import React, { useContext, useState } from 'react'

import AlertContext  from '../../contexts/AlertContext'

import { Modal } from 'react-bootstrap'

import '../../stylesheets/UI/AlertModal.scss'

const AlertModal = () => {
  const alert = useContext(AlertContext)

  const [show, setShow] = useState(true)

  const closeModal = () => {
    alert.resetStatus()
    setShow(false)
  }

  return(
    <Modal show={show} onHide={closeModal}>
      <Modal.Body className={`alertModal--${alert.status}`}>
        {alert.text}
      </Modal.Body>  
    </Modal>
  )
}

export default AlertModal
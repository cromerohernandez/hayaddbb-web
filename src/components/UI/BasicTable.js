import React, { useState } from 'react'

import SearchInput from './SearchInput'
import BasicRow from './BasicRow'
import ItemModal from './ItemModal'

import { Table } from 'react-bootstrap'

const BasicTable = ({ itemType, basicFields, itemsBasic, filter, setFilter, setFirstIndex, getItemsBasic }) => {
  const [currentItemId, setCurrentItemId] = useState(null)
  const [modalType, setModalType] = useState(null)
  const [show, setShow] = useState(false)

  const handleSelectItem = (itemId) => {
    setCurrentItemId(itemId)
    setModalType('detail')
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
    getItemsBasic()
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {basicFields.map((basicField, i) => (
              <th key={i}>{basicField.title}</th>
            ))}
          </tr>
          <tr>
            {basicFields.map((basicField, i) => (
              <SearchInput setFirstIndex={setFirstIndex} criterion={basicField.field} searchCriteria={filter} setSearchCriteria={setFilter} key={i}/>
            ))}
          </tr>
        </thead>

        {itemsBasic && (
          <tbody>
            {itemsBasic.map((itemBasic) => (
              <BasicRow basicFields={basicFields} itemBasic={itemBasic} handleSelectItem={handleSelectItem} key={itemBasic.id} />
            ))}
          </tbody>
        )}
      </Table>

      {show && (
        <ItemModal itemType={itemType} modalType={modalType} itemId={currentItemId} show={show} closeModal={closeModal} />
      )}
    </div>
  )
}

export default BasicTable





/*

<tr>
<SearchInput criterion={'nombre_contacto'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
<SearchInput criterion={'nombre_via'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
<SearchInput criterion={'numero_via'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
<SearchInput criterion={'localidad'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
</tr>

*/
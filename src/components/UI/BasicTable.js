import React, { useState } from 'react'

import SearchInput from './SearchInput'
import SearchInputRange from './SearchInputRange'
import BasicRow from './BasicRow'
import ItemModal from './ItemModal'

import { setSort } from '../../helpers/tableHelper'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

import '../../stylesheets/UI/BasicTable.scss'

const BasicTable = ({ itemType, basicFields, itemsBasic, filter, setFilter, setFirstIndex, getItemsBasic }) => {
  const [currentItemId, setCurrentItemId] = useState(null)
  const [modalType, setModalType] = useState(null)
  const [show, setShow] = useState(false)

  const handleSetSortCriterion = (event) => {
    const { value } = event.target.attributes.value
    const { newSort, newSortDirection } = setSort(filter.sort, filter.sortDirection, value)

    setFilter({
      ...filter,
      sort: newSort,
      sortDirection: newSortDirection
    })
  }

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
              <th key={i} value={basicField.field} onClick={handleSetSortCriterion} className='table__header'>
                {basicField.title}
                {filter.sort === basicField.field && filter.sortDirection === 'asc' && (
                  <FontAwesomeIcon icon={faSortDown} className='table__header__arrow down'/>
                )}
                {filter.sort === basicField.field && filter.sortDirection === 'desc' && (
                  <FontAwesomeIcon icon={faSortUp} className='table__header__arrow up'/>
                )}
              </th>
            ))}
          </tr>
          <tr>
            {basicFields.map((basicField, i) => {
              let searchItem = null
              if(basicField.filterType === 'input') {
                searchItem = (
                  <SearchInput
                    setFirstIndex={setFirstIndex}
                    criterion={basicField.field}
                    searchCriteria={filter}
                    setSearchCriteria={setFilter}
                    key={i}
                  />
                )
              } else if(basicField.filterType === 'inputRange') {
                searchItem = (
                  <SearchInputRange
                    setFirstIndex={setFirstIndex}
                    criterion={basicField.field}
                    searchCriteria={filter}
                    setSearchCriteria={setFilter}
                    key={i}
                  />
                )
              }
              return searchItem
            })}
          </tr>
        </thead>

        {itemsBasic && (
          <tbody>
            {itemsBasic.map((itemBasic) => (
              <BasicRow basicFields={basicFields} itemBasic={itemBasic} handleSelectItem={handleSelectItem} key={itemBasic.id}/>
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
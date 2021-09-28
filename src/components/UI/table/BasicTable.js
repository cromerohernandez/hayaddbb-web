import React, { useCallback, useState } from 'react'

import FiltersBar from './FiltersBar'
import SearchInput from '../filter/SearchInput'
import SearchInputRange from '../filter/SearchInputRange'
import BasicRow from '../table/BasicRow'
import ItemModal from '../modal/ItemModal'

import { setSort } from '../../../helpers/tableHelper'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faPlus, faHome, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

import '../../../stylesheets/UI/table/BasicTable.scss'

const BasicTable = ({ itemType, basicFields, itemsBasic, getItemsBasic, filter, setFilter, setFirstIndex }) => {
  const [currentItemId, setCurrentItemId] = useState(null)
  const [modalType, setModalType] = useState(null)
  const [show, setShow] = useState(false)

  const closeModal = useCallback(() => {
    setShow(false)
    getItemsBasic()
  }, [getItemsBasic])

  const handleCreate = () => {
    setModalType('create')
    setShow(true)
  }

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

  return (
    <>
      <div className='tableOverHead'>
        <div className='tableOverHead__filters'>
          <p className='tableOverHead__filters__filtersLogo'><FontAwesomeIcon icon={faFilter}/></p>
          <FiltersBar 
            setFirstIndex={setFirstIndex}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </div>

        <Button variant='primary' onClick={handleCreate}>
          <FontAwesomeIcon icon={faPlus}/> <FontAwesomeIcon icon={faHome}/>
        </Button>
      </div>

      <Table striped bordered hover>
        <thead className='table__head'>
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
              if (basicField.filterType === 'input') {
                searchItem = (
                  <SearchInput
                    setFirstIndex={setFirstIndex}
                    criterion={basicField.field}
                    searchCriteria={filter}
                    setSearchCriteria={setFilter}
                    key={i}
                  />
                )
              } else if (basicField.filterType === 'inputRange') {
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
              <BasicRow basicFields={basicFields} itemBasic={itemBasic} handleSelectItem={handleSelectItem} key={itemBasic.id} className='tobody__tr'/>
            ))}
          </tbody>
        )}
      </Table>

      {show && (
        <ItemModal itemType={itemType} modalType={modalType} itemId={currentItemId} show={show} closeModal={closeModal} />
      )}
    </>
  )
}

export default BasicTable
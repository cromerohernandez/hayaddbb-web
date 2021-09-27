import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { itemsPerPage } from '../../../const/tableConst'

import '../../../stylesheets/UI/table/PaginationNav.scss'

const PaginationNav = ({ firstIndex, setFirstIndex, itemsNumber }) => {
  const handlePrevPage = () => {
    setFirstIndex(firstIndex - itemsPerPage)
  }

  const handleNextPage = () => {
    setFirstIndex(firstIndex + itemsPerPage)
  }

  const disablePrevPage = () => firstIndex === 1 || !itemsNumber

  const disableNextPage = () => {
    if (itemsNumber % itemsPerPage === 0) {
      return firstIndex === itemsNumber - (itemsPerPage - 1) || !itemsNumber
    } else {
      return firstIndex === itemsNumber - (itemsNumber % itemsPerPage) + 1 || !itemsNumber
    }
  }

  const lastIndexToShow = () => {
    if ((firstIndex + (itemsPerPage - 1)) > itemsNumber) {
      return firstIndex + (itemsNumber - firstIndex)
    } else {
      return firstIndex + (itemsPerPage - 1)
    }
  }

  return (
    <div className='paginationNav'>
      <button onClick={handlePrevPage} disabled={disablePrevPage()} className='paginationNav__bt'><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
      <p className='paginationNav__p'>{(itemsNumber ? firstIndex : 0) + ' - ' + (lastIndexToShow()) + ' de ' + itemsNumber}</p>
      <button onClick={handleNextPage} disabled={disableNextPage()} className='paginationNav__bt'><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
    </div>
  )
}

export default PaginationNav
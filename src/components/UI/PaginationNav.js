import React from 'react'

import { itemsPerPage } from '../../const/tableConst'

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
      <button onClick={handlePrevPage} disabled={disablePrevPage()}>←</button>
      <p className='paginationNav__p'>{(itemsNumber ? firstIndex : 0) + ' - ' + (lastIndexToShow()) + ' de ' + itemsNumber}</p>
      <button onClick={handleNextPage} disabled={disableNextPage()}>→</button>
  </div>
  )
}

export default PaginationNav
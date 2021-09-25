import React from 'react'

const PaginationNav = ({ firstIndex, setFirstIndex, itemsNumber }) => {
  const handlePrevPage = () => {
    setFirstIndex(firstIndex - 15)
  }

  const handleNextPage = () => {
    setFirstIndex(firstIndex + 15)
  }

  const disablePrevPage = () => firstIndex === 1 //|| !itemsBasic

  const disableNextPage = () => {
    if (itemsNumber % 15 === 0) {
      return firstIndex === itemsNumber - 14 //|| !itemsBasic
    } else {
      return firstIndex === itemsNumber - (itemsNumber % 15) + 1 //|| !itemsBasic
    }
  }

  const lastIndexToShow = () => {
    if (firstIndex + 14 > itemsNumber) {
      return firstIndex + (itemsNumber - firstIndex)
    } else {
      return firstIndex + 14
    }
  }

  return (
    <div className='paginationNav'>
      <button onClick={handlePrevPage} disabled={disablePrevPage()}>←</button>
      <p className='paginationNav__p'>{(/*itemsBasic ?*/ firstIndex /*: 0*/) + ' - ' + (lastIndexToShow()) + ' de ' + itemsNumber}</p>
      <button onClick={handleNextPage} disabled={disableNextPage()}>→</button>
  </div>
  )
}

export default PaginationNav
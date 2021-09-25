import React from 'react'

import '../../stylesheets/UI/SearchInput.scss'

const SearchInput = ({ setFirstIndex, criterion, searchCriteria, setSearchCriteria }) => {
  const handleChange = (event) => {
    const { name, value } = event.target

    setFirstIndex(1)

    setSearchCriteria({
      ...searchCriteria,
      [name]: value
    })
  }

  return (
    <td>
      <input className='search-input' type='text' name={criterion} value={searchCriteria[criterion]} onChange={handleChange} autoComplete='off'></input>
    </td>
  )
}

export default SearchInput
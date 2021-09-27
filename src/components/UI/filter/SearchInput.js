import React from 'react'

import '../../../stylesheets/UI/filter/SearchInputs.scss'

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
      <input
        className='searchContainer__Input'
        type='text' name={criterion}
        value={searchCriteria[criterion]}
        onChange={handleChange}
        autoComplete='off'
        placeholder='...'
      />
    </td>
  )
}

export default SearchInput
import React from 'react'

import '../../../stylesheets/UI/filter/SearchSelect.scss'

const SearchSelectBoolean = ({ setFirstIndex, criterion, searchCriteria, setSearchCriteria }) => {
  const handleChange = (event) => {
    const { name, value } = event.target

    setFirstIndex(1)

    setSearchCriteria({
      ...searchCriteria,
      [name]: value
    })
  }

  return (
    <select className='searchSelect' name={criterion} value={searchCriteria[criterion]} onChange={handleChange}>
      <option value=''>-</option>
      <option value={true}>SI</option>
      <option value={false}>NO</option>
    </select>
  )
}

export default SearchSelectBoolean
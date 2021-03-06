import React from 'react'

import '../../../stylesheets/UI/filter/SearchSelect.scss'

const SearchSelect = ({ setFirstIndex, criterion, options, searchCriteria, setSearchCriteria }) => {
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
      <option value=''>Todos</option>
      {options.map((option, i) => (
        <option value={option} key={i}>{option}</option>
      ))}
    </select>
  )
}

export default SearchSelect
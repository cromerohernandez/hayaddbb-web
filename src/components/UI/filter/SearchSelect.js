import React from 'react'

import '../../../stylesheets/UI/filter/SearchInput.scss'

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
    <td className='searchContainer'>
      <select className='searchContainer__Select' name={criterion} value={searchCriteria[criterion]} onChange={handleChange}>
        <option selected>Todos</option>
        {options.map((option, i) => (
          <option value={option} key={i}>{option}</option>
        ))}
      </select>
    </td>
  )
}

export default SearchSelect
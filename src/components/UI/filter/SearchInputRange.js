import React from 'react'

import '../../../stylesheets/UI/filter/SearchInputs.scss'

const SearchInputRange = ({ setFirstIndex, criterion, searchCriteria, setSearchCriteria }) => {
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
      <table>
        <tbody>
          <tr className='searchContainer'>
            <td className='searchContainer-range'>  
              <input
                className='searchContainer__Input'
                type='text'
                name={`${criterion}_min`}
                value={searchCriteria[`${criterion}_min`]}
                onChange={handleChange}
                autoComplete='off'
                placeholder='min'
              />
            </td>
            <td>-</td>
            <td className='searchContainer-range'>
              <input
                className='searchContainer__Input'
                type='text'
                name={`${criterion}_max`}
                value={searchCriteria[`${criterion}_max`]}
                onChange={handleChange}
                autoComplete='off'
                placeholder='max'
              />
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  )
}

export default SearchInputRange
import React, { useState } from 'react'

import '../../../stylesheets/UI/filter/SearchInputs.scss'

const SearchInputRange = ({ setFirstIndex, criterion, searchCriteria, setSearchCriteria }) => {
  const [valMin, setValMin] = useState('')
  const [valMax, setValMax] = useState('')
  const [ onFocusMin, setOnFocusMin ] = useState(false)
  const [ onFocusMax, setOnFocusMax ] = useState(false)


  const handleFocusMin = () => {
    setValMin('')
    setOnFocusMin(true)
  }
  const handleFocusMax = () => {
    setValMax('')
    setOnFocusMax(true)
  }

  const handleChangeMin = (event) => setValMin(event.target.value)
  const handleChangeMax = (event) => setValMax(event.target.value)

  const handleBlur = (event) => {
    const { name, value } = event.target

    setFirstIndex(1)

    setSearchCriteria({
      ...searchCriteria,
      [name]: value
    })

    setValMin('')
    setValMax('')
    setOnFocusMin(false)
    setOnFocusMax(false)
  }

  return (
    <td>
      <table>
        <tbody>
          <tr className='searchContainer'>
            <td className='searchContainer--range'>  
              <input
                className='searchContainer__Input'
                type='text'
                name={`${criterion}_min`}
                value={valMin || onFocusMin ? valMin : searchCriteria[`${criterion}_min`]}
                onFocus={handleFocusMin}
                onChange={handleChangeMin}
                onBlur={handleBlur}
                autoComplete='off'
                placeholder='min'
              />
            </td>
            <td>-</td>
            <td className='searchContainer--range'>
              <input
                className='searchContainer__Input'
                type='text'
                name={`${criterion}_max`}
                value={valMax || onFocusMax ? valMax : searchCriteria[`${criterion}_max`]}
                onFocus={handleFocusMax}
                onChange={handleChangeMax}
                onBlur={handleBlur}
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
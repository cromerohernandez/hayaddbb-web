import React from 'react'

import '../../../stylesheets/UI/form/FormSelect.scss'

const FormSelect = ({ options, name, placeholder, value, onChange, onBlur }) => {
  return (
      <select
        className='formSelect'
        name={name}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value='' hidden>{placeholder ? placeholder : ''}</option>
        
        {options.map((option, i) => (
          <option value={option} key={i}>{option}</option>
        ))}
      </select>
  )
}

export default FormSelect
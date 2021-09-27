import React from 'react'

import '../../../stylesheets/UI/form/FormInput.scss'

const FormInput = ({ name, placeholder, value, onChange, onBlur }) => {
  return (
    <input
      className='formInput'
      type='text'
      name={name}
      placeholder={placeholder ? placeholder : ''}
      defaultValue={value}
      autoComplete='off'
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

export default FormInput
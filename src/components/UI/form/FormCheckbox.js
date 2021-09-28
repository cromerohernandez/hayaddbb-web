import React from 'react'

import '../../../stylesheets/UI/form/FormCheckbox.scss'

const FormCheckbox = ({ name, value, onChange }) => {
  return (
    <input
      className='formCheckbox'
      type='checkbox'
      name={name}
      checked={value}
      onChange={onChange}
    />
  )
}

export default FormCheckbox
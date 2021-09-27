import React from 'react'

import '../../../stylesheets/UI/form/FormTextArea.scss'

const FormTextArea = ({ name, placeholder, value, onChange }) => {
  return (
      <textarea
        className='formTextArea'
        name={name}
        placeholder={placeholder ? placeholder : ''}
        defaultValue={value}
        onChange={onChange}
      />
  )
}

export default FormTextArea
import { useState } from 'react'

const useInput = (initialValue, validator, initialErrorMessage, stateForm) => {
  const [value, setValue] = useState(initialValue)
  const [touch, setTouch] = useState(false)
  const [error, setError] = useState({active: stateForm === 'create' ? true : false, message: ''})

  const onChange = (event) => setValue(event.target.value)

  const onBlur = (event) => {
    const valid = validator(event.target.value)

    setTouch(true)
    setError({active: !valid, message: initialErrorMessage})
  }

  if (validator) {
    return {
      value,
      touch,
      error,
      handleInput: {
        value,
        onChange,
        onBlur
      }
    }
  } else {
    return {
      value,
      handleInput: {
        value,
        onChange
      }
    }
  }
}

export default useInput
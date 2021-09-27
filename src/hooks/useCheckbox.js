import { useState } from 'react'

const useCheckbox = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const onChange = () => setValue(!value)

  return {
    value,
    handleCheckbox: {
      value,
      onChange
    }
  }
}

export default useCheckbox
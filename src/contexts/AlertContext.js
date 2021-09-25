import React, { useState } from 'react'

const AlertContext = React.createContext()

export const AlertContextProvider = (props) => {
  const [status, setStatus] = useState(null)
  const [text, setText] = useState(null)

  const launchSuccessAlert = (text) => {
    setStatus('success')
    setText(text)
    setTimeout(() => {
      setStatus(null)
      setText(null)
    }, 4000)
  }

  const launchErrorAlert = (text, error, fixed) => {
    setStatus('error')
    setText(text + (error.response ? ` (${error.response.status} ${error.response.statusText})` : ' (conexión rechazada)'))
    if (!fixed) {
      setTimeout(() => {
        setStatus(null)
        setText(null)
      }, 4000)
    }
  }

  const resetStatus = () => setStatus(null)

  const value = {
    status: status,
    text: text,
    launchSuccessAlert: launchSuccessAlert,
    launchErrorAlert: launchErrorAlert,
    resetStatus: resetStatus
  }
  
  return (
    <AlertContext.Provider value={value}>
      {props.children}
    </AlertContext.Provider>
  )
}

export const WithAlertConsumer = (WrappedComponent) => (props) => (
  <AlertContext.Consumer>
    {(alertProps) => (<WrappedComponent {...props} {...alertProps} />)}
  </AlertContext.Consumer>
)

export default AlertContext
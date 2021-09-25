import React, { useContext } from 'react'

import AlertContext from '../contexts/AlertContext'

import HousesHome from './Houses/HousesHome'
import AlertModal from './UI/AlertModal'

import logoHayaDDBB from '../assets/images/logoHayaDDBB.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/App.scss'

function App() {
  const alert = useContext(AlertContext)

  return (
    <div className="App">
      {alert.status && (
        <AlertModal/>
      )}

      <img src={logoHayaDDBB} alt='logoHayaDDBB' className='logo'/>

      <HousesHome />
    </div>
  );
}

export default App;
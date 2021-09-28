import React, { useContext } from 'react'

import AlertContext from '../contexts/AlertContext'

import HousesHome from './Houses/HousesHome'
import AlertModal from './UI/modal/AlertModal'

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

      <div className='appLogo'>
        <img src={logoHayaDDBB} alt='logoHayaDDBB' className='appLogo__logo'/>
      </div>
      
      <HousesHome />
    </div>
  );
}

export default App;
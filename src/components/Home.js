import React, { useEffect, useCallback, useState } from 'react'

import HayaDBService from '../services/HayaDBService'

import BasicTable from './UI/BasicTable'
import PaginationNav from './UI/PaginationNav'

import logoHayaDDBB from '../assets/images/logoHayaDDBB.png'
import '../stylesheets/Home.css'

const Home = () => {
  const [houses, setHouses] = useState(null)

  const basicFields = [
    'area',
    'price',
    'description',
    'address_city'
  ]

  const getHousesBasic = useCallback(() => {
    HayaDBService.getHouses()
      .then(houses => {
        setHouses(houses)
      })
      .catch(error => {
        console.log(error)
      })
  }, [setHouses])

  useEffect(() => {
    getHousesBasic()
  }, [getHousesBasic])

  return(
    <div>
      <img src={logoHayaDDBB} alt='logoHayaDDBB' className='logo'/>
      <BasicTable basicFields={basicFields} itemsBasic={houses} />
      <PaginationNav />
    </div>
  )
}

export default Home
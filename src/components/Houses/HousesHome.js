import React, { useContext, useEffect, useCallback, useState } from 'react'

import AlertContext from '../../contexts/AlertContext'
import HayaDBService from '../../services/HayaDBService'

import BasicTable from '../UI/BasicTable'
import PaginationNav from '../UI/PaginationNav'

const HousesHome = () => {
  const alert = useContext(AlertContext)

  const [houses, setHouses] = useState(null)

  const basicFields = [
    { 
      field: 'area',
      title: 'Superficie'
    },
    { 
      field: 'price',
      title: 'Precio'
    },
    { 
      field: 'description',
      title: 'Descripción'
    },
    { 
      field: 'address_city',
      title: 'Ciudad'
    }
  ]

  const getHousesBasic = useCallback(() => {
    HayaDBService.getHouses()
      .then(houses => {
        setHouses(houses)
      })
      .catch(error => {
        alert.launchErrorAlert('ERROR: viviendas no encontradas', error ? error : null, true)
      })
  }, [setHouses])

  useEffect(() => {
    getHousesBasic()
  }, [getHousesBasic])

  return(
    <div>
      <BasicTable basicFields={basicFields} itemsBasic={houses} />
      <PaginationNav />
    </div>
  )
}

export default HousesHome
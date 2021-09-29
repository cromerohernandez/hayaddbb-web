import React, { useContext, useEffect, useCallback, useState } from 'react'

import AlertContext from '../../contexts/AlertContext'
import HayaDBService from '../../services/HayaDBService'

import BasicTable from '../UI/table/BasicTable'

import { basicHouseFields } from '../../const/housesConst'
import { itemsPerPage } from '../../const/tableConst'

import '../../stylesheets/home.scss'

const HousesHome = () => {
  const { launchErrorAlert } = useContext(AlertContext)

  const [filter, setFilter] = useState({
    sort: '_id',
    sortDirection: 'asc',
    ref: '',
    address_street_type: '',
    address_street_name: '',
    address_street_number: '',
    address_floor: '',
    address_door: '',
    address_postcode: '',
    address_city: '',
    area_min: '',
    area_max: '',
    price_min: '',
    price_max: ''
  })
  const [housesBasic, setHousesBasic] = useState([])
  const [firstIndex, setFirstIndex] = useState(1)
  const [housesNumber, setHousesNumber] = useState(0)

  const getHousesBasic = useCallback(() => {
    const params = {itemsPerPage: itemsPerPage, firstIndex: firstIndex, ...filter}

    HayaDBService.getHousesBasic(params)
      .then(res => {
        setHousesBasic(res.housesBasic)
        setFirstIndex(res.firstIndex)
        setHousesNumber(res.totalNumber)
      })
      .catch(error => {
        launchErrorAlert('ERROR: viviendas no encontradas', error ? error : null, true)
      })
  }, [firstIndex, filter, setHousesBasic, launchErrorAlert])

  useEffect(() => {
    getHousesBasic()
  }, [getHousesBasic])

  return(
    <div className='home'>
      <div className='home__table'>
        {housesBasic && (
          <BasicTable
            itemType='House'
            basicFields={basicHouseFields}
            itemsBasic={housesBasic}
            getItemsBasic={getHousesBasic}
            filter={filter}
            setFilter={setFilter}
            firstIndex={firstIndex}
            setFirstIndex={setFirstIndex}
            itemsNumber={housesNumber}
          />
        )}
      </div>
    </div>
  )
}

export default HousesHome
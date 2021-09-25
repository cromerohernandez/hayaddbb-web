import React, { useContext, useEffect, useCallback, useState } from 'react'

import AlertContext from '../../contexts/AlertContext'
import HayaDBService from '../../services/HayaDBService'

import BasicTable from '../UI/BasicTable'
import PaginationNav from '../UI/PaginationNav'

import { basicHouseFields } from '../../const/housesConst'
import { itemsPerPage } from '../../const/tableConst'

const HousesHome = () => {
  const alert = useContext(AlertContext)

  const [filter, setFilter] = useState({
    sort: '_id',
    sortDirection: 'asc',
    address_city: '',
    area: '',
    description: '',
    price: ''
  })
  const [housesBasic, setHousesBasic] = useState(null)
  const [firstIndex, setFirstIndex] = useState(1)
  const [housesNumber, setHousesNumber] = useState(0)

  const getHousesBasic = useCallback(() => {
    const params = {itemsPerPage: itemsPerPage, firstIndex: firstIndex, ...filter}

    HayaDBService.getHousesBasic(params)
      .then(houses => {
        setHousesBasic(houses.housesBasic)
        setFirstIndex(houses.firstIndex)
        setHousesNumber(houses.totalNumber)
      })
      .catch(error => {
        alert.launchErrorAlert('ERROR: viviendas no encontradas', error ? error : null, true)
      })
  }, [firstIndex, filter, setHousesBasic, alert])

  useEffect(() => {
    getHousesBasic()
  }, [getHousesBasic])

  return(
    <div>
      <BasicTable itemType='House' basicFields={basicHouseFields} itemsBasic={housesBasic} filter={filter} setFilter={setFilter} setFirstIndex={setFirstIndex} getItemsBasic={getHousesBasic} />
      <PaginationNav firstIndex={firstIndex} setFirstIndex={setFirstIndex} itemsNumber={housesNumber}/>
    </div>
  )
}

export default HousesHome
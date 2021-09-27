import React, { useContext, useEffect, useCallback, useState } from 'react'

import AlertContext from '../../contexts/AlertContext'
import HayaDBService from '../../services/HayaDBService'

import BasicTable from '../UI/table/BasicTable'
import PaginationNav from '../UI/table/PaginationNav'

import { setAddress } from '../../helpers/housesHelper'
import { basicHouseFields } from '../../const/housesConst'
import { itemsPerPage } from '../../const/tableConst'

import '../../stylesheets/home.scss'

const HousesHome = () => {
  const alert = useContext(AlertContext)

  const [filter, setFilter] = useState({
    sort: '_id',
    sortDirection: 'asc',
    ref: '',
    address: '',
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
        setHousesBasic(res.housesBasic.map(houseBasic => setAddress(houseBasic)))
        setFirstIndex(res.firstIndex)
        setHousesNumber(res.totalNumber)
      })
      .catch(error => {
        alert.launchErrorAlert('ERROR: viviendas no encontradas', error ? error : null, true)
      })
  }, [firstIndex, filter, setHousesBasic, alert])

  useEffect(() => {
    getHousesBasic()
  }, [getHousesBasic])

  return(
    <div className='home'>
      <div className='home__filter'>
        FILTROS
      </div>

      <div className='home__table'>
        {housesBasic && (
          <BasicTable
            itemType='House'
            basicFields={basicHouseFields}
            itemsBasic={housesBasic}
            getItemsBasic={getHousesBasic}
            filter={filter}
            setFilter={setFilter}
            setFirstIndex={setFirstIndex}
          />
        )}
      </div>

      <div className='home__paginationNav'>
        <PaginationNav firstIndex={firstIndex} setFirstIndex={setFirstIndex} itemsNumber={housesNumber}/>
      </div>
    </div>
  )
}

export default HousesHome
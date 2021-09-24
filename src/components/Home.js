import React, { useEffect, useState } from 'react'

import HayaDBService from '../services/HayaDBService'

const Home = () => {
  const [house, setHouse] = useState(null)

  useEffect(() => {
    HayaDBService.houseDetail('614e08c4458384dc1716510e')
      .then(house => {
        setHouse(house)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return(
    <div>
      {house && (
        house.description
      )}
    </div>
  )
}

export default Home
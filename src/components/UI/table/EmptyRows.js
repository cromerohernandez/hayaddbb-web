import React, { useEffect, useState } from 'react'

import { basicHouseFields } from '../../../const/housesConst'

import '../../../stylesheets/UI/table/EmptyRows.scss'

const EmptyRows = ({ number }) => {
  const [emptyRows, setEmptyRows] = useState()

  useEffect(() => {
    let rowsToPush = []

    for (let i = 0; i < number; i++) {
      rowsToPush.push('-')
    }

    setEmptyRows(rowsToPush)
  }, [number, setEmptyRows])

  return (
    <>
      {emptyRows && (
        <>
          {emptyRows.map((row, i) => (
            <tr className='tableEmptyRow'>
              <td colSpan={basicHouseFields.length} key={i}>{row}</td>
            </tr>
          ))}
        </>
      )}

    </>
  )
}

export default EmptyRows
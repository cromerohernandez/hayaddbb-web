import React from 'react'

import '../../../stylesheets/UI/table/BasicRow.scss'

const BasicRow = ({ basicFields, itemBasic, handleSelectItem }) => {
  const handleShowDetail = () => handleSelectItem(itemBasic.id)

  return (
    <>
      {itemBasic && (
        <tr onClick={handleShowDetail} className='tableRow'>
          {basicFields.map((basicField, i) => (
            <td key={i}>{itemBasic[basicField.field] ? itemBasic[basicField.field] : '-'}</td>
          ))}
        </tr>
      )}
    </>
  )
}

export default BasicRow
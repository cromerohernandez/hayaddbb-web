import React from 'react'

const ItemBasicRow = ({ basicFields, itemBasic, handleSelectItem }) => {
  const handleShowDetail = () => handleSelectItem(itemBasic.id)

  return (
    <>
      {itemBasic && (
        <tr onClick={handleShowDetail}>
          {basicFields.map((basicField, i) => (
            <td key={i}>{itemBasic[basicField]}</td>
          ))}
        </tr>
      )}
    </>
  )
}

export default ItemBasicRow
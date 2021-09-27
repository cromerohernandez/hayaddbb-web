import React from 'react'

const BasicRow = ({ basicFields, itemBasic, handleSelectItem }) => {
  const handleShowDetail = () => handleSelectItem(itemBasic.id)

  return (
    <>
      {itemBasic && (
        <tr onClick={handleShowDetail}>
          {basicFields.map((basicField, i) => (
            <td key={i}>{itemBasic[basicField.field]}</td>
          ))}
        </tr>
      )}
    </>
  )
}

export default BasicRow
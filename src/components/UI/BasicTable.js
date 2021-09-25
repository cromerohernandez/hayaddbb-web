import React from 'react'

import ItemBasicRow from './ItemBasicRow'

import { Table } from 'react-bootstrap'

const BasicTable = ({ basicFields, itemsBasic }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {basicFields.map((basicField, i) => (
            <th key={i}>{basicField.title}</th>
          ))}
        </tr>

      </thead>

      {itemsBasic && (
        <tbody>
          {itemsBasic.map((itemBasic) => (
            <ItemBasicRow basicFields={basicFields} itemBasic={itemBasic} /*handleSelectItem={handleSelectItem}*/ key={itemBasic.id} />
          ))}
        </tbody>
      )}
    </Table>
  )
}

export default BasicTable

/*

<tr>
<SearchInput criterion={'nombre_contacto'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
<SearchInput criterion={'nombre_via'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
<SearchInput criterion={'numero_via'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
<SearchInput criterion={'localidad'} setFirstIndex={setFirstIndex} searchCriteria={searchCriteria} setSearchCriteria={setSearchCriteria} />
</tr>


{customersBasic && (
  <tbody>
    {customersBasic.map((customerBasic) => (
      <CustomerBasic customerBasic={customerBasic} handleSelectCustomer={handleSelectCustomer} key={customerBasic.id}/>
    ))}
  </tbody>
)}

*/
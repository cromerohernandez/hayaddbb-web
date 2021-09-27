//address fields except costpode and city
export const addressFields = [
  'address_street_type',
  'address_street_name',
  'address_street_number',
  'address_floor',
  'address_door',
  'address_rest'
]

// table fields
export const basicHouseFields = [
  { 
    field: 'ref',
    title: 'Referencia',
    filterType: 'input'
  },
  { 
    field: 'address',
    title: 'Dirección',
    filterType: 'input'
  },
  { 
    field: 'address_postcode',
    title: 'C.P.',
    filterType: 'input'
  },
  { 
    field: 'address_city',
    title: 'Ciudad',
    filterType: 'input',
  },
  { 
    field: 'area',
    title: 'Superficie (m2)',
    filterType: 'inputRange',
  },
  { 
    field: 'price',
    title: 'Precio (€)',
    filterType: 'inputRange',
  },
]
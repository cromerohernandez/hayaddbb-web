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

// initial error messages to validation house forms
export const houseValidators = {
  ref: val => val,
  address_city: val => val,
  address_postcode: val => val,
  address_street_type: val => val,
  address_street_name: val => val,
  address_street_number: val => val,
  price: val => val,
  type: val => val
}

// house types (API house.model)
export const houseTypes = [
  'Ático',
  'Bajo',
  'Casa',
  'Chalet independiente',
  'Chalet adosado',
  'Piso'
]

// house validators to check house forms
export const houseInitialErrorMessages = {
  ref: 'referencia es requerida',
  address_city: 'ciudad es requerida',
  address_postcode: 'c.p. es requerido',
  address_street_type: 'tipo vía es requerido',
  address_street_name: 'nombre vía es requerido',
  address_street_number: 'número vía es requerido',
  price: 'precio es requerido',
  type: 'tipo vivienda es requerido'
}

// street types (API house.model)
export const streetTypes = [
  'Avenida',
  'Bulevar',
  'Calle',
  'Callejón',
  'Camino',
  'Pasaje',
  'Plaza',
  'Ronda',
  'Travesía'
]
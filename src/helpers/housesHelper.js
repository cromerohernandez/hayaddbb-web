export const setAddressString = (address_street_type, address_street_name, address_street_number, address_floor, address_door, address_rest) => {
  let addressString = `${address_street_type} ${address_street_name}, ${address_street_number}`

  if (address_floor && address_door) {
    addressString += ` · ${address_floor}º${address_door}`
  } else if (address_floor) {
    addressString += ` · ${address_floor}º`
  } else if (address_door) {
    addressString += ` · ${address_door}`
  } 

  if (address_rest) {
    addressString += ` (${address_rest})`
  }

  return addressString
}
import { setAddressString } from '../../helpers/housesHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faStore, faCar, faSeedling } from '@fortawesome/free-solid-svg-icons'

import '../../stylesheets/details.scss'

const HouseDetail = ({ house }) => {
  return(
    <>
      <section className='itemDetailSection'> 
        <label className='itemDetailSection__label'>DIRECCIÓN</label>

        {(house.address_street_type || house.address_street_name || house.address_street_number || house.address_floor || house.address_door || house.address_rest) && (
          <p className='itemDetailSection__p'>{setAddressString(house.address_street_type, house.address_street_name, house.address_street_number, house.address_floor, house.address_door, house.address_rest)}</p>
        )}

        {house.address_postcode && (
          <p className='itemDetailSection__p'>{house.address_postcode}</p>
        )}

        {house.address_city && (
          <p className='itemDetailSection__p'>{house.address_city}</p>
        )}
      </section>

      <section className='itemDetailSection'> 
        <label className='itemDetailSection__label'>CARACTERÍSTICAS</label>

        {house.type && (
          <p className='itemDetailSection__p'>{house.type}</p>
        )}

        {house.area && (
          <p className='itemDetailSection__p'>{house.area} m<sup>2</sup></p>
        )}

        {house.price && (
          <p className='itemDetailSection__p'>{house.price} €</p>
        )}
      </section>

      <section className='itemDetailSection'> 
        <label className='itemDetailSection__label'>EQUIPAMIENTO</label>

        <section className='itemDetailSection__rowSection'>
          <p className={'itemDetailSection__p'}>
            <span className={'itemDetailSection__p icon'}><FontAwesomeIcon icon={faBath}/></span>
            {house.bathrooms}
          </p>
          <p className={'itemDetailSection__p'}>
            <span className={'itemDetailSection__p icon'}><FontAwesomeIcon icon={faBed}/></span>
            {house.bedrooms}
          </p>
          <p className={'itemDetailSection__p icon' + (house.garage ? '' : ' iconOff')}><FontAwesomeIcon icon={faCar}/></p>
          <p className={'itemDetailSection__p icon' + (house.garden ? '' : ' iconOff')}><FontAwesomeIcon icon={faSeedling}/></p>
          <p className={'itemDetailSection__p icon' + (house.terrace ? '' : ' iconOff')}><FontAwesomeIcon icon={faStore}/></p>
        </section>
      </section>

      <section className='itemDetailSection'> 
        <label className='itemDetailSection__label'>DESCRIPCIÓN</label>

        {house.description && (
          <p className='itemDetailSection__p'>{house.description}</p>
        )}
      </section>
    </>
  )
}

export default HouseDetail
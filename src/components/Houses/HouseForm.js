import React, { useCallback, useContext, useEffect, useState } from 'react'

import AlertContext from '../../contexts/AlertContext'
import HayaDBService from '../../services/HayaDBService'

import useInput from '../../hooks/useInput'
import useCheckbox from '../../hooks/useCheckbox'
import FormInput from '../UI/form/FormInput'
import FormSelect from '../UI/form/FormSelect'
import FormCheckbox from '../UI/form/FormCheckbox'
import FormTextArea from '../UI/form/FormTextArea'

import { Button, Modal } from 'react-bootstrap'

import { houseInitialErrorMessages, houseTypes, houseValidators, streetTypes } from '../../const/housesConst'

import '../../stylesheets/UI/form/form.scss'

const HouseForm = ({ house, formType, exit }) => {
  const alert = useContext(AlertContext)

  const [formErrors, setFormErrors] = useState(false)
  const [requestSubmit, setRequestSubmit] = useState(false)
  const [requestCancel, setRequestCancel] = useState(false)

  const {
    value: ref,
    touch: refTouch,
    error: refError,
    handleInput: refHandleInput
  } = useInput(house ? house.ref : '', houseValidators.ref, houseInitialErrorMessages.ref, formType)

  const {
    value: address_city,
    touch: address_cityTouch,
    error: address_cityError,
    handleInput: addressCityHandleInput
  } = useInput(house ? house.address_city : '', houseValidators.address_city, houseInitialErrorMessages.address_city, formType)

  const {
    value: address_door,
    handleInput: addressDoorHandleInput
  } = useInput(house ? house.address_door : '')

  const {
    value: address_floor,
    handleInput: addressFloorHandleInput
  } = useInput(house ? house.address_floor : '')
  
  const {
    value: address_postcode,
    touch: address_postcodeTouch,
    error: address_postcodeError,
    handleInput: addressPostcodeHandleInput
  } = useInput(house ? house.address_postcode : '', houseValidators.address_postcode, houseInitialErrorMessages.address_postcode, formType)

  const {
    value: address_rest,
    handleInput: addressRestHandleInput
  } = useInput(house ? house.address_rest : '')

  const {
    value: address_street_type,
    touch: address_street_typeTouch,
    error: address_street_typeError,
    handleInput: addressStreetTypeHandleInput
  } = useInput(house ? house.address_street_type : '', houseValidators.address_street_type, houseInitialErrorMessages.address_street_type, formType)

  const {
    value: address_street_name,
    touch: address_street_nameTouch,
    error: address_street_nameError,
    handleInput: addressStreetNameHandleInput
  } = useInput(house ? house.address_street_name : '', houseValidators.address_street_name, houseInitialErrorMessages.address_street_name, formType)

  const {
    value: address_street_number,
    touch: address_street_numberTouch,
    error: address_street_numberError,
    handleInput: addressStreetNumberHandleInput
  } = useInput(house ? house.address_street_number : '', houseValidators.address_street_number, houseInitialErrorMessages.address_street_number, formType)

  const {
    value: type,
    touch: typeTouch,
    error: typeError,
    handleInput: typeHandleInput
  } = useInput(house ? house.type : '', houseValidators.type, houseInitialErrorMessages.type, formType)

  const {
    value: area,
    handleInput: areaHandleInput
  } = useInput(house ? house.area : '')

  const {
    value: price,
    touch: priceTouch,
    error: priceError,
    handleInput: priceHandleInput
  } = useInput(house ? house.price : '', houseValidators.price, houseInitialErrorMessages.price, formType)

  const {
    value: bathrooms,
    handleInput: bathroomsHandleInput
  } = useInput(house ? house.bathrooms : '')

  const {
    value: bedrooms,
    handleInput: bedroomsHandleInput
  } = useInput(house ? house.bedrooms : '')

  const {
    value: garage,
    handleCheckbox: garageHandleCheckbox
  } = useCheckbox(house ? house.garage : '')

  const {
    value: garden,
    handleCheckbox: gardenHandleCheckbox
  } = useCheckbox(house ? house.garden : '')

  const {
    value: terrace,
    handleCheckbox: terraceHandleCheckbox
  } = useCheckbox(house ? house.terrace : '')

  const {
    value: description,
    handleInput: descriptionHandleInput
  } = useInput(house ? house.description : '')

  const anyError = useCallback(() => {
    const errors = [
                    refError.active,
                    address_cityError.active,
                    address_postcodeError.active,
                    address_street_typeError.active,
                    address_street_nameError.active,
                    address_street_numberError.active,
                    priceError.active,
                  ]
    setFormErrors( errors.some(x => x === true))
  }, [ 
      refError.active,
      address_cityError.active,
      address_postcodeError.active,
      address_street_typeError.active,
      address_street_nameError.active,
      address_street_numberError.active,
      priceError.active
  ])

  useEffect(() => {
    anyError()
  }, [anyError])
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const houseData = {
      address_city,
      address_door,
      address_floor,
      address_postcode,
      address_rest,
      address_street_type,
      address_street_name,
      address_street_number,
      area,
      bathrooms,
      bedrooms,
      description,
      garage,
      garden,
      terrace,
      type,
      price,
      ref
    }

    if (formType === 'create') {
      Object.keys(houseData).map(function(key) {
        if (houseData[key] === '') {
          houseData[key] = null
        }
        return houseData[key]
      })

      HayaDBService.createHouse(houseData)
        .then(res => {
          exit()
          alert.launchSuccessAlert(`Registro creado correctamente`)
        })
        .catch(error => {
          alert.launchErrorAlert('ERROR: registro no creado', error ? error : null)
        })
    } else if (formType === 'edit') {
      HayaDBService.updateHouse(house.id, houseData)
        .then(res => {
          exit()
          alert.launchSuccessAlert(`Registro modificado correctamente`)
        })
        .catch(error => {
          alert.launchErrorAlert('ERROR: registro no modificado', error ? error : null)
        })
    }
  }

  const handleRequestSubmit = () => {
    setRequestSubmit(true)
  }

  const handleAbortRequestSubmit = () => {
    setRequestSubmit(false)
  }

  const handleRequestCancel = () => {
    setRequestCancel(true)
  }

  const handleAbortRequestCancel = () => {
    setRequestCancel(false)
  }

  const handleCancel = () => exit()

  return(
    <>
      <Modal.Body>
        {formType === 'create' && (
          <section className='section'>
            <section className='section__subsection'> 
              <label className='section__subsection__label'>referencia:</label>
              <FormInput name='ref' placeholder='*' {...refHandleInput} />
              {refTouch && refError.active && (
                <div className='section__subsection__error'>{refError.message}</div>
              )}
            </section>
          </section>
        )}

        <section className='section'>
          <label className='section__label'>DIRECCIÓN</label>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>tipo vía:</label>
            <FormSelect options={streetTypes} name='address_street_type' placeholder='*' {...addressStreetTypeHandleInput} />
            {address_street_typeTouch && address_street_typeError.active && (
              <div className='section__subsection__error'>{address_street_typeError.message}</div>
            )}
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>nombre vía:</label>
            <FormInput name='address_street_name' placeholder='*' {...addressStreetNameHandleInput} />
            {address_street_nameTouch && address_street_nameError.active && (
              <div className='section__subsection__error'>{address_street_nameError.message}</div>
            )}
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>número vía:</label>
            <FormInput name='address_street_number' placeholder='*' {...addressStreetNumberHandleInput} />
            {address_street_numberTouch && address_street_numberError.active && (
              <div className='section__subsection__error'>{address_street_numberError.message}</div>
            )}
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>planta:</label>
            <FormInput name='address_floor' {...addressFloorHandleInput} />
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>puerta:</label>
            <FormInput name='address_door' {...addressDoorHandleInput} />
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>resto:</label>
            <FormInput name='address_rest' {...addressRestHandleInput} />
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>c.p.:</label>
            <FormInput name='address_postcode' placeholder='*' {...addressPostcodeHandleInput} />
            {address_postcodeTouch && address_postcodeError.active && (
              <div className='section__subsection__error'>{address_postcodeError.message}</div>
            )}
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>ciudad:</label>
            <FormInput name='address_city' placeholder='*' {...addressCityHandleInput} />
            {address_cityTouch && address_cityError.active && (
              <div className='section__subsection__error'>{address_cityError.message}</div>
            )}
          </section>
        </section>

        <section className='section'>
          <label className='section__label'>CARACTERÍSTICAS</label>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>tipo vivienda:</label>
            <FormSelect options={houseTypes} placeholder='*' name='type' {...typeHandleInput} />
            {typeTouch && typeError.active && (
              <div className='section__subsection__error'>{typeError.message}</div>
            )}
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>superficie (m<sup>2</sup>):</label>
            <FormInput name='area' {...areaHandleInput} />
          </section>

          <section className='section__subsection'> 
            <label className='section__subsection__label'>precio (€):</label>
            <FormInput name='price' placeholder='*' {...priceHandleInput} />
            {priceTouch && priceError.active && (
              <div className='section__subsection__error'>{priceError.message}</div>
            )}
          </section>
        </section>

        <section className='section'>
          <label className='section__label'>EQUIPAMIENTO</label>

          <section className='section__rowSubsection'>
            <section className='section__rowSubsection__subsection'> 
              <label className='section__rowSubsection__label'>nº baños:</label>
              <FormInput name='bathrooms' {...bathroomsHandleInput} />
            </section>

            <section className='section__rowSubsection__subsection'> 
              <label className='section__rowSubsection__label'>nº habitaciones:</label>
              <FormInput name='bedrooms' {...bedroomsHandleInput} />
            </section>
          </section>

          <section className='section__rowSubsection'>
            <section className='section__rowSubsection__subsection'>
              <FormCheckbox name='garage' {...garageHandleCheckbox} />
              <label className='section__rowSubsection__label'>garaje</label>
            </section>

            <section className='section__rowSubsection__subsection'>
              <FormCheckbox name='garden' {...gardenHandleCheckbox} />
              <label className='section__rowSubsection__label'>jardín</label>
            </section>

            <section className='section__rowSubsection__subsection'>
              <FormCheckbox name='terrace' {...terraceHandleCheckbox} />
              <label className='section__rowSubsection__label'>terraza</label>
            </section>
          </section>
        </section>

        <section className='section'>
          <label className='section__label'>DESCRIPCIÓN</label>

          <section className='section__subsection'> 
            <FormTextArea options={streetTypes} name='description' {...descriptionHandleInput} />
          </section>
        </section>

        <p className='section__asterisk'>* campos requeridos</p>
      </Modal.Body>
      <Modal.Footer>
        {!requestCancel && !requestSubmit && (
          <>
            <Button disabled={formErrors} variant='success' onClick={handleRequestSubmit}>Guardar</Button>
            <Button variant='danger' onClick={handleRequestCancel}>Cancelar</Button>
          </>
        )}

        {requestSubmit && (
          <>
            {formType === 'create' && (
              <p>¿Desea crear el registro?</p>
            )}

            {formType === 'edit' && (
              <p>¿Desea guardar los cambios?</p>
            )}

            <Button disabled={formErrors} variant='success' onClick={handleSubmit}>Sí</Button>
            <Button variant='danger' onClick={handleAbortRequestSubmit}>No</Button>
          </>
        )}

        {requestCancel && (
          <>
            {formType === 'create' && (
              <p>¿Desea cancelar la creación del registro?</p>
            )}

            {formType === 'edit' && (
              <p>¿Desea salir sin guardar los registro?</p>
            )}

            <Button variant='danger' onClick={handleCancel}>Sí</Button>
            <Button variant='primary' onClick={handleAbortRequestCancel}>No</Button>
          </>
        )}
      </Modal.Footer>
    </>
  )
}

export default HouseForm
import SearchSelect from '../UI/filter/SearchSelect'
import SearchInputRange from '../UI/filter/SearchInputRange'
import SearchSelectBoolean from '../UI/filter/SearchSelectBoolean'

import { houseTypes } from '../../const/housesConst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faCar, faSeedling } from '@fortawesome/free-solid-svg-icons'

import '../../stylesheets/UI/table/FiltersBar.scss'

const FiltersBar = ({ setFirstIndex, filter, setFilter }) => {

  return (
    <section className='filtersBar'>
      <section className='filtersBar__section filtersBar__section--select'> 
        <label className='filtersBar__section__label'>tipo vivienda:</label>

        <section className='filtersBar__section__subsection'> 
          <SearchSelect
            setFirstIndex={setFirstIndex}
            criterion={'type'}
            options={houseTypes}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </section>
      </section>

      <section className='filtersBar__section filtersBar__section--range'> 
        <label className='filtersBar__section__label'>nº cuartos de baño:</label>

        <section className='filtersBar__section__subsection'> 
          <SearchInputRange
            setFirstIndex={setFirstIndex}
            criterion={'bathrooms'}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </section>
      </section>

      <section className='filtersBar__section filtersBar__section--range'> 
        <label className='filtersBar__section__label'>nº habitaciones:</label>

        <section className='filtersBar__section__subsection'> 
          <SearchInputRange
            setFirstIndex={setFirstIndex}
            criterion={'bedrooms'}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </section>
      </section>

      <section className='filtersBar__section filtersBar__section--booleans'> 
        <section className='filtersBar__section__subsection'> 
          <label className='filtersBar__section__label'><FontAwesomeIcon icon={faCar}/></label>

          <SearchSelectBoolean
            setFirstIndex={setFirstIndex}
            criterion={'garage'}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </section>
        
        <section className='filtersBar__section__subsection'> 
          <label className='filtersBar__section__label'><FontAwesomeIcon icon={faSeedling}/></label>

          <SearchSelectBoolean
            setFirstIndex={setFirstIndex}
            criterion={'garden'}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </section>

        <section className='filtersBar__section__subsection'> 
          <label className='filtersBar__section__label'><FontAwesomeIcon icon={faStore}/></label>

          <SearchSelectBoolean
            setFirstIndex={setFirstIndex}
            criterion={'terrace'}
            searchCriteria={filter}
            setSearchCriteria={setFilter}
          />
        </section>
      </section>
    </section>
  )
}

export default FiltersBar
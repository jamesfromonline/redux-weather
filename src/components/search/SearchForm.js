import React from 'react'
import {geolocated} from 'react-geolocated'

const SearchForm = props => {
  if(props.isGeolocationEnabled) console.log(props.coords)
  return (
    <form className={props.show ? 'search search--active' : 'search'}
          onSubmit={props.submit}>
      <input type='text'
             name='location'
             placeholder='city, zip, coordinates, etc...'
             onSubmit={e => e.preventDefault()} />
      <button type='submit'>
        <span role='image' aria-label='Submit your location'>
          👉
        </span>
      </button>
    </form>
  )
}

export default geolocated()(SearchForm)

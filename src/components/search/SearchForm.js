import React from 'react'

const SearchForm = props => {
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

export default SearchForm

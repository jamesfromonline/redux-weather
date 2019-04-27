import React from 'react'

const WeatherLocation = props => {
  return (
    <div className={props.show ? 'search search--active' : 'search'}>
      <form onSubmit={props.submit}>
        <input type='text'
               name='location'
               placeholder='city, zip, coordinates, etc...'
               onSubmit={e => e.preventDefault()} />
        <button type='submit'>👉</button>
      </form>
    </div>
  )
}

export default WeatherLocation

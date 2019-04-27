import React from 'react'

const WeatherLocation = props => {
  return (
    <div className='weather-location'>
      <form onSubmit={props.submit}>
        <input type='text'
               placeholder='city, zip, coordinates, etc...'
               onSubmit={e => e.preventDefault()} />
        <button type='submit'>Go</button>
      </form>
    </div>
  )
}

export default WeatherLocation

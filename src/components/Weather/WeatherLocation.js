import React, { Component } from 'react'

class WeatherLocation extends Component {

  render() {
    return (
      <div className='weather-location'>
        <form onSubmit={e => this.props.submit(e, this.refs.weatherLocation)}>
          <input type='text'
                 ref='weatherLocation'
                 name='weather-location'
                 placeholder='city, zip, coordinates, etc...'
                 onSubmit={e => e.preventDefault()} />
        </form>
        <button onClick={() => this.props.submit(this.refs.weatherLocation)}>Go</button>
      </div>
    )
  }

}

export default WeatherLocation

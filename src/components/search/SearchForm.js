import React, { Component } from 'react'
import {geolocated} from 'react-geolocated'

class SearchForm extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.coords && nextProps.fetchWeather) {
      nextProps.fetchWeather(`${nextProps.coords.latitude}, ${nextProps.coords.longitude}`)
      nextProps.toggleWeather(true)
      console.log(nextProps.coords.latitude, nextProps.coords.longitude)
    }
    return null
  }
  render() {
    return (
      <form className={this.props.show ? 'search search--active' : 'search'}
            onSubmit={this.props.submit}>
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
}

export default geolocated()(SearchForm)

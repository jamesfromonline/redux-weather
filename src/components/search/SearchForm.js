import React, { Component } from 'react'
import {geolocated} from 'react-geolocated'

class SearchForm extends Component {
  state={}

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.coords && nextProps.fetchWeather) {
      nextProps.fetchWeather(`${nextProps.coords.latitude}, ${nextProps.coords.longitude}`)
      nextProps.toggleWeather(true)
    }
    return null
  }
  render() {
    return (
      <form className={this.props.show ? 'search search--active' : 'search'}
            onSubmit={this.props.submit}>
        <div className='search__input-container'>
          <input type='text'
                 name='location'
                 placeholder='city, zip, coordinates, etc...'
                 onSubmit={e => e.preventDefault()} />
          <button type='submit'>
            <span role='image' aria-label='Submit your location'>
              👉
            </span>
          </button>
        </div>
      </form>
    )
  }
}

export default geolocated()(SearchForm)

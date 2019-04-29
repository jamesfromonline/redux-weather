import React, { Component } from 'react'
import { fetchWeather, toggleWeather } from '../../actions/weatherActions'
import { getBackgroundColor } from '../../actions/backgroundActions'
import SearchForm from '../search/SearchForm'
import CurrentWeather from './CurrentWeather'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Weather extends Component {

  handleSubmit = e => {
    e.preventDefault()
    const value = e.target.querySelector('input').value
    if (value.length > 0) {
      this.props.fetchWeather(value)
      this.props.toggleWeather(true)
    }
  }

  componentDidMount() {
    this.props.getBackgroundColor()
  }

  render() {
    const data = this.props.weather,
          backgroundStyle = {
            background: this.props.background.backgroundColor
          }

    if (data.showWeather) {
      return (
        <main className='weather' style={backgroundStyle}>
          <div className='weather__wrapper'>
            <SearchForm show={data.showWeather}
                        submit={this.handleSubmit} />
            <CurrentWeather data={data.currentWeather} />
          </div>
        </main>
      )
    } else {
      return (
        <main className='weather' style={backgroundStyle}>
          <div className='weather__wrapper'>
            <SearchForm show={data.showWeather}
                        fetchWeather={this.props.fetchWeather}
                        toggleWeather={this.props.toggleWeather}
                        submit={this.handleSubmit} />
          </div>
        </main>
      )
    }
  }
}

Weather.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  toggleWeather: PropTypes.func.isRequired,
  getBackgroundColor: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  weather: state.weather,
  background: state.background
})

export default connect(mapStateToProps, { fetchWeather, toggleWeather, getBackgroundColor })(Weather)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchWeather } from '../../actions/weatherActions'
import WeatherLocation from './WeatherLocation'
import CurrentWeather from './CurrentWeather'

class Weather extends Component {

  handleSubmit = (e, location) => {
    e.preventDefault()
    this.props.fetchWeather(location.value)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.weather) console.log(nextProps.weather)
  }

  render() {
    const data = this.props.weather
    return <WeatherLocation submit={this.handleSubmit} />
  }
}

Weather.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  weather: state.weather,
})

export default connect(mapStateToProps, { fetchWeather })(Weather)

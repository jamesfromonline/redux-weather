import React from 'react'
import Loader from '../loader/Loader'
import BottomBar from './components/bottom-bar/BottomBar'
import TopBar from './components/top-bar/TopBar'
import Temperature from './components/temperature/Temperature'

const CurrentWeather = props => {
  const current = props.data.current,
        location = props.data.location
  if (current && location) {
    return (
      <section className='current-weather animate__fade-in'>
        <TopBar current={current} location={location} />
        <h2>
          {location.name}
        </h2>
        <Temperature current={current} />
        <BottomBar current={current} />
      </section>
    )
  } else {
    return <Loader />
  }
}

export default CurrentWeather

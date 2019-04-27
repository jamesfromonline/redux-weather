import React from 'react'
import moment from 'moment'

const CurrentWeather = props => {
  const current = props.data.current
  const location = props.data.location
  // const time = location.localtime_epoch
  if (current && location) {
    return (
      <div className='current-weather'>
        <div className='current-weather__top-bar'>
          <div className='current-weather_icon'>
            <img src={`http:${current.condition.icon}`} alt={current.condition.text} />
            <p style={{ textAlign: 'center', marginTop: '0' }}>{current.condition.text}</p>
          </div>
          <div className='current-weather__datetime'>
            <p style={{ textAlign: 'right', marginTop: '0' }}>
              {
                moment.unix(location.localtime_epoch).format('h:mmA')
              }
            </p>
            <p>
              {
                moment.unix(location.localtime_epoch).format('LL')
              }
            </p>
          </div>
        </div>
        <div className='current-weather__temps'>
          {current.temp_f}˚F
          <span>
            {current.temp_c}˚C
          </span>
        </div>

      </div>
    )
  } else {
    return 'LOADING...'
  }
}

export default CurrentWeather

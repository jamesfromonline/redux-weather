import React from 'react'

const CurrentWeather = props => {
  const current = props.data.current
  console.log(current)
  if (current) {
    return (
      <div className='current-weather'>
        <div className='current-weather__top-bar'>
          <div className='current-weather_icon'>
            <img src={`http:${current.condition.icon}`} alt={current.condition.text} />
          </div>
          <div className='current-weather__temps'>
            {current.temp_f}˚F
            <span>
              {current.temp_c}˚C
            </span>
          </div>
        </div>

      </div>
    )
  } else {
    return 'LOADING...'
  }
}

export default CurrentWeather

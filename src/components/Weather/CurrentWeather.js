import React from 'react'
import moment from 'moment'
import Loader from '../loader/Loader'

const CurrentWeather = props => {
  const current = props.data.current,
        location = props.data.location
  if (current && location) {
    return (
      <section className='current-weather animate__fade-in'>
        <div className='current-weather__top-bar'>
          <div className='current-weather_icon'>
            <img src={`http:${current.condition.icon}`}
                 alt={current.condition.text} />
          </div>
          <div className='current-weather__datetime'>
            <p>{moment.unix(location.localtime_epoch).format('h:mmA')}</p>
            <p>{moment.unix(location.localtime_epoch).format('LL')}</p>
          </div>
        </div>
        <h2>
          {location.name}
        </h2>
        <div className='current-weather__temps'>
          {current.temp_f}˚F
          <span>
            {current.temp_c}˚C
          </span>
        </div>
        <ul className='bottom-bar'>
          <li className='bottom-bar__item'>
            <p>
              Humidity
            </p>
            <div className='bottom-bar__main-item'>
              {current.humidity}%
            </div>
          </li>
          <li className='bottom-bar__item'>
            <p>
              Feels Like
            </p>
            <div className='bottom-bar__main-item'>
              {current.feelslike_f}˚F
              <span>
                {current.feelslike_c}˚C
              </span>
            </div>
          </li>
          <li className='bottom-bar__item'>
            <p>
              Wind
            </p>
            <div className='bottom-bar__main-item'>
              {current.wind_mph}mph
            </div>
          </li>
          <li className='bottom-bar__item'>
            <p>
              UV Index
            </p>
            <div className='bottom-bar__main-item'>
              {current.uv}
            </div>
          </li>
        </ul>
      </section>
    )
  } else {
    return <Loader />
  }
}

export default CurrentWeather

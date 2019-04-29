import React from 'react'

const BottomBar = props => (
  <ul className='bottom-bar'>
    <li className='bottom-bar__item'>
      <p>
        Humidity
      </p>
      <div className='bottom-bar__main-item'>
        {props.current.humidity}%
      </div>
    </li>
    <li className='bottom-bar__item'>
      <p>
        Feels Like
      </p>
      <div className='bottom-bar__main-item'>
        {props.current.feelslike_f}˚F
      </div>
    </li>
    <li className='bottom-bar__item'>
      <p>
        Wind
      </p>
      <div className='bottom-bar__main-item'>
        {props.current.wind_mph}mph
      </div>
    </li>
    <li className='bottom-bar__item'>
      <p>
        UV Index
      </p>
      <div className='bottom-bar__main-item'>
        {props.current.uv}
      </div>
    </li>
  </ul>
)

export default BottomBar

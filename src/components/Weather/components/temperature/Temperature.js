import React from 'react'

const Temperature = props => (
  <div className='temperature'>
    {props.current.temp_f}˚F
    <span>
      {props.current.temp_c}˚C
    </span>
  </div>
)

export default Temperature

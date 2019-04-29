import React from 'react'
import moment from 'moment'

const TopBar = props => (
  <div className='top-bar'>
    <div className='top-bar_icon'>
      <img src={`http:${props.current.condition.icon}`}
           alt={props.current.condition.text} />
    </div>
    <div className='top-bar__datetime'>
      <p>{moment.unix(props.location.localtime_epoch).format('h:mmA')}</p>
      <p>{moment.unix(props.location.localtime_epoch).format('LL')}</p>
    </div>
  </div>
)

export default TopBar

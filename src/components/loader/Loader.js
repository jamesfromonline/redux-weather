import React from 'react'

const dots = []
for (let i = 0; i < 8; i++) dots.push(i)

const Loader = p => (
  <div className='loader'>
    {dots.map((d, i) => <div key={i} className='loader__dot' />)}
		<div className='loading' />
	</div>
)

export default Loader

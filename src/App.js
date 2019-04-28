import React from 'react'
import Weather from './components/weather/Weather'
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Weather />
      </div>
    </Provider>
  )
}

export default App

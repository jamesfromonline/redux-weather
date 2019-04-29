import React from 'react'
import Weather from './components/weather/Weather'
import Div100vh from 'react-div-100vh'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <Div100vh>
        <div className='app'>
          <Weather />
        </div>
      </Div100vh>
    </Provider>
  )
}

export default App

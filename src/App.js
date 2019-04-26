import React from 'react'
import Weather from './components/Weather/Weather'
import './App.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  )
}

export default App

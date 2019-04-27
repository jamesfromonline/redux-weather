import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReducer'
import { backgroundReducer } from './backgroundReducer'

export const rootReducer = combineReducers({
  weather: weatherReducer,
  background: backgroundReducer
})

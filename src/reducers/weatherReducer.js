import { FETCH_WEATHER, SHOW_WEATHER } from '../actions/types'

const initialState = {
  currentWeather: [],
  showWeather: false
}

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
          currentWeather: action.payload
      }
      break
    case SHOW_WEATHER:
      return {
        ...state,
        showWeather: action.payload
      }
      break
    default:
      return state
  }
}

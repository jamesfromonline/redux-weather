import { FETCH_WEATHER } from '../actions/types'

const initialState = {
  currentWeather: []
}

export const weatherReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
          currentWeather: action.payload
      }
      break
    default:
      return state
  }
}

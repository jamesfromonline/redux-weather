import { GET_BACKGROUND } from '../actions/types'

const initialState = {
  backgroundColor: ''
}

export const backgroundReducer = (state = initialState, action) => {
  console.log('running background reducer')
  switch(action.type) {
    case GET_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.payload
      }
    break
    default:
      return state
  }
}

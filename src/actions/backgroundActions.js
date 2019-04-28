import { GET_BACKGROUND } from './types'
import { day, night, dusk, dawn } from '../utils/colors'

export const getBackgroundColor = () => dispatch => {
  const time = new Date(),
        hour = time.getHours()

  let color
  if (hour === 19) {
    color = dusk
  } else if (hour >= 22 && hour <= 6) {
    color = night
  } else if (hour >= 6 && hour <= 8) {
    color = dawn
  } else {
    color = day
  }

  dispatch({
    type: GET_BACKGROUND,
    payload: color
  })
}

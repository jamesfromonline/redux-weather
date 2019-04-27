import { GET_BACKGROUND } from './types'

export const getBackgroundColor = () => dispatch => {
  const time = new Date(),
        hour = time.getHours()
  let color
  if (hour >= 19 && hour <= 24) {
    color = `linear-gradient(to bottom, #111 0%, rgb(189, 40, 213) 80%, rgb(250, 90, 21) 100%)`
  } else {
    color = `rgba(250, 90, 21,0.5)`
  }
  dispatch({
    type: GET_BACKGROUND,
    payload: color
  })
  console.log(hour, color)
}

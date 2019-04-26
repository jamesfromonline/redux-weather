import { FETCH_WEATHER } from './types'

export const fetchWeather = location => async dispatch => {
  const url = `http://api.apixu.com/v1/current.json?key=197520bf96ea4741875202422192604&q=${location}`
  const data = await fetch(url),
        json = await data.json()
  if (json) dispatch({
    type: FETCH_WEATHER,
    payload: json
  })
  console.log(json)
}

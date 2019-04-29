import { FETCH_WEATHER, SHOW_WEATHER } from './types'

export const fetchWeather = location => async dispatch => {
  const url = `http://api.apixu.com/v1/current.json?key=197520bf96ea4741875202422192604&q=${location}`
  try {
    const data = await fetch(url)
    const json = await data.json()
    if (json) dispatch({
      type: FETCH_WEATHER,
      payload: json
    })

    // We will error handle here
    // if (json.error) dispatch({
    //   type: WEATHER_ERROR
    // })

  } catch(e) {
    console.error('error damn: ', e)
  }
}

export const toggleWeather = b => dispatch => {
  dispatch({
    type: SHOW_WEATHER,
    payload: b
  })
}

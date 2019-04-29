import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'

const initialState = {},
      middleWare = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

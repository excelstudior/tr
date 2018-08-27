import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/index'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware=createLogger()

export default function configureStore(preloadedState) {
    return createStore(
      reducer,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  }
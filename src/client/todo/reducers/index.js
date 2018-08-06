import { combineReducers } from 'redux'
import todos from './todos'
import modes from './modes'


export default combineReducers({
  todos,
  modes
})
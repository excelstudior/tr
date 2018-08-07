import { combineReducers } from 'redux'
import todos from './todos'
import modes from './modes'
import users from './users'


export default combineReducers({
  todos,
  modes,
  users
})
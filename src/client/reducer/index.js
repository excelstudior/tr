import { combineReducers } from 'redux';
import tech from '../ButtonGroup/reducers/tech'
import bank from '../Bank/reducers/bank'
export default combineReducers({
    tech,
    bank
})
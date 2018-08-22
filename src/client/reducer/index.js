import { combineReducers } from 'redux';
import tech from '../ButtonGroup/reducers/tech'
import bank from '../Bank/reducers/bank'
import contacts from '../ChatApp/reducers/contacts'
export default combineReducers({
    tech,
    bank,
    contacts
})
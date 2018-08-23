import { combineReducers } from 'redux';
import tech from '../ButtonGroup/reducers/tech'
import bank from '../Bank/reducers/bank'
import contacts from '../ChatApp/reducers/contacts'
import activeUserId from '../ChatApp/reducers/activeUserId'
export default combineReducers({
    // tech,
    // bank,
    contacts,
    activeUserId
})
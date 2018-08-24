import { combineReducers } from 'redux';
import tech from '../ButtonGroup/reducers/tech'
import bank from '../Bank/reducers/bank'
import contacts from '../ChatApp/reducers/contacts'
import activeUserId from '../ChatApp/reducers/activeUserId'
import messages from '../ChatApp/reducers/messages'
import messageInput from '../ChatApp/reducers/messageInput'
export default combineReducers({
    // tech,
    // bank,
    contacts,
    activeUserId,
    messages,
    messageInput
})
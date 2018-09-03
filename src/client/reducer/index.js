import { combineReducers } from 'redux';
import selectedSubreddit from '../Reddit/reducers/selectedSubreddit'
import postsBySubreddit from '../Reddit/reducers/postsBySubreddit'
import user from '../Layout/reducers/user'
import validationErrors from '../Layout/reducers/validationErrors'
export default combineReducers({
    selectedSubreddit,
    postsBySubreddit,
    user,
    validationErrors
})
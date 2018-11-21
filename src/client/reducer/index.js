import { combineReducers } from 'redux';
import selectedSubreddit from '../Reddit/reducers/selectedSubreddit';
import postsBySubreddit from '../Reddit/reducers/postsBySubreddit';
import user from '../Layout/reducers/user';
import validationErrors from '../Layout/reducers/validationErrors';
import userProfile from '../User/Profile/reducers/userProfile';
import users from '../User/Admin/reducers/users';
import customers from '../Customer/reducers/customers'
export default combineReducers({
    selectedSubreddit,
    postsBySubreddit,
    user,
    users,
    validationErrors,
    userProfile,
    customers
})
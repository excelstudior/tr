
import axios from 'axios'
import {
    GET_REGISTER_USER_VALIDATION_ERRORS,
    SET_CURRENT_USER,
    CLEAR_VALIDATION_ERROR,
} from './constants';
import {
    getCurrentProfile
    , clearCurrentProfile
} from '../../User/Profile/actions/index'
import setAuthToken from '../../util/setAuthToken'
import jwt_decode from 'jwt-decode';
export const registerUser = (user, history) => dispatch => {
    axios
        .post('/api/users/register', user)
        .then(res => { history.push('/signIn') })
        .catch(err => dispatch(getRegisterUserValidationErrors(err.response.data)))
}

// ({
//     type:Register_User,
//     user
// }) err.response.data

export const signInUser = (user, history) => dispatch => {
    //console.log(user, history)
    //setAuthToken
    axios.post('/api/users/login', user)
        .then(res => {
            //console.log(res.data)
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            dispatch(getCurrentProfile());
            history.push('/userProfile')

        })
        .catch(err => err.response.data !== undefined ? dispatch(getRegisterUserValidationErrors(err.response.data)) : console.log(err))
    //.catch(err=>console.log(err.respnse.data))
}
const getRegisterUserValidationErrors = (errors) => ({
    type: GET_REGISTER_USER_VALIDATION_ERRORS,
    errors
})
export const setCurrentUser = (decodedToken) => ({
    type: SET_CURRENT_USER,
    decodedToken
})
export const signOutUser = (history) => dispatch => {
    //Remove token from localStorage
    localStorage.removeItem('jwtToken');
    //Remove authentication header
    setAuthToken(false);
    //Set current user to {}
    dispatch(setCurrentUser({}));
    dispatch(clearCurrentProfile())
    history.push('/signIn')
};

export const clearValidationErrors=()=>({
    type:CLEAR_VALIDATION_ERROR
})
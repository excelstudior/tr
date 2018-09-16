
import axios from 'axios'
import {
    GET_REGISTER_USER_VALIDATION_ERRORS,
    SET_CURRENT_USER
} from './constants';
import setAuthToken  from '../../util/setAuthToken'
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
           const decoded=jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            history.push('/dashboard')
        
        })
        .catch(err =>err.response.data!==undefined?dispatch(getRegisterUserValidationErrors(err.response.data)):console.log(err))
        //.catch(err=>console.log(err.respnse.data))
}
const getRegisterUserValidationErrors = (errors) => ({
    type: GET_REGISTER_USER_VALIDATION_ERRORS,
    errors
})
export const setCurrentUser = (decodedToken) => ({
    type:SET_CURRENT_USER,
    decodedToken
})
export const signOutUser=(history)=>dispatch=>{
    //Remove token from localStorage
    localStorage.removeItem('jwtToken');
    //Remove authentication header
    setAuthToken(false);
    //Set current user to {}
    dispatch(setCurrentUser({}))
    history.push('/signIn')
};
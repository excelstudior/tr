
import axios from 'axios'
import {GET_REGISTER_USER_VALIDATION_ERRORS} from './constants'
export const registerUser=(user,history)=>dispatch=>{
    axios
        .post('/api/users/register',user)
        .then(res=>{history.push('/signIn')})
        .catch(err=>dispatch(getRegisterUserValidationErrors(err.response.data)))
}

// ({
//     type:Register_User,
//     user
// }) err.response.data

export const getRegisterUserValidationErrors=(errors)=>({
    type:GET_REGISTER_USER_VALIDATION_ERRORS,
    errors
})
import axios from 'axios';
import {
    GET_PROFILE
    , PROFILE_LOADING
    , CREATE_USER_PROFILE
    , GET_PROFILE_VALIDATION_ERRORS
    , CLEAR_CURRENT_PROFILE
} from './constants';

//Get Current Profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile')
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_PROFILE,
            payload: {}
        }))
}

//Create User Profile
export const createUserProfile = (profile,history) => dispatch => {
    //dispatch(setProfileLoading());
    axios.post('/api/profile',profile)
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
            history.push('/userProfile')
        })
        .catch(err => err.response.data !== undefined ? dispatch(getProfileValidationErrors(err.response.data)) : console.log(err))
}

//Get Validation error

export const getProfileValidationErrors=(errors)=>({
   type:GET_PROFILE_VALIDATION_ERRORS,
   errors
})



//Profile loading

export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}
export const clearCurrentProfile=()=>{
    return{
        type:CLEAR_CURRENT_PROFILE
    }
}

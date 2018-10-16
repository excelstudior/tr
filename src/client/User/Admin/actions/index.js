import axios from 'axios'
import {
    SET_USERS
    , LOADING_USERS
    , CHANGE_MODE
    , GET_VALIDATION_ERRORS
    , CLEAR_VALIDATION_ERROR
} from './constants';
import { NONE } from '../../../CommonComponents/Constants';
const setUsers = (users) => ({
    type: SET_USERS,
    users
})
const loadingUsers = () => ({
    type: LOADING_USERS
})

const getRegisterUserValidationErrors = (errors) => ({
    type: GET_VALIDATION_ERRORS,
    errors
})
export const clearValidationErrors = () => ({
    type: CLEAR_VALIDATION_ERROR
})
export const getUsers = () => dispatch => {
    dispatch(loadingUsers());
    axios
        .get('/api/admin/users')
        .then(res => dispatch(setUsers(res.data)))
        .catch(err => console.log(err))
}
export const addUser = (user, history) => dispatch => {
    axios
        .post('/api/users/register', user)
        .then(res => {
            dispatch(clearValidationErrors());
            dispatch(getUsers());
            dispatch(changeMode(NONE))
        })
        .catch(err => dispatch(getRegisterUserValidationErrors(err.response.data)))
}
export const changeMode = (mode) => ({
    type: CHANGE_MODE,
    mode
})
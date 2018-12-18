import { LOADING_USERS } from "../../User/Admin/actions/constants";
import axios from "axios";
import { NONE } from '../../CommonComponents/Constants'

export const SET_CUSTOMERS = 'SET_CUSTOMERS';
export const LOADING_CUSTOMER = 'LOADING_CUSTOMER';
export const CHANGE_MODE = 'CHANGE_MODE'
export const SET_VALIDATION_ERRORS='SET_VALIDATION_ERRORS'
export const CLEAR_VALIDATION_ERROR='CLEAR_VALIDATION_ERROR'


const loadingCustomers = () => ({
    type: LOADING_CUSTOMER,
})

const setCustomers = (customers) => ({
    type: SET_CUSTOMERS,
    customers
})

export const getCustomers = () => dispatch => {
    dispatch(loadingCustomers());
    axios.get('/api/customer')
        .then(res => dispatch(setCustomers(res.data)))
        .catch(err => console.log(err))
}
export const changeMode = (mode) => ({
    type: CHANGE_MODE,
    mode
})

export const addCustomer = (customer) => dispatch => {
    console.log(customer)
    axios.post('/api/customer',customer)
        .then(res => {
            dispatch(changeMode(NONE))
            dispatch(getCustomers())
            // dispatch(setCustomers(res.data))
        })
        .catch(err=>dispatch(setValidationErrors(err.response.data)))
        // .catch(err => console.log(err))
}

export const setValidationErrors=(errors)=>({
    type:SET_VALIDATION_ERRORS,
    errors,
})

export const clearValidationErrors = () => ({
    type: CLEAR_VALIDATION_ERROR
})
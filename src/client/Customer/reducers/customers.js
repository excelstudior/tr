import {
    SET_CUSTOMERS
    , LOADING_CUSTOMER
    , CHANGE_MODE
    , SET_VALIDATION_ERRORS
    , CLEAR_VALIDATION_ERROR
}
    from '../../Customer/actions/index';
import { NONE } from '../../CommonComponents/Constants'
const initialState = {
    customers: [],
    loading: false,
    errors: {},
    mode: NONE
}

const customers = (state = initialState, action) => {
    switch (action.type) {
        case SET_CUSTOMERS:
            console.log('customers', action.customers)
            return { ...state, loading: false, customers: action.customers }
        case LOADING_CUSTOMER:
            return { ...state, loading: true }
        case CHANGE_MODE:
            return { ...state, mode: action.mode }
        case SET_VALIDATION_ERRORS:
            return { ...state, errors: action.errors }
        case CLEAR_VALIDATION_ERROR:
            return {...state, errors:{}}
        default:
            return state;
    }

}

export default customers
import {
    SET_CUSTOMERS
    , LOADING_CUSTOMER
    , CHANGE_MODE
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
        default:
            return state;
    }

}

export default customers
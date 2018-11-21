import {
    SET_CUSTOMERS
    , LOADING_CUSTOMER
}
    from '../../Customer/actions/index';

const initialState = {
    customers: [],
    loading: false,
    errors: {}
}

const customers = (state = initialState, action) => {
    switch (action.type) {
        case SET_CUSTOMERS:
        console.log('customers',action.customers)
            return {...state,loading:false,customers:action.customers}
        case LOADING_CUSTOMER:
            return {...state,loading:true}
        default:
            return state;
    }

}

export default customers
import { LOADING_USERS } from "../../User/Admin/actions/constants";
import axios from "axios";

export const SET_CUSTOMERS='SET_CUSTOMERS';
export const LOADING_CUSTOMER='LOADING_CUSTOMER';
export const CHANGE_MODE='CHANGE_MODE'


const loadingCustomers=()=>({
    type:LOADING_CUSTOMER,
})

const setCustomers=(customers)=>({
    type:SET_CUSTOMERS,
    customers
})

export const getCustomers=()=>dispatch=>{
    dispatch(loadingCustomers());
    axios.get('/api/customer')
        .then(res=>dispatch(setCustomers(res.data)))
        .catch(err=>console.log(err))
}
export const changeMode=(mode)=>({
    type:CHANGE_MODE,
    mode
})
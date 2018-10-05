import axios from 'axios'
import {SET_USERS,LOADING_USERS} from './constants';
const setUsers=(users)=>({
    type:SET_USERS,
    users
})
const loadingUsers=()=>({
    type:LOADING_USERS
})
export const getUsers=()=>dispatch=>{
    dispatch(loadingUsers());
    axios   
    .get('/api/admin/users')
    .then(res=>dispatch(setUsers(res.data)))
    .catch(err=>console.log(err))
}
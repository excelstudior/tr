import axios from 'axios'
import {SET_USERS,LOADING_USERS, CHANGE_MODE} from './constants';
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
export const addUser=(user,history)=>dispatch=>{
    axios
    .post('/api/users/register', user)
    .then(res => { dispatch(getUsers()) })
    .catch(err => console.log(err))
}
export const changeMode=(mode)=>({
    type:CHANGE_MODE,
    mode
})
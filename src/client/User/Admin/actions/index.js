import axios from 'axios'
import {SET_USERS} from './constants';
const setUsers=(users)=>({
    type:SET_USERS,
    users
})

export const getUsers=()=>dispatch=>{
    axios   
    .get('/api/admin/users')
    .then(res=>dispatch(setUsers(res.data)))
    .catch(err=>console.log(err))
}
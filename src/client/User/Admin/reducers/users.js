
import {SET_USERS} from '../actions/constants';
const users=(state=[],action)=>{
    switch (action.type){
        case SET_USERS:
        console.log(action.users);
        return action.users
        default:
        return state;
    }
}

export default users

import {SET_USERS,LOADING_USERS} from '../actions/constants';
const initialState={
    users:[],
    loading:false,
}

const users=(state=initialState,action)=>{
    switch (action.type){
        case SET_USERS:
        console.log('getting users',action.users);
        return {...state,users:action.users,loading:false}
        case LOADING_USERS:
        console.log('loading')
        return {...state,loading:true}
        default:
        return state;
    }
}

export default users
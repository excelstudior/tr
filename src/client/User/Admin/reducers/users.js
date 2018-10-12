
import {SET_USERS,LOADING_USERS, CHANGE_MODE} from '../actions/constants';
import { NONE } from '../../../CommonComponents/Constants';
const initialState={
    users:[],
    loading:false,
    mode:NONE,
}

const users=(state=initialState,action)=>{
    switch (action.type){
        case SET_USERS:
        console.log('getting users',action.users);
        return {...state,users:action.users,loading:false}
        case LOADING_USERS:
        console.log('loading')
        return {...state,loading:true}
        case CHANGE_MODE:
        return {...state,mode:action.mode}
        default:
        return state;
    }
}

export default users
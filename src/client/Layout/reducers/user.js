import {SET_CURRENT_USER} from '../actions/constants';

export const user=(state={},action)=>{
    switch (action.type){
        case SET_CURRENT_USER:
        console.log(action.decodedToken)
        return action.decodedToken;
        default:
        return state;
    }
    
}

export default user


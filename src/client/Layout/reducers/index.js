import {Register_User} from '../actions/constants';

const user=(state={},action)=>{
    switch (action.type){
        case Register_User:
        console.log(state,action.user);



        return action.user;
        default:
        return state;
    }
    
}

export default user
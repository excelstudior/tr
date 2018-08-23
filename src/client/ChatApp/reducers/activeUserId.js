const activeUserId=(state=null,action)=>{
    console.log(state)
    switch (action.type){
        case 'SET_ACTIVE_USER_ID':
        return action.user_id
        default:
        return state
    }
}

export default activeUserId
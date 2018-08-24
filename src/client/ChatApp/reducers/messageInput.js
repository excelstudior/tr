const messageInput=(state='',action)=>{
    console.log('messageinput is ',state);
    switch(action.type){
        case 'SET_MESSAGE_INPUT':
        return action.messageInput;
        default:
        return state
    }
    
}

export default messageInput
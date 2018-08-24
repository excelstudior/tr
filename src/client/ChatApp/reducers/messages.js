import _ from 'lodash'
const messages = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_MESSAGE':
        // console.log(Object.keys(state[action.activeUserId]))
        //     console.log(_.max(Object.keys(state[action.activeUserId])))
            let newMessageNumber =_.max((Object.keys(state[action.activeUserId])).map((i)=>{return parseInt(i)})) + 1;
             //let newMessageNumber = parseInt(_.max(Object.keys(state[action.activeUserId]))) + 1;
             console.log('current messages',state[action.activeUserId])
             console.log('new message number',newMessageNumber);
            return {...state,
                [action.activeUserId]:{
                    ...state[action.activeUserId],
                    [newMessageNumber]:{
                        number: newMessageNumber,
                        text: action.messageInput,
                        is_user_msg: action.is_user_msg
                    }

            }}
        default:
            return state
    }

}

export default messages
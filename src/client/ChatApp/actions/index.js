export const setActiveUserId=(user_id)=>({
    type:'SET_ACTIVE_USER_ID',
    user_id
})

export const setMessageInput=(messageInput)=>({
    type:'SET_MESSAGE_INPUT',
    messageInput
})

export const createMessage=(activeUserId,is_user_msg,messageInput)=>({
    type:'CREATE_MESSAGE',
    activeUserId,
    is_user_msg,
    messageInput,
})
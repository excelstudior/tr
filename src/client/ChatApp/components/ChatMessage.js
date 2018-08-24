
import React from 'react';
import './Chat.css';
const ChatMessage=({msg})=>{
    const {text,is_user_msg}=msg
    return (
        <span className={`ChatMessage ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
    )
}

export default ChatMessage
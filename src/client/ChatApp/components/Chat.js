import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader'
import ChatContent from './ChatContent'
import ChatMessageInput from './ChatMessageInput'
const Chat=({user,activeUserId,contact,messages})=>{
    return <div className='Chat'>
        <ChatHeader contact={contact}/>
        <ChatContent messages={messages}/>
        <ChatMessageInput/>
    </div>
}

export default Chat;
import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader'
import ChatContent from './ChatContent'
import ChatMessageInput from './ChatMessageInput'
const Chat=({user,activeUserId,contact,messages,setMessageInput,messageInput,createMessage})=>{
    return <div className='Chat'>
        <ChatHeader contact={contact}/>
        <ChatContent messages={messages}/>
        <ChatMessageInput setMessageInput={setMessageInput} activeUserId={activeUserId} messageInput={messageInput} createMessage={createMessage}/>
    </div>
}

export default Chat;
import React from 'react';
import './Chat.css';
import ChatMessage from './ChatMessage'



const ChatContent=({messages})=>{
    return <div className='ChatContent'>
    {messages.map(msg=><ChatMessage msg={msg} key={msg.number}/>)}    
    </div>
}

export default ChatContent;
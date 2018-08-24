import React from 'react';
import './Chat.css';
const ChatHeader=({contact})=>{
    const {name,status}=contact
    return (<header className='ChatHeader'>
       <h2 className="ChatHeader__name">{name}</h2>
       <p>{status}</p> 
    </header>)
}

export default ChatHeader;
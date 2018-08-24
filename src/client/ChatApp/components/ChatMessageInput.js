import React from 'react';
import './Chat.css';
const ChatMessageInput=({setMessageInput,activeUserId,messageInput,createMessage})=>{
    return <div className='ChatMessageInput'>
        <input type='text' onChange={(e)=>setMessageInput(e.target.value)} className='ChatMessageInputContent'/>
        <button className='btn_SentMessage' onClick={()=>createMessage(activeUserId,true,messageInput)}>Send</button>
    </div>
}

export default ChatMessageInput;
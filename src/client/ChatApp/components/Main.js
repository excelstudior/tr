import React from 'react';
import './Main.css';
import Welcome from './Welcome'
import Chat from './Chat'
const renderMainDiv=(user,activeUserId,contact,messages,setMessageInput,messageInput,createMessage)=>{
    if (!activeUserId){
        return <Welcome user={user}/>
    } else {
        return <Chat activeUserId={activeUserId} user={user} contact={contact} messages={messages} setMessageInput={setMessageInput} messageInput={messageInput} createMessage={createMessage}/>
    }
}

const Main=({user,activeUserId,contact,messages,setMessageInput,messageInput,createMessage})=>{
    return <main className='Main'>{renderMainDiv(user,activeUserId,contact,messages,setMessageInput,messageInput,createMessage)}</main>
}

export default Main;
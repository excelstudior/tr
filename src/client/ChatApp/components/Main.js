import React from 'react';
import './Main.css';
import Welcome from './Welcome'
import Chat from './Chat'
const renderMainDiv=(user,activeUserId,contact,messages)=>{
    if (!activeUserId){
        return <Welcome user={user}/>
    } else {
        return <Chat activeUserId={activeUserId} user={user} contact={contact} messages={messages}/>
    }
}

const Main=({user,activeUserId,contact,messages})=>{
    return <main className='Main'>{renderMainDiv(user,activeUserId,contact,messages)}</main>
}

export default Main;
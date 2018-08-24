import React from 'react';
import './Welcome.css';



const Welcome=({user})=>{

    const {email,name,profile_pic,status,user_id}=user
    return (<div className='Welcome'>
                <h1 className='Welcome__name'>Welcome {name}</h1>
                <img className='Welcome__img' src={profile_pic} alt={name}/>
                <p className='Welcome__status'>
                    <b>Status: </b>{status}
                </p>
                <button className='Welcome__btn'>Start a conversation</button>
                <p className='Welcome__info'>Search for someone to start chatting with or go to Contacts to see whois available</p>
            </div>)
}

export default Welcome;
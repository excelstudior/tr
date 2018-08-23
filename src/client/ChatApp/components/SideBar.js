import React from 'react';
import './SideBar.css';
import User from './User'
const SideBar=({contacts,setActiveUserId})=>{
    return <aside className='Sidebar'>
           {contacts.map(contact=><User user={contact} key={contact.user_id} setActiveUserId={setActiveUserId}/>)}
    </aside>
}

export default SideBar
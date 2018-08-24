import React, {Component} from 'react';
import './app.css'
// import ButtonGroup from './ButtonGroup/containers/buttonGroup'
// import Bank from './Bank/containers/bank'
import SideBar from './ChatApp/containers/SideBar'
import Main from './ChatApp/containers/Main'

export default class App extends Component {
    
    render() {
        //const {contacts}= store.getState();
        return <div className='App'>
          <SideBar/>
          <Main/>
        </div>
    }
}
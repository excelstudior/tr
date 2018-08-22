import React, {Component} from 'react';
import {store} from './store/index'
import './app.css'
import _ from 'lodash'
// import ButtonGroup from './ButtonGroup/containers/buttonGroup'
// import Bank from './Bank/containers/bank'
import SideBar from './ChatApp/components/SideBar'
import Main from './ChatApp/components/Main'

export default class App extends Component {
    
    render() {
        const {contacts}= store.getState();
        return <div className='App'>
            {/* <ButtonGroup/>
            <Bank/> */}
          <SideBar contacts={_.values(contacts)}/>
          <Main/>
        </div>
    }
}
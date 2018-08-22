import React, {Component} from 'react';
import './app.css'
// import ButtonGroup from './ButtonGroup/containers/buttonGroup'
// import Bank from './Bank/containers/bank'
import SideBar from './ChatApp/components/SideBar'
import Main from './ChatApp/components/Main'
export default class App extends Component {
    render() {
        return <div className='App'>
            {/* <ButtonGroup/>
            <Bank/> */}
          <SideBar/>
          <Main/>
        </div>
    }
}
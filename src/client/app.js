import React, { Component } from 'react';
import './app.css'
import Reddit from './Reddit/containers/Reddits'
import Navbar from './Layout/containers/Navbar'
import {
    Route
} from 'react-router-dom';
export default class App extends Component {

    render() {

        return <div className='App'>

            <Navbar />
            <Route path='/reddit' component={Reddit}/>
            {/* <div><Reddit /></div> */}
        </div>
    }
}
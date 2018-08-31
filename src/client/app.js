import React, { Component } from 'react';
import './app.css'
import Reddit from './Reddit/containers/Reddits'
import Navbar from './Layout/containers/Navbar'
import Home from './Layout/components/Home'
import {
    Route
} from 'react-router-dom';
export default class App extends Component {

    render() {

        return <div className='App'>

            <Navbar />
            <Route path='/reddit' component={Reddit}/>
            <Route exact path="/" component={Home}/>
            {/* <div><Reddit /></div> */}
        </div>
    }
}
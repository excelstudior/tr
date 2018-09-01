import React, { Component } from 'react';
import './app.css';
import Reddit from './Reddit/containers/Reddits';
import Navbar from './Layout/containers/Navbar';
import Register from './Layout/containers/Authorization/Register';
import SignIn from './Layout/containers/Authorization/SignIn';
import Home from './Layout/components/Home';
import Footer from './Layout/components/Footer';
import {
    Route
} from 'react-router-dom';
export default class App extends Component {

    render() {

        return <div className='App'>

            <Navbar />
            <Route path='/reddit' component={Reddit}/>
            <Route exact path="/" component={Home}/>
            <Route path='/register' component={Register}/>
            <Route path='/signIn' component={SignIn}/>
            <Footer/>
            
        </div>
    }
}
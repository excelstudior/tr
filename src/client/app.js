import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isAuthenticated} from './util/isAuthenticated'
import './app.css';
import Reddit from './Reddit/containers/Reddits';
import Calendar from './MiniApps/Calendar/components/Calendar';
import JapaneseCharacter from './MiniApps/JapaneseCharater/components/JapaneseCharacter'
import Dashboard from '../client/User/Admin/containers/Dashboard'
import Profile from './User/Profile/containers/Profile';
import Navbar from './Layout/containers/Navbar';
import Register from './Layout/containers/Authorization/Register';
import SignIn from './Layout/containers/Authorization/SignIn';
import Home from './Layout/components/Home';
import Footer from './Layout/components/Footer';
import {
    Route, BrowserRouter as Router,Redirect
} from 'react-router-dom';




class App extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        let signedInUser=isAuthenticated()
        if(signedInUser!==null &&signedInUser!==undefined){
            this.props.loadUserContent(signedInUser);
        } else { 
           console.log('location',this.props.location);
           // this.props.history.push('/signIn')
           <Redirect to={{pathname:"/signIn",state:{from:this.props.location}}}/>;
        }
        
    }

    componentDidUpdate() {

    }

    render() {


        return (
            <Router>
                <div className='App'>

                    <Navbar />
                    <Route path='/reddit' component={Reddit} />
                    <Route exact path="/" component={Home} />
                    <Route path='/register' component={Register} />
                    <Route path='/signIn' component={SignIn} />
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/calendar' component={Calendar}/>
                    <Route path='/japaneseCharacter' component={JapaneseCharacter}/>
                    <Footer />

                </div>
            </Router>)
    }
}

App.PropTypes = {
    loadUserContent:PropTypes.func.isRequired,
    validationErrors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}


export default App
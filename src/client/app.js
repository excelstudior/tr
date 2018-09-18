import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isAuthenticated} from './util/isAuthenticated'
import './app.css';
import Reddit from './Reddit/containers/Reddits';
import Dashboard from './Layout/containers/Dashboard'
import UserProfile from './User/Profile/containers/UserProfile';
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
            this.props.setCurrentUser(signedInUser);
        } else { 
           console.log('location',this.props.location);
           // this.props.history.push('/signIn')
           <Redirect to={{pathname:"/signIn",state:{from:this.props.location}}}/>;
        }
        
    }

    componentDidUpdate() {

    }

    // checkSignedInUser(){
       
    // }
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
                    <Route path='/userProfile' component={UserProfile}/>
                    <Footer />

                </div>
            </Router>)
    }
}

App.PropTypes = {
    setCurrentUser:PropTypes.func.isRequired,
    validationErrors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}


export default App
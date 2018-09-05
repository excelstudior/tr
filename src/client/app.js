import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {isAuthenticated} from './util/isAuthenticated'
import './app.css';
import Reddit from './Reddit/containers/Reddits';
import Navbar from './Layout/containers/Navbar';
import Register from './Layout/containers/Authorization/Register';
import SignIn from './Layout/containers/Authorization/SignIn';
import Home from './Layout/components/Home';
import Footer from './Layout/components/Footer';
import {
    Route, BrowserRouter as Router,
} from 'react-router-dom';
import { signInUser } from './Layout/actions';

// let signedInUser=isAuthenticated()
// if(signedInUser!==null){
//     console.log(signedInUser)
// }


class App extends Component {
    constructor(props) {
        super(props);
        // this.checkSignedInUser=this.checkSignedInUser.bind(this)
        
    }

    componentDidMount() {
        let signedInUser=isAuthenticated()
        if(signedInUser!==null &&signedInUser!==undefined){
            this.props.setCurrentUser(signedInUser);
        } else { console.log('in')
        console.log (this.props.history.push)
            this.props.history.push('/signIn')}
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

// const mapStateToProps = (state,ownProps) => ({
//     validationErrors:state.validationErrors,
//     user:state.user
//  })
//  const mapDispatchToProps = (dispatch) => ({
//     signInUser:(user,history)=>dispatch(signInUser(user,history))
//  })

export default App
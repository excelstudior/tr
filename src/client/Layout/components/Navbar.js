import React, { Component } from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
    
                <div className="container">
                    <div className='top-left-navbar'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li>About</li>
                            <li>Contact</li>
                            <li className='apps-menu'>
                                <span>APPs</span>
                                <ul className='apps-menu-app'>
                                   <li><Link to='/reddit'>Reddit</Link></li> 
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className='top-right-auth-button'>
                        <ul>
                            <li>Sign Up</li>
                            <li>Log In</li>
                        </ul>
                    </div>
                </div>

        )
    }
}

// Navbar.PropTypes={
//     Navbar:PropTypes.array.isRequired
// }

export default Navbar
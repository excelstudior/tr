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
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li><Link to='/reddit'>Reddit</Link></li>
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
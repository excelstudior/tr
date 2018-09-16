import React, { Component } from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    signOut() {
        this.props.signOutUser(this.props.history)
    }

    render() {
        const { user } = this.props
        console.log(user)
        return (

            <div className="container">
                <div className='top-left-navbar'>
                    {Object.keys(user).length === 0
                        ? <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                        : <ul><li className='apps-menu'>
                            <span>APPs</span>
                            <ul className='apps-menu-app'>
                                <li><Link to='/reddit'>Reddit</Link></li>
                            </ul>
                        </li>
                        </ul>
                    }



                </div>
                <div className='top-right-auth-button'>

                    {Object.keys(user).length !== 0
                        ? <ul>
                            <li>Hello {user.name}</li>
                            <li onClick={this.signOut}>Sign Out</li>
                        </ul>
                        : <ul><li><Link to='/register'>Sign up</Link></li>
                            <li><Link to='/signIn'>Sign In</Link></li>
                        </ul>
                    }

                </div>
            </div>

        )
    }
}

Navbar.PropTypes = {
    user: PropTypes.object.isRequired,
    signOutUser: PropTypes.func.isRequired
}

export default Navbar
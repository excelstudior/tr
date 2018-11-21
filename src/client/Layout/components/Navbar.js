import React, { Component } from 'react';
import './Navbar.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ADMIN, END_USER } from '../../../server/common/constants';

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
                        </ul>
                        : <ul>
                            {user.type === ADMIN
                                // ?<li><Link to='/dashboard'>Dashboard</Link>
                                // <Link to='/customer'>Customer</Link>
                                // </li>
                                // :<li></li>
                                ? <li className='dropdown'>
                                    <div className='dropdown-main'>{ADMIN}</div>
                                    <div className='dropdown-sub'>
                                        <Link to='/dashboard'>Dashboard</Link>
                                        <Link to='/customer'>Customer</Link>
                                    </div>
                                </li>:<li></li>
                            }
                            <li><Link to='/profile'>Profile</Link></li>
                            <li className='dropdown'>
                                <div className='dropdown-main'>App</div>
                                <div className='dropdown-sub'>
                                    <Link to='/reddit'>Reddit</Link>
                                    <Link to='/japaneseCharacter'>Japanese Character</Link>
                                </div>
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
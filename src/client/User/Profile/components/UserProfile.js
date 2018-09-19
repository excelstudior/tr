import React, { Component } from 'react';
import './UserProfile.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        const { user, profile } = this.props;

        return (

            <div className='userProfile'>
                <div className='user'>
                    <div className='user_img'>
                        {<img src={user.avatar} alt={user.name} />}
                    </div>
                    <div className='user_account'>
                        <p>{user.name}</p>
                    </div>
                </div>
                <div className='profile'>
                    <div>
                        {Object.keys(profile).length === 0 ? <Link to='/createUserProfile'>Add Profile</Link> : 'User Profile'}
                    </div>

                </div>
                <div className='extra'>
                    extra column
                </div>
            </div>
        )
    }
}

UserProfile.PropTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default UserProfile
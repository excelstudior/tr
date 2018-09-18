import React, { Component } from 'react';
import './UserProfile.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        const {user,profile}=this.props;
        
        console.log(profile, typeof(profile),Object.keys(profile))
        console.log(user,typeof(user),Object.keys(user))
        return (
    
                <div className='UserProfile'>
                    {/* <h3> User {user.name}'s Profile </h3>
                    <label>{profile.handle}</label> */}

                <div className='user'>
                        User column
                </div>
                <div className='profile'>
                        profile column
                </div>
                <div className='extra'>
                extra column
                </div>
    </div>
        )
    }
}

UserProfile.PropTypes={
    profile:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired
}

export default UserProfile
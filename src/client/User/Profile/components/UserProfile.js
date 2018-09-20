import React, { Component } from 'react';
import './UserProfile.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: "",
            company: "",
            website: "",
            location: "",
            bio: "",
            status: "",
            githubusername: "",
            skills: "",
            youtube: "",
            twitter: "",
            facebook: "",
            linkedin: "",
            instagram: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
       // this.onClick = this.onClick.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    onChange(){

    }

    onSubmit(){

    }
    render() {
        const { handle,
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            twitter,
            facebook,
            linkedin,
            instagram,
            } = this.state;
        const { user, profile,errors } = this.props;

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
                    
                        {Object.keys(profile).length === 0 
                            ? <Link to='/createUserProfile'>Add Profile</Link>
                            : <div><h3>'User Profile'</h3>
                <form onSubmit={this.onSubmit} >
                <TextField
                    type='text'
                    name='handle'
                    placeholder='handle'
                    defaultValue={profile.handle}
                    onChange={this.onChange}
                    error={errors.handle !== undefined ? errors.handle : ''}
                />
                <TextField
                    type='text'
                    name='company'
                    placeholder='company'
                    defaultValue={profile.company}
                    onChange={this.onChange}
                    error={errors.company !== undefined ? errors.company : ''}
                />
                <TextField
                    type='text'
                    name='website'
                    placeholder='website'
                    defaultValue={profile.website}
                    onChange={this.onChange}
                    error={errors.website !== undefined ? errors.website : ''}
                />
                <TextField
                    type='text'
                    name='location'
                    placeholder='location'
                    defaultValue={profile.location}
                    onChange={this.onChange}
                    error={errors.location !== undefined ? errors.location : ''}
                />
                <TextField
                    type='text'
                    name='bio'
                    placeholder='bio'
                    defaultValue={profile.bio}
                    onChange={this.onChange}
                    error={errors.bio !== undefined ? errors.bio : ''}
                />
                <TextField
                    type='text'
                    name='status'
                    placeholder='status'
                    defaultValue={profile.status}
                    onChange={this.onChange}
                    error={errors.status !== undefined ? errors.status : ''}
                />
                <TextField
                    type='text'
                    name='githubusername'
                    placeholder='githubusername'
                    defaultValue={profile.githubusername}
                    onChange={this.onChange}
                    error={errors.githubusername !== undefined ? errors.githubusername : ''}
                />
                <TextField
                    type='text'
                    name='skills'
                    placeholder='skills'
                    defaultValue={profile.skills.toString()}
                    onChange={this.onChange}
                    error={errors.skills !== undefined ? errors.skills : ''}
                />
                <input type='submit' value='Create'/>
                </form></div>}
                

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
    user: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
}

export default UserProfile
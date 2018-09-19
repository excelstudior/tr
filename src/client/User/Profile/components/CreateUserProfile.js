import React, { Component } from 'react';
import './CreateUserProfile.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField';

class CreateUserProfile extends Component {
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
        this.onClick = this.onClick.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount(){
        this.props.clearValidationErrors()
    }
    componentDidUpdate() {

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state[e.target.name])
    }
    onClick() {
        console.log(this.state)
    }
    onSubmit(e){
        const profile={}
        profile.handle=this.state.handle;
        profile.company=this.state.company;
        profile.website=this.state.website;
        profile.location=this.state.location;
        profile.bio=this.state.bio;
        profile.status=this.state.status;
        profile.githubusername=this.state.githubusername;
        profile.skills=this.state.skills;
        profile.youtube=this.state.youtube;
        profile.twitter=this.state.twitter;
        profile.facebook=this.state.facebook;
        profile.linkedin=this.state.linkedin;
        profile.instagram=this.state.instagram;

        console.log(profile)
        e.preventDefault();
        this.props.createUserProfile(profile,this.props.history);
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

        const { user,errors  } = this.props

        return (

            <div className='CreateUserProfile'>
                <form onSubmit={this.onSubmit} >
                <TextField
                    type='text'
                    name='handle'
                    placeholder='handle'
                    defaultValue={handle}
                    onChange={this.onChange}
                    error={errors.handle !== undefined ? errors.handle : ''}
                />
                <TextField
                    type='text'
                    name='company'
                    placeholder='company'
                    defaultValue={company}
                    onChange={this.onChange}
                    error={errors.company !== undefined ? errors.company : ''}
                />
                <TextField
                    type='text'
                    name='website'
                    placeholder='website'
                    defaultValue={website}
                    onChange={this.onChange}
                    error={errors.website !== undefined ? errors.website : ''}
                />
                <TextField
                    type='text'
                    name='location'
                    placeholder='location'
                    defaultValue={location}
                    onChange={this.onChange}
                    error={errors.location !== undefined ? errors.location : ''}
                />
                <TextField
                    type='text'
                    name='bio'
                    placeholder='bio'
                    defaultValue={bio}
                    onChange={this.onChange}
                    error={errors.bio !== undefined ? errors.bio : ''}
                />
                <TextField
                    type='text'
                    name='status'
                    placeholder='status'
                    defaultValue={status}
                    onChange={this.onChange}
                    error={errors.status !== undefined ? errors.status : ''}
                />
                <TextField
                    type='text'
                    name='githubusername'
                    placeholder='githubusername'
                    defaultValue={githubusername}
                    onChange={this.onChange}
                    error={errors.githubusername !== undefined ? errors.githubusername : ''}
                />
                <TextField
                    type='text'
                    name='skills'
                    placeholder='skills'
                    defaultValue={skills}
                    onChange={this.onChange}
                    error={errors.skills !== undefined ? errors.skills : ''}
                />
                <input type='submit' value='Create'/>
                </form>
                <button onClick={this.onClick} >Test</button>
            </div>
        )
    }
}

CreateUserProfile.PropTypes = {
    user: PropTypes.object.isRequired,
    createUserProfile: PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired,
    clearValidationErrors:PropTypes.func.isRequired
}

export default CreateUserProfile
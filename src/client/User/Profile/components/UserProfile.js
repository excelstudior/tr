import React, { Component } from 'react';
import './UserProfile.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle:"",
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
        this.props.clearValidationErrors()
    }
  
    componentWillReceiveProps(props){
        this.setState({
            handle:props.profile.handle!==undefined?props.profile.handle:'',
            company: props.profile.company!==undefined?props.profile.company:'',
            website: props.profile.website!==undefined?props.profile.website:'',
            location: props.profile.location!==undefined?props.profile.location:'',
            bio: props.profile.bio!==undefined?props.profile.bio:'',
            status: props.profile.status!==undefined?props.profile.status:'',
            githubusername: props.profile.githubusername!==undefined?props.profile.githubusername:'',
            skills: props.profile.skills!==undefined?props.profile.skills.toString():'',
            youtube: props.profile.youtube!==undefined?props.profile.youtube:'',
            twitter: props.profile.twitter!==undefined?props.profile.twitter:'',
            facebook: props.profile.facebook!==undefined?props.profile.facebook:'',
            linkedin: props.profile.linkedin!==undefined?props.profile.linkedin:'',
            instagram: props.profile.instagram!==undefined?props.profile.instagram:'',
        })
    }

    componentDidUpdate() {

    }

    componentWillUnmount(){
        this.props.clearValidationErrors()
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state[e.target.name])
    }

    onClick() {
        console.log(this.state)
    }

    onSubmit(e){
        this.props.clearValidationErrors()
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

        console.log(profile);
        e.preventDefault();
        this.props.createUserProfile(profile,this.props.history);
    }
    render() {
        const { user, profile,errors } = this.props;
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
                            ? <div><Link to='/createUserProfile'>Add Profile</Link></div>
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
                <input type='submit' value='Save'/>
                </form>
                </div>
            }
                <button onClick={this.onClick}>Test</button>

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
    errors:PropTypes.object.isRequired,
    createUserProfile:PropTypes.func.isRequired,
    clearValidationErrors:PropTypes.func.isRequired,
}

export default UserProfile
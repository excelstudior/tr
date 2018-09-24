import React, { Component } from 'react';
import './Profile.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField';
import ListItem from '../../../CommonComponents/ListItem';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';

class Profile extends Component {
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
            errors: {},
            isEditing: { status: false, action: NONE }
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.changeEditingStatus = this.changeEditingStatus.bind(this);
        this.handleCancelChange=this.handleCancelChange.bind(this);
    }

    componentDidMount() {
        this.props.clearValidationErrors()
    }

    componentWillReceiveProps(props) {
        this.setState({
            handle: props.profile.handle !== undefined ? props.profile.handle : '',
            company: props.profile.company !== undefined ? props.profile.company : '',
            website: props.profile.website !== undefined ? props.profile.website : '',
            location: props.profile.location !== undefined ? props.profile.location : '',
            bio: props.profile.bio !== undefined ? props.profile.bio : '',
            status: props.profile.status !== undefined ? props.profile.status : '',
            githubusername: props.profile.githubusername !== undefined ? props.profile.githubusername : '',
            skills: props.profile.skills !== undefined ? props.profile.skills.toString() : '',
            youtube: props.profile.youtube !== undefined ? props.profile.youtube : '',
            twitter: props.profile.twitter !== undefined ? props.profile.twitter : '',
            facebook: props.profile.facebook !== undefined ? props.profile.facebook : '',
            linkedin: props.profile.linkedin !== undefined ? props.profile.linkedin : '',
            instagram: props.profile.instagram !== undefined ? props.profile.instagram : '',
            
        })
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.props.clearValidationErrors()
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state[e.target.name])
    }

    onClick() {
        console.log(this.state)
    }
    changeEditingStatus(e) {
        let actionValue=e.target.value;
        console.log(actionValue)


        this.setState(prevState=>({
            isEditing:{status:!prevState.isEditing.status,action:actionValue}
        }))
    }

    handleCancelChange(){
        this.setState({isEditing:{status: false, action: NONE}})
    }

    onSubmit(e) {
        this.props.clearValidationErrors()
        const profile = {}
        profile.handle = this.state.handle;
        profile.company = this.state.company;
        profile.website = this.state.website;
        profile.location = this.state.location;
        profile.bio = this.state.bio;
        profile.status = this.state.status;
        profile.githubusername = this.state.githubusername;
        profile.skills = this.state.skills;
        profile.youtube = this.state.youtube;
        profile.twitter = this.state.twitter;
        profile.facebook = this.state.facebook;
        profile.linkedin = this.state.linkedin;
        profile.instagram = this.state.instagram;

        console.log(profile);
        e.preventDefault();
        this.props.createUserProfile(profile, this.props.history);
    }
    render() {
        const { user, profile, errors } = this.props;
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
            isEditing,
        } = this.state;
        const hasProfile = Object.keys(profile).length !== 0 ? true : false;
        console.log(isEditing, hasProfile)
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
                    <div className='btn-profile-functions'>

                        {isEditing.status === false&& isEditing.action===NONE && !hasProfile
                            // ? <ul> <li onClick={this.changeEditingStatus}>Add</li></ul>
                            //     : isEditing === false && hasProfile
                            //         ? <ul><li onClick={this.changeEditingStatus}>Edit</li>
                            //         <li onClick={this.changeEditingStatus}>Delete</li>
                            //         </ul>
                            //         :<ul><li onClick={this.changeEditingStatus}>Save</li></ul>
                            ? <ul><ListItem item={ADD} onClick={this.changeEditingStatus}></ListItem></ul>
                            : isEditing.status === false&&isEditing.action===NONE && hasProfile
                                ? <ul><ListItem item={EDIT} onClick={this.changeEditingStatus}></ListItem>
                                    <ListItem item={DELETE} onClick={this.changeEditingStatus}></ListItem></ul>
                                : isEditing.status === true && isEditing.action === EDIT && hasProfile
                                    ? <ul><ListItem item={SAVE} onClick={this.changeEditingStatus}></ListItem>
                                        <ListItem item={CANCEL} onClick={this.handleCancelChange}></ListItem></ul>
                                    : <ul><ListItem item={CANCEL} onClick={this.handleCancelChange}></ListItem></ul>
                        }

                    </div>

                    <div className='profile-content'></div>
<button onClick={this.onClick}>Test</button>
                </div>
                <div className='extra'>
                    extra column
                </div>
                
            </div>
        )
    }
}

Profile.PropTypes = {
    profile: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    createUserProfile: PropTypes.func.isRequired,
    clearValidationErrors: PropTypes.func.isRequired,
}

export default Profile
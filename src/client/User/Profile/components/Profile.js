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
            handle: props.profile.handle !== undefined ? props.profile.handle : "",
            company: props.profile.company !== undefined ? props.profile.company : "",
            website: props.profile.website !== undefined ? props.profile.website : "",
            location: props.profile.location !== undefined ? props.profile.location : "",
            bio: props.profile.bio !== undefined ? props.profile.bio : "",
            status: props.profile.status !== undefined ? props.profile.status : "",
            githubusername: props.profile.githubusername !== undefined ? props.profile.githubusername : "",
            skills: props.profile.skills !== undefined ? props.profile.skills.toString() : "",
            youtube: props.profile.youtube !== undefined ? props.profile.youtube : "",
            twitter: props.profile.twitter !== undefined ? props.profile.twitter : "",
            facebook: props.profile.facebook !== undefined ? props.profile.facebook : "",
            linkedin: props.profile.linkedin !== undefined ? props.profile.linkedin : "",
            instagram: props.profile.instagram !== undefined ? props.profile.instagram : "",
            isEditing: { status: false, action: NONE },
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.cancelProfileChange = this.cancelProfileChange.bind(this);
        this.addProfile = this.addProfile.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.saveProfile = this.saveProfile.bind(this);
    }

    componentDidMount() {
        console.log(this.state)

    }

    componentWillReceiveProps(props) {
        const action = this.state.isEditing.action
        this.setState(prevState => ({
            handle: props.profile.handle === undefined
                ? prevState.handle
                : prevState.handle !== props.profile.handle && action !== EDIT
                    ? props.profile.handle : prevState.handle,
            company: props.profile.company === undefined
                ? prevState.company
                : prevState.company !== props.profile.company && action !== EDIT
                    ? props.profile.company : prevState.company,
            website: props.profile.website === undefined
                ? prevState.website
                : prevState.website !== props.profile.website && action !== EDIT
                    ? props.profile.website : prevState.website,
            location: props.profile.location === undefined
                ? prevState.location
                : prevState.location !== props.profile.location && action !== EDIT
                    ? props.profile.location : prevState.location,
            bio: props.profile.bio === undefined
                ? prevState.bio
                : prevState.bio !== props.profile.bio && action !== EDIT
                    ? props.profile.bio : prevState.bio,
            status: props.profile.status === undefined
                ? prevState.status
                : prevState.status !== props.profile.status && action !== EDIT
                    ? props.profile.status : prevState.status,
            githubusername: props.profile.githubusername === undefined
                ? prevState.githubusername
                : prevState.githubusername !== props.profile.githubusername && action !== EDIT
                    ? props.profile.githubusername : prevState.githubusername,
            skills: props.profile.skills === undefined
                ? prevState.skills
                : prevState.skills !== props.profile.skills.toString() && action !== EDIT
                    ? props.profile.skills.toString() : prevState.skills,
            youtube: props.profile.youtube === undefined
                ? prevState.youtube
                : prevState.youtube !== props.profile.youtube && action !== EDIT
                    ? props.profile.youtube : prevState.youtube,
            youtube: props.profile.youtube === undefined
                ? prevState.youtube
                : prevState.youtube !== props.profile.youtube && action !== EDIT
                    ? props.profile.youtube : prevState.youtube,
            twitter: props.profile.twitter === undefined
                ? prevState.twitter
                : prevState.twitter !== props.profile.twitter && action !== EDIT
                    ? props.profile.twitter : prevState.twitter,
            facebook: props.profile.facebook === undefined
                ? prevState.facebook
                : prevState.facebook !== props.profile.facebook && action !== EDIT
                    ? props.profile.facebook : prevState.facebook,
            linkedin: props.profile.linkedin === undefined
                ? prevState.linkedin
                : prevState.linkedin !== props.profile.linkedin && action !== EDIT
                    ? props.profile.linkedin : prevState.linkedin,
            instagram: props.profile.instagram === undefined
                ? prevState.instagram
                : prevState.instagram !== props.profile.instagram && action !== EDIT
                    ? props.profile.instagram : prevState.instagram,
            isEditing: Object.keys(props.errors).length === 0 ? { status: false, action: NONE } : prevState.isEditing,
            errors: props.errors,
        }))
    }

    onChange(e) {

        this.setState({ [e.target.name]: e.target.value })


    }

    cancelProfileChange() {
        const props = this.props;
        this.setState({
            handle: props.profile.handle !== undefined ? props.profile.handle : "",
            company: props.profile.company !== undefined ? props.profile.company : "",
            website: props.profile.website !== undefined ? props.profile.website : "",
            location: props.profile.location !== undefined ? props.profile.location : "",
            bio: props.profile.bio !== undefined ? props.profile.bio : "",
            status: props.profile.status !== undefined ? props.profile.status : "",
            githubusername: props.profile.githubusername !== undefined ? props.profile.githubusername : "",
            skills: props.profile.skills !== undefined ? props.profile.skills.toString() : "",
            youtube: props.profile.youtube !== undefined ? props.profile.youtube : "",
            twitter: props.profile.twitter !== undefined ? props.profile.twitter : "",
            facebook: props.profile.facebook !== undefined ? props.profile.facebook : "",
            linkedin: props.profile.linkedin !== undefined ? props.profile.linkedin : "",
            instagram: props.profile.instagram !== undefined ? props.profile.instagram : "",
            isEditing: { status: false, action: NONE },
            errors: {},
        })
    }
    addProfile() {
        this.setState({ isEditing: { status: true, action: ADD } })
    }
    editProfile() {
        this.setState({ isEditing: { status: true, action: EDIT } })
    }
    deleteProfile() {
        this.setState({ isEditing: { status: false, action: DELETE } })
    }
    saveProfile(e) {
        //save profile, return new profile

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
        e.preventDefault();
        this.props.createUserProfile(profile, this.props.history);
    }

    render() {
        const { user, profile } = this.props;
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
            errors,
        } = this.state;
        const hasProfile = Object.keys(profile).length !== 0 ? true : false;
        console.log(this.state)
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

                        {isEditing.status === false && isEditing.action === NONE && !hasProfile
                            ? <ul><ListItem item={ADD} onClick={this.addProfile}></ListItem></ul>
                            : isEditing.status === false && isEditing.action === NONE && hasProfile
                                ? <ul><ListItem item={EDIT} onClick={this.editProfile}></ListItem>
                                    <ListItem item={DELETE} onClick={this.deleteProfile}></ListItem></ul>
                                : isEditing.status === true && (isEditing.action !== DELETE || Object.keys(errors).length > 0)
                                    ? <ul><ListItem item={SAVE} onClick={this.saveProfile}></ListItem>
                                        <ListItem item={CANCEL} onClick={this.cancelProfileChange}></ListItem></ul>
                                    : <ul><ListItem item={CANCEL} onClick={this.cancelProfileChange}></ListItem></ul>
                        }
                    </div>

                    <div className='profile-content'>
                        {(hasProfile || isEditing.status) && <table>
                            <tbody>
                                <tr>
                                    <td>Handle</td>
                                    <td>
                                        <TextField
                                            type='text'
                                            name='handle'
                                            placeholder='handle'
                                            value={handle}
                                            classname={'profile-content-tableContent'}
                                            onChange={this.onChange}
                                            disabled={!isEditing.status}
                                            error={errors.handle !== undefined ? errors.handle : ''}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Company</td>
                                    <td>
                                        <TextField
                                            type='text'
                                            name='company'
                                            placeholder='company'
                                            value={company}
                                            classname={'profile-content-tableContent'}
                                            onChange={this.onChange}
                                            disabled={!isEditing.status}
                                            error={errors.company !== undefined ? errors.company : ''}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Website</td>
                                    <td><TextField
                                        type='text'
                                        name='website'
                                        placeholder='website'
                                        value={website}
                                        classname={'profile-content-tableContent'}
                                        onChange={this.onChange}
                                        disabled={!isEditing.status}
                                        error={errors.website !== undefined ? errors.website : ''}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>
                                        <TextField
                                            type='text'
                                            name='location'
                                            placeholder='location'
                                            value={location}
                                            classname={'profile-content-tableContent'}
                                            onChange={this.onChange}
                                            disabled={!isEditing.status}
                                            error={errors.location !== undefined ? errors.location : ''}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bio</td>
                                    <td><TextField
                                        type='text'
                                        name='bio'
                                        placeholder='bio'
                                        value={bio}
                                        classname={'profile-content-tableContent'}
                                        onChange={this.onChange}
                                        disabled={!isEditing.status}
                                        error={errors.bio !== undefined ? errors.bio : ''}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td><TextField
                                        type='text'
                                        name='status'
                                        placeholder='status'
                                        value={status}
                                        classname={'profile-content-tableContent'}
                                        onChange={this.onChange}
                                        disabled={!isEditing.status}
                                        error={errors.status !== undefined ? errors.status : ''}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>Githubusername</td>
                                    <td><TextField
                                        type='text'
                                        name='githubusername'
                                        placeholder='githubusername'
                                        value={githubusername}
                                        classname={'profile-content-tableContent'}
                                        onChange={this.onChange}
                                        disabled={!isEditing.status}
                                        error={errors.githubusername !== undefined ? errors.githubusername : ''}
                                    /></td>
                                </tr>
                                <tr>
                                    <td>Skills</td>
                                    <td><TextField
                                        type='textarea'
                                        name='skills'
                                        placeholder='skills'
                                        value={skills.toString()}
                                        classname={'profile-content-tableContent'}
                                        onChange={this.onChange}
                                        disabled={!isEditing.status}
                                        error={errors.skills !== undefined ? errors.skills : ''}
                                        info={'please use comma to seperate skills'}
                                    /></td>
                                </tr>
                            </tbody>
                        </table>}
                    </div>
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
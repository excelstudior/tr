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
            error: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state[e.target.name])
    }
    onClick(){
        console.log(this.state)
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
            error } = this.state;

        const { user } = this.props

        return (

            <div className='CreateUserProfile'>

                <TextField
                    type='text'
                    name='handle'
                    placeholder='handle'
                    defaultValue={handle}
                    onChange={this.onChange}
                    error={this.error}
                />
                <button onClick={this.onClick} >Test</button>
            </div>
        )
    }
}

CreateUserProfile.PropTypes = {
    user: PropTypes.object.isRequired
}

export default CreateUserProfile
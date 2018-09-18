import React, { Component } from 'react';
import './CreateUserProfile.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class CreateUserProfile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        const {user}=this.props;

        return (
    
                <div className='CreateUserProfile'>
                    {/* <h3> User {user.name}'s Profile </h3>
                    <label>{profile.handle}</label> */}
                   

               Create
    </div>
        )
    }
}

CreateUserProfile.PropTypes={
    user:PropTypes.object.isRequired
}

export default CreateUserProfile
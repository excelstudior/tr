import React, { Component } from 'react';
import './Auth.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.signIn = {
            "email": "",
            "password": ""
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this)
    }

    componentDidMount() {
        
    }
    // componentWillReceiveProps(nextProps) {
    //     if (Object.keys(nextProps.user).length!==0) {
    //       this.props.history.push('/');
    //     }
    //   }
    componentDidUpdate() {

    }

    onChange(e){
        this.signIn={...this.signIn,[e.target.name]:e.target.value}
        console.log(this.signIn);
    }
    onSubmit(e){
        e.preventDefault();
        this.props.signInUser(this.signIn,this.props.history);
    }

    render() {
        const {validationErrors}=this.props;
        return (

            <div className='signIn-Container'>
                <form onSubmit={this.onSubmit} >
                    <TextField
                        type={'email'}
                        name={'email'}
                        placeholder={'User email address'}
                        defaultValue={this.signIn.email}
                        onChange={this.onChange}
                        error={validationErrors!=={}?validationErrors.email:''}
                    />
                    <TextField
                        type={'password'}
                        name={'password'}
                        placeholder={'password'}
                        defaultValue={this.signIn.password}
                        onChange={this.onChange}
                        error={validationErrors!=={}?validationErrors.password:''}
                    />
                    <input type='submit' value='Sign In'/>
                </form>
            </div>

        )
    }
}

SignIn.PropTypes={
    signInUser:PropTypes.func.isRequired,
    validationErrors:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired
}

export default SignIn
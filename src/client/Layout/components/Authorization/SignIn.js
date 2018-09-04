import React, { Component } from 'react';
// import './SignIn.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

            <div>
                <h2>Sign In</h2>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <input
                            type="email"
                            placeholder="User email address"
                            name="email"
                            defaultValue={this.signIn.email}
                            onChange={this.onChange}
                        />
                        <div className='invalid-input'>{validationErrors!=={}?validationErrors.email:''}</div>
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="User password"
                            name="password"
                            defaultValue={this.signIn.password}
                            onChange={this.onChange}
                        />
                        <div className='invalid-input'>{validationErrors!=={}?validationErrors.password:''}</div>
                    </div>
                    <input type='submit'/>
                </form>
            </div>

        )
    }
}

SignIn.PropTypes={
    signInUser:PropTypes.func.isRequired,
    validationErrors:PropTypes.object.isRequired
}

export default SignIn
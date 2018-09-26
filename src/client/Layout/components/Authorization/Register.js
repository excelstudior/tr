import React, { Component } from 'react';
import './Auth.css'
import PropTypes from 'prop-types';



class Register extends Component {
    constructor(props) {
        super(props);
        this.newUser={
            "name":"",
            "email":"user@example.com",
            "password":"",
            "confirmPassword":""
        };
        this.error={};
        this.onSubmit=this.onSubmit.bind(this)
        this.onChange=this.onChange.bind(this)
    }

    onChange(e){
        this.newUser={...this.newUser,[e.target.name]:e.target.value}
    }


    onSubmit(e){
        e.preventDefault();
        this.props.registerUser(this.newUser,this.props.history);
    }

    componentWillUnmount(){
        this.props.clearValidationErrors()
    }

    render() {
        const {validationErrors}=this.props;

        return (
    
                <div className='register-container'>
                    <p>Welcome on board!</p>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input 
                            type='text' 
                            placeholder='Your Username'
                            name="name"
                            defaultValue={this.newUser.name}
                            onChange={this.onChange}/>
                            <div className='invalid-input'>{validationErrors!=={}?validationErrors.name:''}</div>
                        </div>
                        <div>
                            <input 
                            type='email' 
                            placeholder='user@example.com'
                            name="email"
                            defaultValue={this.newUser.email}
                            onChange={this.onChange}/>
                            <div className='invalid-input'>{validationErrors!=={}?validationErrors.email:''}</div>
                        </div>
                        <div>
                            <input type='password'
                            placeholder='Password'
                            name="password"
                            defaultValue={this.newUser.password}
                            onChange={this.onChange}/>
                            <div className='invalid-input'>{validationErrors!=={}?validationErrors.password:''}</div>
                        </div>
                        <div>
                            <input type='password'
                            placeholder='confirmPassword'
                            name='confirmPassword'
                            defaultValue={this.newUser.confirmPassword}
                            onChange={this.onChange}/>
                            <div className='invalid-input'>{validationErrors!=={}?validationErrors.confirmPassword:''}</div>
                        </div>
                        
                        <button type='submit' className='btn-register-submit'>Submit</button>
                    </form>
                </div>

        )
    }
}

Register.PropTypes={
    registerUser:PropTypes.func.isRequired,
    validationErrors:PropTypes.object.isRequired,
    clearValidationErrors:PropTypes.func.isRequired
}

export default Register
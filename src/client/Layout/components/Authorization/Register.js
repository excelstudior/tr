import React, { Component } from 'react';
import './Register.css'
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
        console.log(this.props.history)
        this.newUser={...this.newUser,[e.target.name]:e.target.value}
    }


    onSubmit(e){
        e.preventDefault();
        console.log(this.props.history)
        this.props.registerUser(this.newUser,this.props.history);
    }

    render() {
        return (
    
                <div className='register-container'>
                    <h2>Sign Up</h2>
                    <h4>Create your account</h4>
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input 
                            type='text' 
                            placeholder='Your Username'
                            name="name"
                            defaultValue={this.newUser.name}
                            onChange={this.onChange}/>
                            <div className='register-invalid-input'></div>
                        </div>
                        <div>
                            <input 
                            type='email' 
                            placeholder='user@example.com'
                            name="email"
                            defaultValue={this.newUser.email}
                            onChange={this.onChange}/>
                            <div className='register-invalid-input'></div>
                        </div>
                        <div>
                            <input type='password'
                            placeholder='Password'
                            name="password"
                            defaultValue={this.newUser.password}
                            onChange={this.onChange}/>
                            <div className='register-invalid-input'></div>
                        </div>
                        <div>
                            <input type='password'
                            placeholder='confirmPassword'
                            name='confirmPassword'
                            defaultValue={this.newUser.password2}
                            onChange={this.onChange}/>
                            <div className='register-invalid-input'></div>
                        </div>
                        
                        <button type='submit' on>Submit</button>
                    </form>
                </div>

        )
    }
}

Register.PropTypes={
    registerUser:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired
}

export default Register
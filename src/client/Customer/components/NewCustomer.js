import React, { Component } from 'react';
import './Customer.css';
import PropTypes from 'prop-types';
import {ADD,CANCEL,NONE} from '../../CommonComponents/Constants';
import TextField from '../../CommonComponents/TextField';

class NewCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCustomer: {  },
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onAddCustomer = this.onAddCustomer.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onInputChange(e) {
        console.log(this.state.newUser)
        // let user = this.state.newUser
        // this.setState({
        //     newUser: {
        //         ...user, [e.target.name]:
        //             e.target.name !== 'isActive'
        //                 ? e.target.value
        //                 : e.target.checked
        //                     ? true : false
        //     }
        // })
    }

    onAddCustomer(e) {
        console.log(this.state.newCustomer)
        e.preventDefault();
      //  this.props.addUser(this.state.newUser, this.props.history)
    }
    onCancel(e) {
       this.props.changeMode(e);
    }

    render() {
        //const { mode, errors } = this.props;
        //console.log(errors)
        return (
            <div className='new-entity'>
                <div className='new-entity-content'>
                    <div className='menu-button'>
                        <button onClick={this.onAddCustomer}>{ADD}</button>
                        <button name={NONE} onClick={this.onCancel}>{CANCEL}</button>
                    </div>
                    <br />
                    <label>User Name</label><br />
                    <TextField name='name'
                        placeholder={'User Name'}
                        onChange={this.onInputChange}
                        //error={errors.name !== undefined ? errors.name : ''}
                    />
                    <br />
                    <label>User Email</label><br />
                    <TextField type='text'
                        name='email'
                        placeholder={'User Email'}
                        onChange={this.onInputChange}
                        //error={errors.email !== undefined ? errors.email : ''}
                    />
                    <br />
                    {/* <label>Type</label><br />
                    <select name='type' onChange={this.onInputChange}>
                        <option value={ADMIN}>
                            {ADMIN}
                        </option>
                        <option selected value={END_USER}>
                            {END_USER}
                        </option>
                    </select>
                    <br /> */}
                    <label>Activated</label>
                    <br />
                    <input
                        type='checkbox'
                        name='isActive'
                        onChange={this.onInputChange}
                    />

                </div>
            </div>
        )
    }
}

export default NewCustomer
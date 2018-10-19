import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';
import UsersTable from './UsersTable';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            
        }
        this.handleSwitchMode = this.handleSwitchMode.bind(this);


    }

    componentDidMount() {

    }

    componentWillMount() {
        this.props.getUsers()
    }

    componentDidUpdate() {

    }

    handleSwitchMode(e) {
        this.props.changeMode(e.target.name)
        console.log(this.state)
    }
    render() {
        const { loading, users, mode,errors} = this.props.users;
        const {addUser,changeMode,saveUser}=this.props
        
        let content;
        if (users.length === 0 || loading) {
            content = <p>Loading...</p>
        } else {
            content =
                <div className='dashboard-users-content'>
                    
                    {users.length !== 0
                        ? <UsersTable
                            mode={mode}
                            users={users}
                            addUser={addUser}
                            saveUser={saveUser}
                            changeMode={changeMode}
                            errors={errors}
                        />
                        : ''}
                </div>
        }
        return (
            <div className='dashboard-users'>
                <div className='dashboard-users-button'>
                    {mode === NONE ? <button onClick={this.handleSwitchMode} name={ADD}>{ADD}</button> : ''}
                    {mode === NONE ? <button onClick={this.handleSwitchMode} name={EDIT}>{EDIT}</button> : ''}
                    
                    {mode === NONE ? '' : <button onClick={this.handleSwitchMode} name={NONE}>{CANCEL}</button>}
                </div>

                {content}

            </div>
        )
    }
}

Users.PropTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
    addUser:PropTypes.func.isRequired,
    changeMode:PropTypes.func.isRequired,
    saveUser:PropTypes.func.isRequired,
}

export default Users
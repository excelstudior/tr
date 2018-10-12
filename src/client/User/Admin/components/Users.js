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
            editUsers: [],
            
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
        // this.setState({
        //     //editUsers: [],
        //     mode: e.target.name,
        // })
        this.props.changeMode(e.target.name)
        console.log(this.state)
    }
    render() {
        const { loading, users, mode} = this.props.users;
        const {addUser,changeMode}=this.props
        const { editUsers} = this.state;
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
                            changeMode={changeMode}
                        />
                        : ''}
                </div>
        }
        return (
            //EDIT||mode===ADD||mode===DELETE
            <div className='dashboard-users'>
                <div className='dashboard-users-button'>
                    {mode === NONE ? <button onClick={this.handleSwitchMode} name={ADD}>{ADD}</button> : ''}
                    {mode === NONE ? <button onClick={this.handleSwitchMode} name={EDIT}>{EDIT}</button> : ''}
                    {/* need to delet below when edit user table created */}
                    
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
}

export default Users
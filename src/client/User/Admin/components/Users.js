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
            selectedUsers: [],
            selectAllRows: false,

        }
        this.onSaveSelectedUserChanges = this.onSaveSelectedUserChanges.bind(this);
        this.onSelectedUsersChange = this.onSelectedUsersChange.bind(this);
        this.handleSwitchMode = this.handleSwitchMode.bind(this);
        this.handleRowCheck = this.handleRowCheck.bind(this);
        this.selectAll = this.selectAll.bind(this);
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.props.getUsers()
    }

    componentDidUpdate() {

    }

    componentWillReceiveProps(nextProps) {

        let currentUsers = this.props.users.users;
        let newUsers = nextProps.users.users;
        let selectedUsers = this.state.selectedUsers
        let newSelectedUsers = selectedUsers.filter((user) => {
            //check with new props
            let inNewUsers = newUsers.find((nUser) => {
                if (nUser._id === user._id) {
                    return nUser
                }
            })
            //check with current users
            let inCurrentUsers = currentUsers.find((cUser) => {
                if (cUser._id === user._id) {
                    return cUser
                }
            })
            console.log('compare', inCurrentUsers === inNewUsers)
            if (inCurrentUsers === inNewUsers) {
                return user
            }

        })
        
        this.setState({
            selectedUsers: newSelectedUsers,
            selectAllRows:nextProps.users.mode===NONE
                        ?false
                        :this.state.selectAllRows
        })
        

    }

    onSaveSelectedUserChanges(id) {
        let userToBeUpdated = this.state.selectedUsers.find(user => user._id === id)
        console.log(userToBeUpdated);
        this.props.saveUser(userToBeUpdated, this.props.history);
    }
    onSelectedUsersChange(id, name, value) {
        console.log(id, name, value)
        const { selectedUsers } = this.state;
        let updatedUser = selectedUsers.find(user => user._id === id);
        console.log(updatedUser)
        this.setState({
            selectedUsers: selectedUsers.map((user, i) => {
                if (user._id !== updatedUser._id) {
                    return user
                } else {
                    return { ...user, [name]: value }
                }

            })
        })

    }
    selectAll(e) {
       
        this.setState({
            selectedUsers: e.target.checked === true ? this.props.users.users : [],
            selectAllRows: e.target.checked
        })
    }

    handleRowCheck(e) {
       
        let propsUsers = this.props.users.users;
        let selectedUsers = this.state.selectedUsers;
        this.setState({
            selectedUsers: e.target.checked === false
                ? selectedUsers.filter(selectedUser => selectedUser._id !== e.target.value)
                : selectedUsers.indexOf(propsUsers[e.target.name]) < 0
                    ? [...selectedUsers, propsUsers[e.target.name]]
                    : [...selectedUsers],
            selectAllRows: e.target.checked === false
                ? e.target.checked
                : selectedUsers.indexOf(propsUsers[e.target.name]) > -1
                    ? this.state.selectAllRows
                    : [...selectedUsers, propsUsers[e.target.name]].length === propsUsers.length
                        ? true
                        : this.state.selectAllRows

        })

    }

    handleSwitchMode(e) {
       
        this.props.changeMode(e.target.name)

    }
    render() {
        const { loading, users, mode, errors } = this.props.users;
        const { addUser, changeMode, saveUser } = this.props;
        const { selectAllRows, selectedUsers } = this.state;
        console.log('user mount', selectedUsers)
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
                            handleRowCheck={this.handleRowCheck}
                            onSelectedUsersChange={this.onSelectedUsersChange}
                            selectAll={this.selectAll}
                            selectAllRows={selectAllRows}
                            selectedUsers={selectedUsers}
                            onSaveSelectedUserChanges={this.onSaveSelectedUserChanges}
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
    addUser: PropTypes.func.isRequired,
    changeMode: PropTypes.func.isRequired,
    saveUser: PropTypes.func.isRequired,
}

export default Users
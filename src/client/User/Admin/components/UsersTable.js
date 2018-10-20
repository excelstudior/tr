import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';
import TextField from '../../../CommonComponents/TextField'
import { ADMIN, END_USER } from '../../../../server/common/constants'


class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: { password: "123456", confirmPassword: "123456" },
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onInputChange(e) {
        console.log(this.state.newUser)
        let user = this.state.newUser
        this.setState({
            newUser: {
                ...user, [e.target.name]:
                    e.target.name !== 'isActive'
                        ? e.target.value
                        : e.target.checked
                            ? true : false
            }
        })
    }

    onAddUser(e) {
        console.log(this.state.newUser)
        e.preventDefault();
        this.props.addUser(this.state.newUser, this.props.history)
    }
    onCancel() {
        this.props.changeMode(NONE);
    }

    render() {
        const { mode, errors } = this.props;
        console.log(errors)
        return (
            <div className='dashboard-modal-users-newUser'>
                <div className='dashboard-users-newUser-content'>
                    <div className='dashboard-users-button'>
                        <button onClick={this.onAddUser}>{ADD}</button>
                        <button onClick={this.onCancel}>{CANCEL}</button>
                    </div>
                    <br />
                    <label>User Name</label><br />
                    <TextField name='name'
                        placeholder={'User Name'}
                        onChange={this.onInputChange}
                        error={errors.name !== undefined ? errors.name : ''}
                    />
                    <br />
                    <label>User Email</label><br />
                    <TextField type='text'
                        name='email'
                        placeholder={'User Email'}
                        onChange={this.onInputChange}
                        error={errors.email !== undefined ? errors.email : ''}
                    />
                    <br />
                    <label>Type</label><br />
                    <select name='type' onChange={this.onInputChange}>
                        <option value={ADMIN}>
                            {ADMIN}
                        </option>
                        <option selected value={END_USER}>
                            {END_USER}
                        </option>
                    </select>
                    <br />
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

class UserRowData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected:false,
        }
    }

    render() {
        const { user, index, mode, onSelectedUsersChange, onSaveSelectedUserChanges, handleRowCheck,selectedUsers } = this.props;
       
        let selected=selectedUsers.map((u)=>u._id).indexOf(user._id)>-1;
        return (
            <tr>
                <td>{mode === NONE
                    ? <input
                        type='checkbox'
                        name={index}
                        value={user._id}
                        onChange={handleRowCheck}
                        checked={selected}
                    />
                    : mode === EDIT && selected
                        ? <i class="far fa-save" onClick={() => onSaveSelectedUserChanges(user._id)}></i>
                        : <input
                            type='checkbox'
                            disabled={true}
                        />}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{mode === EDIT && selected
                    ? <input
                        type='checkbox'
                        name='isActive'
                        defaultChecked={user.isActive}
                        onChange={(e) => onSelectedUsersChange(user._id, e.target.name, e.target.checked)}
                    /> : user.isActive ? 'Active' : 'Inactive'}
                </td>
                <td>
                    {mode === EDIT && selected
                        ? <select name='type' onChange={(e) => onSelectedUsersChange(user._id, e.target.name, e.target.value)}>
                            {[ADMIN, END_USER].map((el) => {
                                if (el === user.type) {
                                    return <option selected value={el}>{el}</option>
                                } else {
                                    return <option value={el}>{el}</option>
                                }
                            })}
                        </select> : user.type}
                </td>
            </tr>
        )
    }
}



class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectAllRows: false,
            selectedUsers: [],
        }
        
        
    }


    render() {
        const { users, mode, addUser, changeMode, errors,selectAll ,selectAllRows, selectedUsers,handleRowCheck,onSelectedUsersChange,onSaveSelectedUserChanges } = this.props;

        console.log('Mount again',selectedUsers)


        return (
            <div className='dashboard-users-table'>
                {<table>
                    <thead>
                        <tr>
                            <th><input
                                type='checkbox'
                                name='all'
                                checked={selectAllRows}
                                onChange={selectAll}
                                disabled={mode !== NONE}
                            /></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Active</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => {
                            return <UserRowData
                                users={users}
                                user={user}
                                index={i}
                                mode={mode}
                                selectedUsers={selectedUsers}
                                handleRowCheck={handleRowCheck}
                                onSelectedUsersChange={onSelectedUsersChange}
                                onSaveSelectedUserChanges={onSaveSelectedUserChanges}/>
                        })}
                    </tbody>
                  

                </table>}
               
                {mode === ADD && <NewUser addUser={addUser} changeMode={changeMode} mode={mode} errors={errors} />}
            </div>
        )
    }
}

UsersTable.PropTypes = {
    mode: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func.isRequired,
    saveUser: PropTypes.func.isRequired,
    changeMode: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
}

export default UsersTable
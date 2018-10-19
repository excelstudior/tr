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
    }
    render() {
        const { user, index, onSelectedUsersChange, onSaveSelectedUserChanges } = this.props;
        return (
            <tr>
                <td><i class="far fa-save" onClick={() => onSaveSelectedUserChanges(user._id)}></i></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><input
                    type='checkbox'
                    name='isActive'
                    defaultChecked={user.isActive}
                    onChange={(e) => onSelectedUsersChange(user._id, e.target.name, e.target.checked)}
                />
                </td>
                <td><select name='type' onChange={(e) => onSelectedUsersChange(user._id, e.target.name, e.target.value)}>
                    {[ADMIN, END_USER].map((el) => {
                        if (el === user.type) {
                            return <option selected value={el}>{el}</option>
                        } else {
                            return <option value={el}>{el}</option>
                        }
                    })}

                </select></td>
            </tr>
        )
    }
}

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    

    render() {
        const { selectedUsers,onSelectedUsersChange, onSaveSelectedUserChanges } = this.props;
        console.log(selectedUsers)
        let userIds = selectedUsers.map((user) => user._id);
        return (
            <table>
                <thead>
                    <tr>
                        <th><i class="fas fa-save" onClick={() => onSaveSelectedUserChanges(userIds)}></i></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedUsers.map((user, i) => {
                        return <UserRowData user={user} index={i}
                            onSelectedUsersChange={onSelectedUsersChange}
                            onSaveSelectedUserChanges={onSaveSelectedUserChanges}
                        />
                    })}

                </tbody>

            </table>
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
        this.selectAll = this.selectAll.bind(this);
        this.handleRowCheck = this.handleRowCheck.bind(this);
        this.onSelectedUsersChange = this.onSelectedUsersChange.bind(this);
        this.onSaveSelectedUserChanges = this.onSaveSelectedUserChanges.bind(this);
    }

    componentDidMount() {

    }

    // componentWillMount() {

    //     this.setState(prevState => ({
    //         selectedUsers: prevState.selectedUsers.length === 0
    //             ? []
    //             : prevState.selectedUsers.filter((user)=>{
    //                 if(this.props.users.indexOf(user)>-1){
    //                     return user
    //                 }
    //             })
    //             }))
       
    // }

    componentWillReceiveProps(nextProps){
        console.log('users',nextProps.users)
        console.log('nextProps',this.state.selectedUsers)
        this.setState(prevState => ({
            selectedUsers: prevState.selectedUsers.length === 0
                ? []
                : prevState.selectedUsers.filter((user)=>{
                    if(nextProps.users.indexOf(user)>-1){
                        return user
                    }
                })
                }))

    }

    componentDidUpdate() {

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


    handleRowCheck(e) {
        console.log(this.state);
        let propsUsers = this.props.users;
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
    selectAll(e) {
        console.log(this.state)
        this.setState({
            selectedUsers: e.target.checked === true ? this.props.users : [],
            selectAllRows: e.target.checked
        })
    }



    render() {
        const { users, mode, addUser, changeMode, errors } = this.props;

        const { selectAllRows, selectedUsers } = this.state;
        console.log(selectedUsers)


        return (
            <div className='dashboard-users-table'>
                {mode === NONE && <table>
                    <thead>
                        <tr>
                            <th><input
                                type='checkbox'
                                name='all'
                                checked={selectAllRows}
                                onChange={this.selectAll}
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
                            return <tr>
                                <td><input
                                    type='checkbox'
                                    name={i}
                                    value={user._id}
                                    onChange={this.handleRowCheck}
                                    checked={selectedUsers.indexOf(user) > -1}
                                    disabled={mode !== NONE}
                                /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isActive ? 'Active' : 'Inactive'}
                                </td>
                                <td>{user.type}</td>
                            </tr>
                        })}

                    </tbody>

                </table>}
                {mode === EDIT && <EditUser
                    users={users}
                    selectedUsers={selectedUsers}
                    onSelectedUsersChange={this.onSelectedUsersChange}
                    onSaveSelectedUserChanges={this.onSaveSelectedUserChanges}
                />}
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
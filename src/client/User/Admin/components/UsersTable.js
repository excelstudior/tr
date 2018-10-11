import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';
import { ADMIN, END_USER } from '../../../../server/common/constants'


const NewUser = ({ onChange }) => {
    return (
        <tr>
            <td>
                <input
                    type='checkbox'
                    disabled={true}
                    onChange={onChange}
                />
            </td>
            <td>
                <input type='text'
                    name='name'
                    placeholder={'User Name'}
                    onChange={onChange}
                />
            </td>
            <td>
                <input type='text'
                    name='email'
                    placeholder={'User Email'}
                    onChange={onChange}
                />
            </td>
            {/* <td>
                <input type='text'
                    disabled={true}
                    placeholder={'Avatar'}
                    onChange={onChange}
                />
            </td> */}
            <td>
                <select name='isActive' onChange={onChange}>
                    <option selected value={Boolean(true)}>
                        Active
                    </option>
                    <option value={Boolean(false)}>
                        Inactive
                    </option>
                </select>
            </td>
            <td>
                <select name='type' onChange={onChange}>
                    <option selected value={ADMIN}>
                        {ADMIN}
                    </option>
                    <option value={END_USER}>
                        {END_USER}
                    </option>
                </select>
            </td>
        </tr>
    )
}

class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectAllRows: false,
            currentUsers: [],
            newUser: { password: "123456", confirmPassword: "123456" },
        }
        this.selectAll = this.selectAll.bind(this);
        this.handleRowCheck = this.handleRowCheck.bind(this);
        this.onNewUserInputChange = this.onNewUserInputChange.bind(this);
        this.onAddUser = this.onAddUser.bind(this);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    handleRowCheck(e) {
        console.log(this.state);
        let propsUsers = this.props.users;
        let currentUsers = this.state.currentUsers;
        this.setState({
            currentUsers: e.target.checked === false
                ? currentUsers.filter(currentUser => currentUser._id !== e.target.value)
                : currentUsers.indexOf(propsUsers[e.target.name]) < 0
                    ? [...currentUsers, propsUsers[e.target.name]]
                    : [...currentUsers],
            selectAllRows: e.target.checked === false
                ? e.target.checked
                : currentUsers.indexOf(propsUsers[e.target.name]) > -1
                    ? this.state.selectAllRows
                    : [...currentUsers, propsUsers[e.target.name]].length === propsUsers.length
                        ? true
                        : this.state.selectAllRows

        })

    }
    selectAll(e) {
        console.log(this.state)
        this.setState({
            currentUsers: e.target.checked === true ? this.props.users : [],
            selectAllRows: e.target.checked
        })
    }

    onAddUser(e) {
        console.log(this.state.newUser)
        e.preventDefault();
        this.props.addUser(this.state.newUser, this.props.history)
    }
    onNewUserInputChange(e) {
        console.log(this.state.newUser)
        let user = this.state.newUser
        this.setState({
            newUser: {
                ...user, [e.target.name]: [e.target.name] === 'isActive'
                    ? Boolean(e.target.value)
                    : e.target.value
            }
        })
    }
    render() {
        const { users, mode } = this.props;

        const { selectAllRows, currentUsers, newUser } = this.state;

        return (
            <div>
                <table>
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
                            {/* <th>Avatar</th> */}
                            <th>Status</th>
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
                                    checked={currentUsers.indexOf(user) > -1}
                                    disabled={mode !== NONE}
                                /></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                {/*write a onMouseOver method to display a long value */}
                                {/* <td>
                                    {user.avatar === null
                                        ? ''
                                        : user.avatar.length >= 6
                                            ? user.avatar.substring(0, 5)
                                            : user.avatar
                                    }</td> */}
                                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                                <td>{user.type}</td>
                            </tr>
                        })}
                        {mode === ADD
                            ? <NewUser onChange={this.onNewUserInputChange} />
                            : <tr></tr>}
                    </tbody>

                </table>
                <div className='dashboard-users-button'>
                    {mode === ADD ? <button onClick={this.onAddUser} name={ADD}>{ADD}</button> : ''}
                    {mode === EDIT ? <button name={EDIT}>SAVE</button> : ''}

                </div>
            </div>
        )
    }
}

UsersTable.PropTypes = {
    mode: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func,
}

export default UsersTable
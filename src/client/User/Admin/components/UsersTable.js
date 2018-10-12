import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';
import { ADMIN, END_USER } from '../../../../server/common/constants'


class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: { password: "123456", confirmPassword: "123456" },
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onAddUser=this.onAddUser.bind(this);
        this.onCancel=this.onCancel.bind(this);
    }

    onInputChange(e) {
        console.log(this.state.newUser)
        let user = this.state.newUser
        this.setState({
            newUser: {
                ...user, [e.target.name]:
                    e.target.name!=='isActive'
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
    onCancel(e){
        this.props.changeMode(NONE);
    }

    render() {
        return (
            <form onSubmit={this.onAddUser}>
                <label>User Name</label><br />
                <input type='text'
                    name='name'
                    placeholder={'User Name'}
                    onChange={this.onInputChange}
                /><br />
                <label>User Email</label><br />
                <input type='text'
                    name='email'
                    placeholder={'User Email'}
                    onChange={this.onInputChange}
                /><br />
                <label>Activated</label><br />
                <input
                    type='checkbox'
                    name='isActive'
                    onChange={this.onInputChange}
                /><br />
                <label>Type</label><br />
                <select name='type' onChange={this.onInputChange}>
                    <option value={ADMIN}>
                        {ADMIN}
                    </option>
                    <option selected value={END_USER}>
                        {END_USER}
                    </option>
                </select><br/>
                <input type='submit' value='Add' />
                <input type='button' value='Cancel' onClick={this.onCancel}/>
            </form>
        )
    }
}

class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectAllRows: false,
            currentUsers: [],
        }
        this.selectAll = this.selectAll.bind(this);
        this.handleRowCheck = this.handleRowCheck.bind(this);
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

    
 
    render() {
        const { users, mode,addUser,changeMode } = this.props;

        const { selectAllRows, currentUsers} = this.state;

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
                                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                                <td>{user.type}</td>
                            </tr>
                        })}

                    </tbody>

                </table>
                {/* <div className='dashboard-users-button'>
                    {mode === ADD ? <button onClick={this.onAddUser} name={ADD}>{ADD}</button> : ''}
                    {mode === EDIT ? <button name={EDIT}>SAVE</button> : ''}

                </div> */}
                {mode === ADD
                    ? <NewUser addUser={addUser} changeMode={changeMode} />
                    : <br />}
            </div>
        )
    }
}

UsersTable.PropTypes = {
    mode: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    addUser: PropTypes.func.isRequired,
    changeMode:PropTypes.func.isRequired,
}

export default UsersTable
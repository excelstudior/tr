import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';

class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectAllRows: false,
            currentUsers: []
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
        const { users, mode, onChange } = this.props;
        const { selectAllRows, currentUsers } = this.state;

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
                            <th>Avatar</th>
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
                                <td>
                                    {user.avatar === null
                                        ? ''
                                        : user.avatar.length >= 6
                                            ? user.avatar.substring(0, 5)
                                            : user.avatar
                                    }</td>
                                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                                <td>{user.type}</td>
                            </tr>
                        })}



                    </tbody>
                    
                </table>
                <button name={mode}>{mode}</button>
            </div>
        )
    }
}

UsersTable.PropTypes = {
    mode: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onChange: PropTypes.func,
}

export default UsersTable
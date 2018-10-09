import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';

class UsersTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectAllRows:false,
            currentUserIds: []
        }
        this.selectAll = this.selectAll.bind(this);
        this.handleRowCheck=this.handleRowCheck.bind(this);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentDidUpdate() {

    }

    handleRowCheck(e){
        this.setState(prevState=>({
            currentUserIds:e.targe.checked
                ?[...prevState.currentUserIds,e.target.value]
                :prevState.currentUserIds.filter(id=>id!==e.targe.value)
        }))
    }
    selectAll(e) {

        let userIds=this.props.users.map((user,i)=>{
            return user._id;
        })
        this.setState({
            currentUserIds: e.target.checked === true ?userIds : [],
            selectAllRows:e.target.checked
        })
        console.log(this.state)
    }

    render() {
        const { users, mode, onChange } = this.props;
        const {selectAllRows}=this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th><input
                            type='checkbox'
                            name='all'
                            defaultChecked={false}
                            onChange={this.selectAll}
                            disabled={mode === ADD}
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
                                defaultChecked={false}
                                onChange={this.handleRowCheck}
                               // checked={currentUsers[]}
                                disabled={mode === ADD}
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
        )
    }
}

UsersTable.PropTypes = {
    mode: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onChange: PropTypes.func,
}

export default UsersTable
import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';
import UsersTable from './UsersTable';

// const Tbl_Users = (props) => {

//    //extract component to write controls on checkbox

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th><input
//                         type='checkbox'
//                         name='all'
//                         defaultChecked={false}
//                         checked={props.checked}
//                         onChange={props.onChange}
//                         disabled={props.mode === ADD}
//                     /></th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Avatar</th>
//                     <th>Status</th>
//                     <th>Type</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.users.map((user, i) => {
//                     return <tr>
//                         <td><input
//                             type='checkbox'
//                             name={user._id}
//                             defaultChecked={false}
//                             onChange={props.onChange}
//                             disabled={props.mode === ADD}
//                         /></td>
//                         <td>{user.name}</td>
//                         <td>{user.email}</td>
//                         {/*write a onMouseOver method to display a long value */}
//                         <td>
//                             {user.avatar === null
//                                 ? ''
//                                 : user.avatar.length >= 6
//                                     ? user.avatar.substring(0, 5)
//                                     : user.avatar
//                             }</td>
//                         <td>{user.isActive?'Active':'Inactive'}</td>
//                         <td>{user.type}</td>
//                     </tr>
//                 })}
//             </tbody>

//         </table>
//     )
// }

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editUsers: [],
            mode: NONE
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
        this.setState({
            //editUsers: [],
            mode: e.target.name,
        })
        console.log(this.state)
    }
    render() {
        const { loading, users } = this.props.users;
        const { editUsers, mode } = this.state;
        let content;
        if (users.length === 0 || loading) {
            content = <p>Loading...</p>
        } else {
            content =
                <div className='dashboard-users-content'>
                    There are {users.length} users
                    {users.length !== 0
                        ? <UsersTable
                            mode={mode}
                            users={users}
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
                    {mode === NONE ? <button onClick={this.handleSwitchMode} name={DELETE}>{DELETE}</button> : ''}
                    {mode === NONE ? '' : <button onClick={this.handleSwitchMode} name={NONE}>{CANCEL}</button>}
                </div>

                {content}
                {/* {users.length!==0?<Tbl_Users mode={mode} users={users} />:''} */}
            </div>
        )
    }
}

Users.PropTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
}

export default Users
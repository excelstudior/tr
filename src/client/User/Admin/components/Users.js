import React, { Component } from 'react';
import './Users.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ADD, SAVE, DELETE, EDIT, CANCEL, NONE } from '../../../CommonComponents/Constants';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editUsers: [],
            mode: NONE
        }
        this.onEdit = this.onEdit.bind(this);

    }

    componentDidMount() {

    }

    componentWillMount() {
        this.props.getUsers()
    }

    componentDidUpdate() {

    }

    onEdit() {
        this.setState({
            editUsers: this.props.users.users,
            mode: EDIT,
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
                <div className='dashboard-users'>
                    There are {users.length} users
                        </div>
        }
        return (
            <div>
                <button onClick={this.onEdit}>Edit</button>
                {content}
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
import React, { Component } from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate() {

    }

    render() {
        return (
    
                <div className='Dashboard'>
                    <h2>Admin Dashboard</h2>
                    Today is {new Date().toLocaleDateString()} and logged on at {new Date().toLocaleTimeString()}
                </div>

        )
    }
}

Dashboard.PropTypes={
    user:PropTypes.object.isRequired,
    users:PropTypes.array.isRequired,
    getUsers:PropTypes.func.isRequired,
}

export default Dashboard
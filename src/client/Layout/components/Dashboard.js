import React, { Component } from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
    
                <div className='Dashboard'>
                    Today is {new Date().getMonth() - new Date().getDate()}
                </div>

        )
    }
}

// Dashboard.PropTypes={
//     Dashboard:PropTypes.array.isRequired
// }

export default Dashboard
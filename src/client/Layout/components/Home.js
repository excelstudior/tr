import React, { Component } from 'react';
// import './Home.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Calendar from '../../MiniApps/Calendar/components/Calendar';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
    
                <div>
                    Home
                    <div>
                        <Calendar/>
                    </div>
                </div>

        )
    }
}

// Home.PropTypes={
//     Home:PropTypes.array.isRequired
// }

export default Home
import React, { Component } from 'react';
// import './Home.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
    
                <div className='Footer'>
                    copyright &copy;{new Date().getFullYear()}
                </div>

        )
    }
}

// Footer.PropTypes={
//     Footer:PropTypes.array.isRequired
// }

export default Footer
import React, { Component } from 'react';
import './Calendar.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onChange = this.onChange.bind(this);

    }

    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }
    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    onChange(e) {

    }


    render() {

        return (

            <div className='calendar'>
                <div className='calendar-head'>
                    <button className='btn-cal-prev'>Prev</button>
                    <span>2018</span>
                    <span>Feb</span>
                    <button className='btn-cal-next'>Next</button>
                </div>
                <div className='calendar-dayNames'>
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                </div>
                <div className='calendar-content'></div>
            </div>

        )
    }
}

// SignIn.PropTypes={
//     signInUser:PropTypes.func.isRequired,
//     validationErrors:PropTypes.object.isRequired,
//     clearValidationErrors:PropTypes.func.isRequired,
//     user:PropTypes.object.isRequired
// }

export default Calendar
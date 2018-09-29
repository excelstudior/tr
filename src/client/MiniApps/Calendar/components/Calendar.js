import React, { Component } from 'react';
import './Calendar.css';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '../../../CommonComponents/TextField';


const Year = ({ years, currentYear, classname, onChange }) => {

    return (<select name='year' className={classname} onChange={onChange}>
        {years.map((year) => {
            return year === currentYear
                ? <option selected value={year}>{year}</option>
                : <option value={year}>{year}</option>
        })}
    </select>)
}

const Month =({currentMonth,classname,onChange})=>{
    let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return (
        <select name='month' className={classname} onChange={onChange}>
        {months.map((month,i) => {
            return month === currentMonth
                ? <option selected value={i}>{month}</option>
                : <option value={i}>{month}</option>
        })}
    </select>

    )
}
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.years = _.range(1900, 2100);
        this.currentYear = new Date().getFullYear();
        this.currentMonth= new Date().getMonth();
        this.currentDate =new Date().getDate();
        this.currentDay= new Date().getDay();
        this.state = {
            year: this.currentYear,
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

    setCurrentYear(){

    }
    setCurrentMonth(){
        
    }
    onChange(e) {
        //console.log(e.targe.value);
        this.setState({ [e.target.name]: parseInt(e.target.value) })
        console.log(this.state)
    }


    render() {

        return (

            <div className='calendar'>
                <div className='calendar-head'>
                    <button className='btn-cal-prev'>Prev</button>
                    <Year classname='btn-cal-year' onChange={this.onChange} years={this.years} currentYear={this.currentYear} />
                    <Month classname='btn-cal-month' onChange={this.onChange} currentMonth={this.currentMonth}/>
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
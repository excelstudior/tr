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

const Month = ({ currentMonth, classname, onChange }) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
        <select name='month' className={classname} onChange={onChange}>
            {months.map((month, i) => {
                return i === currentMonth
                    ? <option selected value={i}>{month}</option>
                    : <option value={i}>{month}</option>
            })}
        </select>

    )
}
const DayButton = ({ value, name, onClick }) => {
    return (
        <button onClick={onClick} value={value}>{name}</button>
    )
}
const DateButton = ({ value, onClick }) => {
    return (
        <button onClick={onClick} name='date' value={value}>{value}</button>
    )
}
class Calendar extends Component {
    constructor(props) {
        super(props);
        this.years = _.range(1900, 2100);
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth(); // 0 base array, start from Jan
        this.currentDate = new Date().getDate(); // get the date number of the month
        this.currentDay = new Date().getDay(); // get the day number of the week, Sun is 0
        this.state = {
            year: this.currentYear,
            month: this.currentMonth,
            date: this.currentDate,
            selectedDate: {
                year: this.currentYear,
                month: this.currentMonth,
                date: this.currentDate
            },
            day: this.currentDay,
            dates: this.createDateObj(this.currentMonth, this.currentYear),
            numberOfWeekLines: 0,
            showCalendar: "none",
        };
        this.days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        this.onMonthChange = this.onMonthChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.onForwardOneMonth = this.onForwardOneMonth.bind(this);
        this.onBackwardOneMonth = this.onBackwardOneMonth.bind(this);
        this.createDateObj = this.createDateObj.bind(this);
        this.getNumberOfDaysOfMonth = this.getNumberOfDaysOfMonth.bind(this);
        this.isLeapYear = this.isLeapYear.bind(this);
        this.createWeekLines = this.createWeekLines.bind(this);
        this.createDateItemsOfOtherMonths = this.createDateItemsOfOtherMonths.bind(this);
        this.onDateClick = this.onDateClick.bind(this);
        this.onSelectDateClick = this.onSelectDateClick.bind(this);
        this.setCurrentDate = this.setCurrentDate.bind(this);

    }

    componentDidMount() {
        this.createDateObj(this.state.month, this.state.year)
    }

    componentWillUnmount() {

    }

    isLeapYear(year) {
        if (((year % 4 === 0) && ((year % 100) !== 0)) || (year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }
    getNumberOfDaysOfMonth(month, year) {
        console.log('this month number is', month)
        let month_has_30_days = [3, 5, 8, 10];
        let leapYear = this.isLeapYear(year);
        console.log('Leap Year is', leapYear, year, month)
        return leapYear && month === 1
            ? 29
            : !leapYear && month === 1
                ? 28
                : month_has_30_days.indexOf(month) > -1
                    ? 30
                    : 31;

    }
    createWeekLines(dates) {
        if (dates.length === 0) {
            return dates;
        } else {
            let weekLineIndex = 0;
            return dates.reduce((newDatesArr, d, i) => {
                newDatesArr[weekLineIndex].push(d);
                if (d.day === 6 && dates.indexOf(dates[i + 1]) > -1) {
                    newDatesArr.push([]);
                    weekLineIndex++;
                }
                return newDatesArr;
            }, [[]])
        }
    }

    createDateItemsOfOtherMonths(dates) {
        let weeksMaxIndex = dates.length - 1;
        let lastWeekMaxIndex = dates[weeksMaxIndex].length - 1;
        let emptyDateObj = {};
        let firstWeekOfEmptyObj = (dates[0][0].day);
        for (let i = 0; i <= firstWeekOfEmptyObj - 1; i++) {
            dates[0].unshift(emptyDateObj)
        }
        console.log(lastWeekMaxIndex, lastWeekMaxIndex)
        for (let i = 0; i < 6 - lastWeekMaxIndex; i++) {
            dates[weeksMaxIndex].push(emptyDateObj);
        }
        return dates;
    }


    createDateObj(month, year) {

        let numberOfDays = this.getNumberOfDaysOfMonth(month, year);

        let dates = []
        //use generic loop
        // console.log(numberOfDays)
        // for(let i=1;i<=numberOfDays;i++){
        //     dates.push(i);
        // }
        //use lodash
        numberOfDays++;
        dates = _.range(1, numberOfDays);
        console.log(dates)
        let objDates = dates.map((date, i) => {
            let objDate = {};
            objDate.month = month;
            objDate.date = date;
            objDate.day = new Date(year, month, date).getDay();
            return objDate;
        })

        objDates = this.createWeekLines(objDates);
        objDates = this.createDateItemsOfOtherMonths(objDates);
        return objDates;
    }

    setCurrentDate() {
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth(); // 0 base array, start from Jan
        this.currentDate = new Date().getDate(); // get the date number of the month
        this.setState({
            year: this.currentYear,
            month: this.currentMonth,
            date: this.currentDate,
            selectedDate: {
                year: this.currentYear,
                month: this.currentMonth,
                date: this.currentDate
            },
            showCalendar: "none",
        })
    }
    onForwardOneMonth() {
        if (this.state.month === 11) {
            this.setState(prevState => ({
                year: prevState.year + 1,
                month: 0,
                dates: this.createDateObj(0, prevState.year + 1)
            }))
        } else {
            this.setState(prevState => ({
                month: prevState.month + 1,
                dates: this.createDateObj(prevState.month + 1, this.state.year)
            }))
        }
    }
    onBackwardOneMonth() {
        if (this.state.month === 0) {
            this.setState(prevState => ({
                year: prevState.year - 1,
                month: 11,
                dates: this.createDateObj(11, prevState.year - 1)
            }))
        } else {
            this.setState(prevState => ({
                month: prevState.month - 1,
                dates: this.createDateObj(prevState.month - 1, this.state.year)
            }))
        }
    }

    onMonthChange(e) {
        this.setState({
            [e.target.name]: parseInt(e.target.value),
            dates: this.createDateObj(parseInt(e.target.value), this.state.year)
        })
        console.log(this.state)

    }
    onYearChange(e) {
        this.setState({
            [e.target.name]: parseInt(e.target.value),
            dates: this.createDateObj(this.state.month, parseInt(e.target.value))
        })
        console.log(this.state)

    }
    onDateClick(e) {
        this.setState({
            selectedDate: {
                year: this.state.year,
                month: this.state.month,
                date: parseInt(e.target.value),

            }, showCalendar: "none",
        })
        console.log(this.state)
    }
    onSelectDateClick() {
        switch (this.state.showCalendar) {
            case 'none':
                return this.setState({
                    showCalendar: "inline-block"
                })
            case 'inline-block':
                return this.setState({
                    showCalendar: "none"
                })

            default:
                return this.setState({
                    showCalendar: "none"
                })
        }

    }


    render() {

        const { year
            , month
            , date
            , day
            , dates
            , selectedDate
            , numberOfWeekLines
            , showCalendar } = this.state;
        const { onChange } = this.props;

        return (
            <div className='calendar-main'>
                <div className='calendar-selectedDate'>
                    <input
                        type='text'
                        value={selectedDate.year.toString() + "-" + (selectedDate.month + 1).toString() + "-" + selectedDate.date.toString()}
                        onClick={this.onSelectDateClick}
                        onChange={onChange}
                    />
                </div>
                <div style={{ display: showCalendar }} className='calendar'>
                    <div className='calendar-head'>

                        <Year classname='btn-cal-year' onChange={this.onYearChange} years={this.years} currentYear={year} />
                        <Month classname='btn-cal-month' onChange={this.onMonthChange} currentMonth={month} />
                        <button className='btn-cal-prev' onClick={this.onBackwardOneMonth}>Prev</button>
                        <button className='btn-cal-now' onClick={this.setCurrentDate}>Now</button>
                        <button className='btn-cal-next' onClick={this.onForwardOneMonth}>Next</button>
                    </div>
                    <div className='calendar-dayNames'>
                        {this.days.map((d, i) => {
                            return <DayButton name={d} value={i} />
                        })}
                    </div>
                    <div className='calendar-content'>
                        {dates.length === 0
                            ? <div></div>
                            : dates.map((wl, i) => {
                                return <div id={i}>{wl.map((d, i) => {
                                    return Object.keys(d).length === 0
                                        ? <DateButton />
                                        : <DateButton value={d.date}
                                            onClick={this.onDateClick}
                                        />
                                })}</div>
                            })}

                    </div>

                </div>
            </div>
        )
    }
}

Calendar.PropTypes = {
    onChange: PropTypes.func
}

export default Calendar
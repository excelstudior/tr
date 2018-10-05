import React, { Component } from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Menu = [{ 0: 'Overview' }, { 1: 'Users' }, { 2: 'Projects' }, { 3: 'Statistics' }]
const MenuItem = (props) => {
    return (
        <li onClick={props.onClick}
            key={props.value}
            className={props.style}
            value={props.value}
        ><Link to={`./${props.name}`}>{props.name}</Link></li>
    )
}

const Users = (props) => {
    return (
        <div>
            User
        </div>
    )
}

const Overview = (props) => {
    return (
        <div>
            Overview
        </div>
    )
}

const Projects = (props) => {
    return (
        <div>
            Overview
        </div>
    )
}


const Statistics = (props) => {
    return (
        <div>
            Statistics
        </div>
    )
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
        this.handleTabsChange = this.handleTabsChange.bind(this)
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate() {

    }

    handleTabsChange(e) {
        this.setState({
            selectedTab: e.target.value,
        })
    }
    render() {
        const { selectedTab } = this.state;
        return (
            <Router>
                <div className='dashboard'>
                    <div className='dashboard-tabs'>
                        <ul>
                            {Menu.map((mi, i) => {
                                return <MenuItem onClick={this.handleTabsChange} key={i} value={i} style={selectedTab === i ? 'dashboard-tabs-selected' : ''} name={mi[i]} />

                            })}

                        </ul>

                    </div>   
                    <Route path='/Overview' component={Overview} />
                    <Route path='/Users' component={Users} />
                    <Route path='/Projects' component={Projects} />
                    <Route path='/Statistics' component={Statistics} />
                </div>
            </Router>
        )
    }
}

Dashboard.PropTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
}

export default Dashboard
import React, { Component } from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const MenuItem=(props)=>{
    const isSelected=()=>{
        if (props.name===props.selected){
        return props.style
    } else {
        return {}
    }
}
    return(
        <button onClick={props.handleTabsChange} 
        name={props.name}
       
        
        >Overview</button>
    )
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'overview'
        }
        this.handleTabsChange=this.handleTabsChange.bind(this)
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentDidUpdate() {

    }

    handleTabsChange(e){
        this.setState({
            selectedTab:e.target.name,
        })
    }
    render() {
        const {selectedTab}=this.state;
        return (
    
                <div className='dashboard'>
                    <h2>Admin Dashboard</h2>
                    Today is {new Date().toLocaleDateString()} and logged on at {new Date().toLocaleTimeString()}
                    <div className='dashboard-tabs'>
                        <ul>
                            <li><button onClick={this.handleTabsChange} name='overview'>Overview</button></li>
                            <li><button onClick={this.handleTabsChange} name='users'>Users</button></li>
                            <li><button onClick={this.handleTabsChange} name='projects'>Projects</button></li>
                            <li><button onClick={this.handleTabsChange} name='statistics'>Statistics</button></li>
                        </ul>
                    </div>
                        {selectedTab}
                    <div>

                    </div>
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
import React, { Component } from 'react';
import './Customer.css'
import PropTypes from 'prop-types';
import NewCustomer from '../components/NewCustomer'
import {ADD,NEW,EDIT,CANCEL,NONE} from '../../CommonComponents/Constants'


class Customer extends Component {
    constructor(props) {
        super(props);
        this.handleModeChange=this.handleModeChange.bind(this)
    }

    componentDidMount() {

    }
    
    componentWillMount() {
        this.props.getCustomers()
    }

    componentDidUpdate() {

    }

    handleModeChange(e){
        this.props.changeMode(e.target.name)

    }
    render() {
        const {customers}=this.props

        return (
           // <Router>
                <div className='customer'>
                    <div className='menu-button'>
                        <button name={ADD} onClick={this.handleModeChange}>{NEW}</button>
                        <button name={EDIT} onClick={this.handleModeChange}>{EDIT}</button>
                        <button name={NONE} onClick={this.handleModeChange}>{CANCEL}</button>
                    </div>
                  {customers.loading?<p>Customer loading......</p>:
                    <table>
                        <thead>
                            <th>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Status</td>
                                </tr>
                            </th>
                        </thead>
                        <tbody>
                            {customers.customers.length>0
                                ?customers.customers.map((customer)=>{
                                      return  <tr>
                                            <td>{customer.name}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.isActive}</td>
                                        </tr>
                                })
                            :<tr>No Customer created</tr>}
                        </tbody>
                    </table>  
                }
                {customers.mode===ADD?<NewCustomer
                                        mode={customers.mode}
                                        changeMode={this.handleModeChange}/>:<br></br>
                }
                    {/* <Route path='/dashboard/Statistics' component={Statistics} /> */}
                </div>
           // </Router>
        )
    }
}

Customer.PropTypes = {
    user:PropTypes.object,
    customers:PropTypes.object.isRequired,
    getCustomers:PropTypes.func.isRequired,
    changeMode:PropTypes.func.isRequired,
}

export default Customer
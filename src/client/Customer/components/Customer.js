import React, { Component } from 'react';
import './Customer.css'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class Customer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    
    componentWillMount() {
        this.props.getCustomers()
    }

    componentDidUpdate() {

    }

    render() {
        const {customers}=this.props

        return (
           // <Router>
                <div className='customer'>
                  {customers.loading?<p>Customer loading......</p>:
                    <table>
                        <thead>
                            <th>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                </tr>
                            </th>
                        </thead>
                        <tbody>
                            {customers.customers.length>0
                                ?customers.customers.map((customer)=>{
                                      return  <tr>
                                            <td>{customer.name}</td>
                                            <td>{customer.email}</td>
                                        </tr>
                                })
                            :<tr>No Customer created</tr>}
                        </tbody>
                    </table>  
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
}

export default Customer
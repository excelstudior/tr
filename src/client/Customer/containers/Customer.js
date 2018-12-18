import { connect } from 'react-redux';
import Customer from '../components/Customer';
import {getCustomers,changeMode,addCustomer,clearValidationErrors} from '../actions/index'
import { withRouter } from 'react-router-dom';
import {NONE} from '../../CommonComponents/Constants'
const mapStateToProps = (state, ownProps) => ({
    //validationErrors:state.validationErrors,
    user: state.user,
    customers:state.customers
    //users: state.users,
})
const mapDispatchToProps = (dispatch) => ({
    // addUser: (user, history) => {
    //     dispatch(addUser(user, history));
    // },
    getCustomers: () => dispatch(getCustomers()),
    changeMode: (mode) => { 
        dispatch(changeMode(mode));
        dispatch(clearValidationErrors());
        if(mode===NONE){
            dispatch(getCustomers());
        } 
    },
    addCustomer: (customer, history) => {
        dispatch(addCustomer(customer, history));
    },
})

//export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customer))
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Customer))
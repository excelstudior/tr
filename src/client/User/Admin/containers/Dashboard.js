import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import {getUsers} from '../actions/index'

import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
    //validationErrors:state.validationErrors,
    user:state.user,
    users:state.users,
 })
 const mapDispatchToProps = (dispatch) => ({
    //getUsers:(user,history)=>dispatch(getUsers(user,history))
    getUsers:()=>dispatch(getUsers())
 })

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dashboard))
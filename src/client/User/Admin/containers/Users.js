import { connect } from 'react-redux';
import Users from '../components/Users';
import {getUsers} from '../actions/index'
import {addUser,changeMode} from '../../Admin/actions/index'

import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
    //validationErrors:state.validationErrors,
    user:state.user,
    users:state.users,
 })
 const mapDispatchToProps = (dispatch) => ({
    addUser:(user,history)=>dispatch(addUser(user,history)),
    getUsers:()=>dispatch(getUsers()),
    changeMode:(mode)=>dispatch(changeMode(mode)),
 })

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Users))
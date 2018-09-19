import { connect } from 'react-redux';
import SignIn from '../../components/Authorization/SignIn';
import {signInUser,clearValidationErrors} from '../../actions/index'
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
    validationErrors:state.validationErrors,
    user:state.user
 })
 const mapDispatchToProps = (dispatch) => ({
    signInUser:(user,history)=>dispatch(signInUser(user,history)),
    clearValidationErrors:()=>dispatch(clearValidationErrors())
 })

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignIn))
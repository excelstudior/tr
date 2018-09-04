import { connect } from 'react-redux';
import SignIn from '../../components/Authorization/SignIn';
import {signInUser} from '../../actions/index'
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
    validationErrors:state.validationErrors
 })
 const mapDispatchToProps = (dispatch) => ({
    signInUser:(user,history)=>dispatch(signInUser(user,history))
 })

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignIn))
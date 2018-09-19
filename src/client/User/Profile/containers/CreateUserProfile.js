import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateUserProfile from '../components/CreateUserProfile';
import {createUserProfile} from '../actions/index'
import {clearValidationErrors} from '../../../Layout/actions/index'
const mapStateToProps = (state,ownProps) => ({
    user:state.user,
    errors:state.validationErrors,
 })
 const mapDispatchToProps = (dispatch) => ({
    createUserProfile:(profile,history)=>dispatch(createUserProfile(profile,history)),
    clearValidationErrors:()=>dispatch(clearValidationErrors())
 })
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(CreateUserProfile))
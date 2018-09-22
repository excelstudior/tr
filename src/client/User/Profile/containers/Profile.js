import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '../components/Profile';
import {createUserProfile} from '../actions'
import {clearValidationErrors} from '../../../Layout/actions';
const mapStateToProps = (state,ownProps) => ({
    profile:state.userProfile.profile,
    user:state.user,
    errors:state.validationErrors,
 })
 const mapDispatchToProps = (dispatch) => ({
    createUserProfile:(profile,history)=>dispatch(createUserProfile(profile,history)),
    clearValidationErrors:()=>dispatch(clearValidationErrors())
 })
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Profile))
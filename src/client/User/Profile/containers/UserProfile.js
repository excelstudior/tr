import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
const mapStateToProps = (state,ownProps) => ({
    profile:state.userProfile.profile,
    user:state.user,
 })
//  const mapDispatchToProps = (dispatch) => ({
//     signOutUser:(history)=>dispatch(signOutUser(history))
//  })
export default connect(mapStateToProps)(withRouter(UserProfile))
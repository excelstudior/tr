import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateUserProfile from '../components/CreateUserProfile';
const mapStateToProps = (state,ownProps) => ({
    user:state.user,
 })
//  const mapDispatchToProps = (dispatch) => ({
//     signOutUser:(history)=>dispatch(signOutUser(history))
//  })
export default connect(mapStateToProps)(withRouter(CreateUserProfile))
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import {signOutUser} from '../actions/index';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
    user:state.user
 })
 const mapDispatchToProps = (dispatch) => ({
    signOutUser:(history)=>dispatch(signOutUser(history))
 })
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Navbar))
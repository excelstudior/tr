import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
const mapStateToProps = (state,ownProps) => ({
    user:state.user
 })
//  const mapDispatchToProps = (dispatch) => ({
//     signInUser:(user,history)=>dispatch(signInUser(user,history))
//  })
export default connect(mapStateToProps,)(Navbar)
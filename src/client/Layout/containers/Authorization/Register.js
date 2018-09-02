import { connect } from 'react-redux';
import {registerUser} from '../../actions/index'
import Register from '../../components/Authorization/Register';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
   user:state.user
})
const mapDispatchToProps = (dispatch) => ({
    registerUser:(user,history)=>dispatch(registerUser(user,history))
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Register))
import { connect } from 'react-redux';
import {registerUser} from '../../actions/index'
import Register from '../../components/Authorization/Register';
import { withRouter } from 'react-router-dom';
const mapStateToProps = state => ({
   user:state.user
})
const mapDispatchToProps = (dispatch) => ({
    registerUser:(user)=>dispatch(registerUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Register))
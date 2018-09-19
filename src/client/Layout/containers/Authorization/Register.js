import { connect } from 'react-redux';
import {registerUser,clearValidationErrors} from '../../actions/index'
import Register from '../../components/Authorization/Register';
import { withRouter } from 'react-router-dom';
const mapStateToProps = (state,ownProps) => ({
   validationErrors:state.validationErrors
})
const mapDispatchToProps = (dispatch) => ({
    registerUser:(user,history)=>dispatch(registerUser(user,history)),
    clearValidationErrors:()=>dispatch(clearValidationErrors())
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Register))
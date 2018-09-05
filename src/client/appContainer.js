import { connect } from 'react-redux';
import {
    Route,Router,withRouter
} from 'react-router-dom';
import {setCurrentUser} from './Layout/actions/index'
import App from './app'


const mapStateToProps = (state,ownProps) => ({
    validationErrors:state.validationErrors,
    user:state.user
 })
 const mapDispatchToProps = (dispatch) => ({
    setCurrentUser:(user)=>dispatch(setCurrentUser(user))
 })

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App))
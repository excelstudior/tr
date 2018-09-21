import { connect } from 'react-redux';
import {
    Route,Router,withRouter
} from 'react-router-dom';
import {setCurrentUser} from './Layout/actions/index'
import {getCurrentProfile} from '../client/User/Profile/actions/index';
import App from './app'


const mapStateToProps = (state,ownProps) => ({
    validationErrors:state.validationErrors,
    user:state.user
 })
 const mapDispatchToProps = (dispatch) => ({
     loadUserContent:(user)=>{
        dispatch(setCurrentUser(user));
        dispatch(getCurrentProfile())
     }
    // setCurrentUser:(user)=>dispatch(setCurrentUser(user)),
    // getCurrentProfile:()=>dispatch(getCurrentProfile())
 })

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App))
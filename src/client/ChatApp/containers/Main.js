import { connect } from 'react-redux';
import Main from '../components/Main';
import _ from 'lodash';
//import {setActiveUserId} from '../actions/index'

const mapStateToProps = state => ({
    user: state.user,
    activeUserId:state.activeUserId,
    contact:state.contacts[state.activeUserId],
    messages:_.values(state.messages[state.activeUserId])
})
const mapDispatchToProps = dispatch => ({
    setActiveUserId:(user_id)=>dispatch(setActiveUserId(user_id)),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
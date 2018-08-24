import { connect } from 'react-redux';
import Main from '../components/Main';
import _ from 'lodash';
import {setActiveUserId,setMessageInput,createMessage} from '../actions/index'

const mapStateToProps = state => ({
    user: state.user,
    activeUserId:state.activeUserId,
    contact:state.contacts[state.activeUserId],
    messages:_.values(state.messages[state.activeUserId]),
    messageInput:state.messageInput
})
const mapDispatchToProps = dispatch => ({
    setActiveUserId:(user_id)=>dispatch(setActiveUserId(user_id)),
    setMessageInput:(messageInput)=>dispatch(setMessageInput(messageInput)),
    createMessage:(activeUserId,is_user_msg,messageInput)=>dispatch(createMessage(activeUserId,is_user_msg,messageInput))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import _ from 'lodash';
import {setActiveUserId} from '../actions/index'

const mapStateToProps = state => ({
    contacts: _.values(state.contacts)
})
const mapDispatchToProps = dispatch => ({
    setActiveUserId:(user_id)=>dispatch(setActiveUserId(user_id)),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBar)
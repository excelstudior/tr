import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

import { withRouter } from 'react-router-dom';
// const mapStateToProps = (state,ownProps) => ({
//     validationErrors:state.validationErrors,
//     user:state.user
//  })
//  const mapDispatchToProps = (dispatch) => ({
//     signInUser:(user,history)=>dispatch(signInUser(user,history))
//  })

export default connect()(withRouter(Dashboard))
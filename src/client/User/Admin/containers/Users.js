import { connect } from 'react-redux';
import Users from '../components/Users';
import { getUsers } from '../actions/index'
import { addUser, changeMode, saveUser } from '../../Admin/actions/index'
import { ADD,NONE } from '../../../CommonComponents/Constants';

import { withRouter } from 'react-router-dom';
const mapStateToProps = (state, ownProps) => ({
    //validationErrors:state.validationErrors,
    user: state.user,
    users: state.users,
})
const mapDispatchToProps = (dispatch) => ({
    addUser: (user, history) => {
        dispatch(addUser(user, history));
    },
    getUsers: () => dispatch(getUsers()),
    changeMode: (mode) => { 
        dispatch(changeMode(mode));
        if(mode===NONE){
            dispatch(getUsers());
        } 
    },
    saveUser: (user, history) => {
        dispatch(saveUser(user, history));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Users))
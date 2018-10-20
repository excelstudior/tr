
import {
    SET_USERS
    , LOADING_USERS
    , CHANGE_MODE
    , GET_VALIDATION_ERRORS
    , CLEAR_VALIDATION_ERROR
    , UPDATE_USERS
} from '../actions/constants';
import { NONE } from '../../../CommonComponents/Constants';
const initialState = {
    users: [],
    loading: false,
    mode: NONE,
    errors: {},
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.users, loading: false }
        case LOADING_USERS:
            return { ...state, loading: true }
        case CHANGE_MODE:
            return { ...state, mode: action.mode, errors: {} }
        case GET_VALIDATION_ERRORS:
            return { ...state, errors: action.errors }
        case CLEAR_VALIDATION_ERROR:
            return { ...state, errors: {} }
        case UPDATE_USERS: {
            if (Array.isArray(action.users)) {
                return { ...state }
            } else {
                let users = state.users.map((user) => {
                    if (user._id !== action.users._id) {
                        return user;
                    } else { return action.users }
                })
                return { ...state, users: users }
            }
        }
        default:
            return state;
    }
}

export default users
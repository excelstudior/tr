import {
    GET_REGISTER_USER_VALIDATION_ERRORS,
    CLEAR_VALIDATION_ERROR,
} from '../actions/constants'
import {
    GET_PROFILE_VALIDATION_ERRORS
} from '../../User/Profile/actions/constants'

const validationErrors = (state = {}, action) => {
    switch (action.type) {
        case GET_REGISTER_USER_VALIDATION_ERRORS:
            console.log(action.errors)
            return action.errors;
        case CLEAR_VALIDATION_ERROR:
            return {}
        case GET_PROFILE_VALIDATION_ERRORS:
        return action.errors;
        default:
            return state;
    }
}

export default validationErrors
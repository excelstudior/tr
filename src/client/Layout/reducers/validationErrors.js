import {
    GET_REGISTER_USER_VALIDATION_ERRORS,
    CLEAR_VALIDATION_ERROR
} from '../actions/constants'

const validationErrors = (state = {}, action) => {
    switch (action.type) {
        case GET_REGISTER_USER_VALIDATION_ERRORS:
            console.log(action.errors)
            return action.errors;
        case CLEAR_VALIDATION_ERROR:
            return {}
        default:
            return state;
    }
}

export default validationErrors
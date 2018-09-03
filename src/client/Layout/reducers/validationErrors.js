import { GET_REGISTER_USER_VALIDATION_ERRORS } from '../actions/constants'

const validationErrors = (state = {}, action) => {
    switch (action.type) {
        case GET_REGISTER_USER_VALIDATION_ERRORS:
            console.log(action.errors)
            return action.errors;
        default:
        return state;
    }
}

export default validationErrors
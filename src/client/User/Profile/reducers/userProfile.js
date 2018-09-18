import {
    GET_PROFILE,
    PROFILE_LOADING,
    CLEAR_CURRENT_PROFILE,
    GET_PROFILE_VALIDATION_ERRORS
} from '../actions/constants';
const initialState = {
    profile: {},
    profiles: [],
    loading: false
}

const userProfile = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PROFILE:
            // console.log(action.payload)
            return {
                ...state,
                profile: action.payload,
                loading: false
            }
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: {},
                profiles: {},
                loading: false
            }
        default:
            return state
    }

}
export default userProfile
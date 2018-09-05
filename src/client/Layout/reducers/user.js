import { SET_CURRENT_USER } from '../actions/constants';

export const user = (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            console.log(action.decodedToken)
            if (action.decodedToken !== undefined && action.decodedToken !== null) {
                return action.decodedToken;
            } else { return state }

        default:
            return state;
    }

}

export default user


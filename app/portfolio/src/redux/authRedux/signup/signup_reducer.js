import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from "./signup_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}
export default signupReducer
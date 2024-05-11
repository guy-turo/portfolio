import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "./login_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}
export default loginReducer
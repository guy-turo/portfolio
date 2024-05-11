import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from "./logout_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const logoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case LOGOUT_FAILURE:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}
export default logoutReducer
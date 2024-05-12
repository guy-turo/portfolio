import {
    ADD_SOCIAL_REQUEST,
    ADD_SOCIAL_SUCCESS,
    ADD_SOCIAL_FAILURE,

    FETCH_SOCIAL_SUCCESS,
    FETCH_SOCIAL_REQUEST,
    FETCH_SOCIAL_FAILURE,

    UPDATE_SOCIAL_REQUEST,
    UPDATE_SOCIAL_SUCCESS,
    UPDATE_SOCIAL_FAILURE
} from "./social_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const socialReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SOCIAL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_SOCIAL_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_SOCIAL_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case FETCH_SOCIAL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SOCIAL_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_SOCIAL_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_SOCIAL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_SOCIAL_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_SOCIAL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default socialReducer
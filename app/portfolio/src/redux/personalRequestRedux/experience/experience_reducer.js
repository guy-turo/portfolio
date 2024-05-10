import {
    ADD_EXPERIENCE_REQUEST,
    ADD_EXPERIENCE_SUCCESS,
    ADD_EXPERIENCE_FAILURE,

    FETCH_EXPERIENCE_SUCCESS,
    FETCH_EXPERIENCE_REQUEST,
    FETCH_EXPERIENCE_FAILURE,

    UPDATE_EXPERIENCE_REQUEST,
    UPDATE_EXPERIENCE_SUCCESS,
    UPDATE_EXPERIENCE_FAILURE
} from "./experience_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPERIENCE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_EXPERIENCE_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_EXPERIENCE_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case FETCH_EXPERIENCE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_EXPERIENCE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_EXPERIENCE_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_EXPERIENCE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_EXPERIENCE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_EXPERIENCE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default experienceReducer
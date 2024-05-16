import {
    ADD_TESTIMONIALS_REQUEST,
    ADD_TESTIMONIALS_SUCCESS,
    ADD_TESTIMONIALS_FAILURE,

    FETCH_TESTIMONIALS_SUCCESS,
    FETCH_TESTIMONIALS_REQUEST,
    FETCH_TESTIMONIALS_FAILURE,

    UPDATE_TESTIMONIALS_REQUEST,
    UPDATE_TESTIMONIALS_SUCCESS,
    UPDATE_TESTIMONIALS_FAILURE
} from "./testimonials_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const testimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TESTIMONIALS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case ADD_TESTIMONIALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case FETCH_TESTIMONIALS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCH_TESTIMONIALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case UPDATE_TESTIMONIALS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case UPDATE_TESTIMONIALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default testimonialsReducer
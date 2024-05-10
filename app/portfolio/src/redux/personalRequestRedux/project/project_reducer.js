import {
    ADD_PROJECT_REQUEST,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILURE,

    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_REQUEST,
    FETCH_PROJECT_FAILURE,

    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE,

    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILURE
} from "./project_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_PROJECT_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case FETCH_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_PROJECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PROJECT_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_PROJECT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default projectReducer
import {
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAILURE,

    FETCH_SERVICE_SUCCESS,
    FETCH_SERVICE_REQUEST,
    FETCH_SERVICE_FAILURE,

    UPDATE_SERVICE_REQUEST,
    UPDATE_SERVICE_SUCCESS,
    UPDATE_SERVICE_FAILURE
} from "./service_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_SERVICE_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_SERVICE_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case FETCH_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_SERVICE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_SERVICE_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_SERVICE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_SERVICE_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_SERVICE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default serviceReducer
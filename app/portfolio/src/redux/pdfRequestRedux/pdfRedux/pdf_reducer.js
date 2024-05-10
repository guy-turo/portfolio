import {
    ADD_PDF_REQUEST,
    ADD_PDF_SUCCESS,
    ADD_PDF_FAILURE,

    FETCH_PDF_SUCCESS,
    FETCH_PDF_REQUEST,
    FETCH_PDF_FAILURE,

    UPDATE_PDF_REQUEST,
    UPDATE_PDF_SUCCESS,
    UPDATE_PDF_FAILURE
} from "./pdf_action_types"

const initialState = {
    loading: false,
    data: [],
    error: ""
}
const pdfReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PDF_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ADD_PDF_SUCCESS:
            return {
                ...state,
                data: action.payload,
            }
        case ADD_PDF_FAILURE:
            return {
                ...state,
                error: action.payload,
            }

        case FETCH_PDF_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PDF_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_PDF_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_PDF_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PDF_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_PDF_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default pdfReducer
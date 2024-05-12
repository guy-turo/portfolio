import {
    ADD_PDF_REQUEST,
    ADD_PDF_SUCCESS,
    ADD_PDF_FAILURE,

    FETCH_PDF_SUCCESS,
    FETCH_PDF_REQUEST,
    FETCH_PDF_FAILURE,

    DELETE_PDF_REQUEST,
    DELETE_PDF_SUCCESS,
    DELETE_PDF_FAILURE,

    UPDATE_PDF_REQUEST,
    UPDATE_PDF_SUCCESS,
    UPDATE_PDF_FAILURE
} from "./pdf_action_types"

import api from "../../../utils/Helper"

//ADD Me
export const addPdfRequest = () => {
    return {
        type: ADD_PDF_REQUEST,
    }
}
export const addPdfSuccess = (me) => {
    return {
        type: ADD_PDF_SUCCESS,
        payload: me
    }
}
export const addPdfFailure = (error) => {
    return {
        type: ADD_PDF_FAILURE,
        payload: error
    }
}
export const addPdf = (pdfData) => {
    const URI = "/pdf/upload"
    return (dispatch) => {
        dispatch(addPdfRequest)
        const formData = new FormData()
        formData.append('file', pdfData)
        api.post(URI, formData)
            .then(response => {
                if (response.status === 200) {
                    dispatch(addPdfSuccess(response.data))
                }
            }).catch(error => {
                dispatch(addPdfFailure(error.message))
            })
    }
}

//Fetch Me
export const fetchPdfRequest = () => {
    return {
        this: FETCH_PDF_REQUEST
    }
}
export const fetchPdfSuccess = (data) => {
    return {
        this: FETCH_PDF_SUCCESS,
        payload: data
    }
}
export const fetchPdfFailure = (error) => {
    return {
        this: FETCH_PDF_FAILURE,
        payload: error
    }
}
export const fetchMe = () => {
    const URI = "/pdf"
    return (dispatch) => {
        dispatch(fetchPdfRequest)

        api.get(URI)
            .then(response => {
                if (response.status === 200) {
                    dispatch(fetchPdfSuccess(response.data[0]))
                }
            })
            .catch(error => dispatch(fetchPdfFailure(error.message)))
    }
}

//delete Me

export const deletePdfRequest = () => {
    return {
        this: DELETE_PDF_REQUEST
    }
}
export const deletePdfSuccess = (data) => {
    return {
        this: DELETE_PDF_SUCCESS,
        payload: data
    }
}
export const deletePdfFailure = (error) => {
    return {
        this: DELETE_PDF_FAILURE,
        payload: error
    }
}
export const deletePdf = (id) => {
        const URI = `/pdf/${id}`
        return (dispatch) => {
            dispatch(deletePdfRequest)
            api.delete(URI)
                .then(response => dispatch(deletePdfSuccess(response.data)))
                .catch(error => dispatch(deletePdfFailure(error.message)))
        }
    }
    //update Me
export const updatePdfRequest = () => {
    return {
        this: UPDATE_PDF_REQUEST
    }
}
export const updatePdfSuccess = (data) => {
    return {
        this: UPDATE_PDF_SUCCESS,
        payload: data
    }
}
export const updatePdfFailure = (error) => {
    return {
        this: UPDATE_PDF_FAILURE,
        payload: error
    }
}
export const updatePdf = (id, pdfData) => {
    const URI = `/pdf/${id}`
    return (dispatch) => {
        dispatch(updatePdfRequest)
        const formData = new FormData()
        formData.append('file', pdfData)
        api.put(URI, formData)
            .then(response => {
                if (response) {
                    dispatch(updatePdfSuccess(response.data))
                }
            })
            .catch(error => {
                if (error.message) {
                    dispatch(updatePdfFailure(error.message))
                }
            })
    }

}
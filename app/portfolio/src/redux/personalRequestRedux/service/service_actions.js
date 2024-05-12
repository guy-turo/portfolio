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

import api from "../../../utils/Helper"

//ADD Me
export const addServiceRequest = () => {
    return {
        type: ADD_SERVICE_REQUEST,
    }
}
export const addServiceSuccess = (data) => {
    return {
        type: ADD_SERVICE_SUCCESS,
        payload: data
    }
}
export const addServiceFailure = (error) => {
    return {
        type: ADD_SERVICE_FAILURE,
        payload: error
    }
}
export const addService = (userExp, frontend, backend, other) => {
    const URI = "/me/services"
    return (dispatch) => {
        dispatch(addServiceRequest)
        api.post(URI, {
                userExp: userExp,
                frontend: frontend,
                backend: backend,
                other: other
            })
            .then((response) => {
                dispatch(addServiceSuccess(response.data))
            })
            .catch(error => dispatch(addServiceFailure(error.message)))
    }
}

//Fetch Me
export const fetchServiceRequest = () => {
    return {
        type: FETCH_SERVICE_REQUEST
    }
}
export const fetchServiceSuccess = (data) => {
    return {
        type: FETCH_SERVICE_SUCCESS,
        payload: data
    }
}
export const fetchServiceFailure = (error) => {
    return {
        type: FETCH_SERVICE_FAILURE,
        payload: error
    }
}
export const fetchService = () => {
    const URI = "/me/services"
    return (dispatch) => {
        dispatch(fetchServiceRequest)
        api.get(URI)
            .then(response => {
                const data = response.data
                dispatch(fetchServiceSuccess(data))
            })
            .catch((error) => {
                dispatch(fetchServiceFailure(error.message))
            })
    }
}


//update Me
export const updateServiceRequest = () => {
    return {
        type: UPDATE_SERVICE_REQUEST
    }
}
export const updateServiceSuccess = (me) => {
    return {
        type: UPDATE_SERVICE_SUCCESS,
        payload: me
    }
}
export const updateServiceFailure = (error) => {
    return {
        type: UPDATE_SERVICE_FAILURE,
        payload: error
    }
}
export const updateService = (id, text, el) => {
    const URI = `/me/services/${id}`
    return (dispatch) => {
        dispatch(updateServiceRequest)
        api.put(URI, {
                text: text,
                el: el
            })
            .then((response) => {
                if (response) {
                    dispatch(updateServiceSuccess(response.data))
                }
            })
            .catch((error) => {
                if (error.response) {

                    updateServiceFailure(error.response.data)
                } else if (error.request) {
                    updateServiceFailure(error.request)
                } else {
                    updateServiceFailure(error.message)
                }
            })
    }

}
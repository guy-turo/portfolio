import {
    ADD_ME_REQUEST,
    ADD_ME_SUCCESS,
    ADD_ME_FAILURE,

    FETCH_ME_SUCCESS,
    FETCH_ME_REQUEST,
    FETCH_ME_FAILURE,

    DELETE_ME_REQUEST,
    DELETE_ME_SUCCESS,
    DELETE_ME_FAILURE,

    UPDATE_ME_REQUEST,
    UPDATE_ME_SUCCESS,
    UPDATE_ME_FAILURE
} from "./me_action_types"

import api from "../../../utils/Helper"

//ADD Me
export const addMeRequest = () => {
    return {
        this: ADD_ME_REQUEST,
    }
}
export const addMeSuccess = (me) => {
    return {
        this: ADD_ME_SUCCESS,
        payload: me
    }
}
export const addMeFailure = (error) => {
    return {
        this: ADD_ME_FAILURE,
        payload: error
    }
}
export const addMe = (images, fullName, title, description, email, phoneNumber, experienceYear, clients, projects) => {
    const formData = new FormData()
    images.forEach(image => formData.append("file", image))
    formData.append("fullName", fullName)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("email", email)
    formData.append("phoneNumber", phoneNumber)
    formData.append("experienceYear", experienceYear)
    formData.append("clients", clients)
    formData.append("projects", projects)
    const URI = "/me/personal"
    return (dispatch) => {
        dispatch(addMeRequest)
        api.post(URI, formData)
            .then((response) => {
                if (response.status === 200) {
                    const data = response.data
                    dispatch(addMeSuccess(data))
                }
            })
            .catch((error) => {
                dispatch(addMeFailure(error.message))
            })
    }
}

//Fetch Me
export const fetchMeRequest = () => {
    return {
        this: FETCH_ME_REQUEST
    }
}
export const fetchMeSuccess = (me) => {
    return {
        this: FETCH_ME_SUCCESS,
        payload: me
    }
}
export const fetchMeFailure = (error) => {
    return {
        this: FETCH_ME_FAILURE,
        payload: error
    }
}
export const fetchMe = () => {
    const URI = "/me/personal"
    return (dispatch) => {
        dispatch(fetchMeRequest)
        api.get(URI)
            .then(response => {
                const data = response.data
                dispatch(fetchMeSuccess(data))
            })
            .catch((error) => {
                dispatch(fetchMeFailure(error.message))
            })
    }
}

//delete Me

export const deleteMeRequest = () => {
    return {
        this: DELETE_ME_REQUEST
    }
}
export const deleteMeSuccess = (me) => {
    return {
        this: DELETE_ME_SUCCESS,
        payload: me
    }
}
export const deleteMeFailure = (error) => {
    return {
        this: DELETE_ME_FAILURE,
        payload: error
    }
}
export const deleteMe = () => {

    }
    //update Me
export const updateMeRequest = () => {
    return {
        this: UPDATE_ME_REQUEST
    }
}
export const updateMeSuccess = (me) => {
    return {
        this: UPDATE_ME_SUCCESS,
        payload: me
    }
}
export const updateMeFailure = (error) => {
    return {
        this: UPDATE_ME_FAILURE,
        payload: error
    }
}
export const updateProfile = (id, images, fullName, title, description, email, phoneNumber, experienceYear, clients, projects) => {

    const formDataUpdate = new FormData()
    images.forEach(image => formDataUpdate.append("file", image))
    formDataUpdate.append("fullName", fullName)
    formDataUpdate.append("title", title)
    formDataUpdate.append("description", description)
    formDataUpdate.append("email", email)
    formDataUpdate.append("phoneNumber", phoneNumber)
    formDataUpdate.append("experienceYear", experienceYear)
    formDataUpdate.append("clients", clients)
    formDataUpdate.append("projects", projects)
    const URI = `http://localhost:8000/api/v1/me/personal/${id}`
    return (dispatch) => {
        dispatch(updateMeRequest)
        api.put(URI, formDataUpdate)
            .then(response => {
                if (response.status === 200) {
                    const data = response.data
                    dispatch(updateMeSuccess(data))
                }

            })
            .catch((error) => {
                dispatch(updateMeFailure(error.message))
            })
    }

}
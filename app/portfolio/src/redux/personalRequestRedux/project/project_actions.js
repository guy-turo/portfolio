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

import api from "../../../utils/Helper"

//ADD Me
export const addProjectRequest = () => {
    return {
        this: ADD_PROJECT_REQUEST,
    }
}
export const addProjectSuccess = (data) => {
    return {
        this: ADD_PROJECT_SUCCESS,
        payload: data
    }
}
export const addProjectFailure = (error) => {
    return {
        this: ADD_PROJECT_FAILURE,
        payload: error
    }
}
export const addProject = (images, title, description, linkGithub, linkLive) => {
    const formData = new FormData()
    if (!images) {
        alert('Invalid image')
    }
    images.forEach((image) => formData.append("file", image))
    formData.append("title", title)
    formData.append("description", description)
    formData.append("linkGithub", linkGithub)
    formData.append("linkLive", linkLive)
    const URI = "/me/projects"
    return (dispatch) => {
        dispatch(addProjectRequest)
        api.post(URI, formData)
            .then((response) => {
                dispatch(addProjectSuccess(response.data))
            })
            .catch(error => dispatch(addProjectFailure(error.message)))
    }
}

//Fetch Me
export const fetchProjectRequest = () => {
    return {
        this: FETCH_PROJECT_REQUEST
    }
}
export const fetchProjectSuccess = (data) => {
    return {
        this: FETCH_PROJECT_SUCCESS,
        payload: data
    }
}
export const fetchProjectFailure = (error) => {
    return {
        this: FETCH_PROJECT_FAILURE,
        payload: error
    }
}
export const fetchProject = () => {
    const URI = "/me/projects"
    return (dispatch) => {
        dispatch(fetchProjectRequest)
        api.get(URI)
            .then((response) => {
                dispatch(fetchProjectSuccess(response.data))
            })
            .catch(error =>
                dispatch(fetchProjectFailure(error.message))
            )
    }
}

//delete Me
export const deleteProjectRequest = () => {
    return {
        this: DELETE_PROJECT_REQUEST
    }
}
export const deleteProjectSuccess = (data) => {
    return {
        this: DELETE_PROJECT_SUCCESS,
        payload: data
    }
}
export const deleteProjectFailure = (error) => {
    return {
        this: DELETE_PROJECT_FAILURE,
        payload: error
    }
}
export const deleteMe = (id) => {
        const URI = `/me/projects/${id}`
        return (dispatch) => {
            dispatch(deleteProjectRequest)
            api.delete(URI)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(deleteProjectSuccess(response.data))
                    }
                })
                .catch((error) => {
                    dispatch(deleteProjectFailure(error.message))
                })
        }
    }
    //update Me
export const updateProjectRequest = () => {
    return {
        this: UPDATE_PROJECT_REQUEST
    }
}
export const updateProjectSuccess = (data) => {
    return {
        this: UPDATE_PROJECT_SUCCESS,
        payload: data
    }
}
export const updateProjectFailure = (error) => {
    return {
        this: UPDATE_PROJECT_FAILURE,
        payload: error
    }
}
export const updateProfile = (id, images, title, description, linkLive, linkGithub) => {
    const URI = `/me/projects/${id}`
    const formData = new FormData()
    images.forEach(data => formData.append('file', data))
    formData.append("title", title)
    formData.append("description", description)
    formData.append("linkLive", linkLive)
    formData.append("linkGithub", linkGithub)
    return (dispatch) => {
        dispatch(updateProjectRequest)

        api.put(URI, formData)
            .then((response) => {
                if (response) {
                    dispatch(updateProjectSuccess(response.data))
                }
            })
            .catch((error) => {
                if (error.response) {
                    updateProjectFailure(error.response.data)
                } else if (error.request) {
                    updateProjectFailure(error.request)
                } else {
                    updateProjectFailure("Error message" + error.message)
                }
            })
    }

}
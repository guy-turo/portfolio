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

import api from "../../../utils/Helper"

//ADD Me
export const addExperienceRequest = () => {
    return {
        type: ADD_EXPERIENCE_REQUEST,
    }
}
export const addExperienceSuccess = (data) => {
    return {
        type: ADD_EXPERIENCE_SUCCESS,
        payload: data
    }
}
export const addExperienceFailure = (error) => {
    return {
        type: ADD_EXPERIENCE_FAILURE,
        payload: error
    }
}
export const addExperience = (frontend, backend, other) => {
    return (dispatch) => {
        dispatch(addExperienceRequest)
        const URI = "/me/experiences"
        api.post(URI, {
                frontend: frontend,
                backend: backend,
                other: other
            })
            .then((response) => {
                dispatch(addExperienceSuccess(response.data))
            })
            .catch(error => dispatch(addExperienceFailure(error.message)))
    }
}

//Fetch Me
export const fetchExperienceRequest = () => {
    return {
        type: FETCH_EXPERIENCE_REQUEST
    }
}
export const fetchExperienceSuccess = (data) => {
    return {
        type: FETCH_EXPERIENCE_SUCCESS,
        payload: data
    }
}
export const fetchExperienceFailure = (error) => {
    return {
        type: FETCH_EXPERIENCE_FAILURE,
        payload: error
    }
}
export const fetchExperience = () => {
        const URI = `/me/experiences`
        return (dispatch) => {
            dispatch(fetchExperienceRequest)
            api.get(URI)
                .then((response) => {
                    dispatch(fetchExperienceSuccess(response.data))
                })
                .catch((error) => {
                    dispatch(fetchExperienceFailure(error.message))
                })

        }
    }
    //update Me
export const updateExperienceRequest = () => {
    return {
        type: UPDATE_EXPERIENCE_REQUEST
    }
}
export const updateExperienceSuccess = (me) => {
    return {
        type: UPDATE_EXPERIENCE_SUCCESS,
        payload: me
    }
}
export const updateExperienceFailure = (error) => {
    return {
        type: UPDATE_EXPERIENCE_FAILURE,
        payload: error
    }
}
export const updateProfile = (id, text, el) => {

    const URI = `/me/experiences/${id}`
    return (dispatch) => {
        dispatch(updateExperienceRequest)
        api.put(URI, {
            text: text,
            el: el
        }).then((response) => {
            dispatch(updateExperienceSuccess(response.data))
        }).catch((error) => {
            if (error.response) {
                // The server responded with a status code outside the 2xx range
                dispatch(updateExperienceFailure(error.response))
            } else if (error.request) {
                // The request was made but no response was received
                dispatch(updateExperienceFailure(error.request))
            } else {
                // Something happened in setting up the request that triggered an error
                dispatch(updateExperienceFailure("Error message" + error.message))
            }
        })
    }

}
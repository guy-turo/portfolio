import {
    ADD_SOCIAL_REQUEST,
    ADD_SOCIAL_SUCCESS,
    ADD_SOCIAL_FAILURE,

    FETCH_SOCIAL_SUCCESS,
    FETCH_SOCIAL_REQUEST,
    FETCH_SOCIAL_FAILURE,

    DELETE_SOCIAL_REQUEST,
    DELETE_SOCIAL_SUCCESS,
    DELETE_SOCIAL_FAILURE,

    UPDATE_SOCIAL_REQUEST,
    UPDATE_SOCIAL_SUCCESS,
    UPDATE_SOCIAL_FAILURE
} from "./social_action_types"

import api from "../../../utils/Helper"

//ADD Me
export const addSocialRequest = () => {
    return {
        this: ADD_SOCIAL_REQUEST,
    }
}
export const addSocialSuccess = (me) => {
    return {
        this: ADD_SOCIAL_SUCCESS,
        payload: me
    }
}
export const addSocialFailure = (error) => {
    return {
        this: ADD_SOCIAL_FAILURE,
        payload: error
    }
}
export const addSocial = (titleSC, linkSC) => {
    return (dispatch) => {
        dispatch(addSocialRequest)
        const URI = "/me/socials"
        api.post(URI, {
                title: titleSC,
                link: linkSC,
            })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(addSocialSuccess(response.data))
                }
            })
            .catch(error => dispatch(addSocialFailure(error.message)))
    }
}

//Fetch Me
export const fetchSocialRequest = () => {
    return {
        this: FETCH_SOCIAL_REQUEST
    }
}
export const fetchSocialSuccess = (data) => {
    return {
        this: FETCH_SOCIAL_SUCCESS,
        payload: data
    }
}
export const fetchSocialFailure = (error) => {
    return {
        this: FETCH_SOCIAL_FAILURE,
        payload: error
    }
}
export const fetchSocial = () => {
        const URI = "/me/socials"
        return (dispatch) => {
            dispatch(fetchSocialRequest)
            api.get(URI)
                .then(response => {
                    const data = response.data
                    dispatch(fetchSocialSuccess(data))
                })
                .catch((error) => {
                    dispatch(fetchSocialFailure(error.message))
                })
        }
    }
    //delete Me

export const deleteSocialRequest = () => {
    return {
        this: DELETE_SOCIAL_REQUEST
    }
}
export const deleteSocialSuccess = (data) => {
    return {
        this: DELETE_SOCIAL_SUCCESS,
        payload: data
    }
}
export const deleteSocialFailure = (error) => {
    return {
        this: DELETE_SOCIAL_FAILURE,
        payload: error
    }
}
export const deleteSocial = (id) => {
        const URI = `/me/socials/${id}`
        return (dispatch) => {
            dispatch(deleteSocialRequest)
            api.delete(URI)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(deleteSocialSuccess(response.data))
                    }
                })
                .catch(error => dispatch(deleteSocialFailure(error.message)))
        }
    }
    //update Me
export const updateSocialRequest = () => {
    return {
        this: UPDATE_SOCIAL_REQUEST
    }
}
export const updateSocialSuccess = (data) => {
    return {
        this: UPDATE_SOCIAL_SUCCESS,
        payload: data
    }
}
export const updateSocialFailure = (error) => {
    return {
        this: UPDATE_SOCIAL_FAILURE,
        payload: error
    }
}
export const updateProfile = (id, title, link) => {
    const URI = `/me/Socials/${id}`
    return (dispatch) => {
        dispatch(updateSocialRequest)
        api.put(URI, {
                title: title,
                link: link
            })
            .then((response) => {
                if (response) {
                    dispatch(updateSocialSuccess(response.data))
                }
            })
            .catch((error) => {
                if (error.response) {
                    dispatch(updateSocialFailure(error.response))
                } else if (error.request) {
                    dispatch(updateSocialFailure(error.request))
                } else {
                    dispatch(updateSocialFailure(error.message))
                }
            })
    }

}
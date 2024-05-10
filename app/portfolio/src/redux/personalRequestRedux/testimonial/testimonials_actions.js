import {
    ADD_TESTIMONIALS_REQUEST,
    ADD_TESTIMONIALS_SUCCESS,
    ADD_TESTIMONIALS_FAILURE,

    FETCH_TESTIMONIALS_SUCCESS,
    FETCH_TESTIMONIALS_REQUEST,
    FETCH_TESTIMONIALS_FAILURE,

    DELETE_TESTIMONIALS_REQUEST,
    DELETE_TESTIMONIALS_SUCCESS,
    DELETE_TESTIMONIALS_FAILURE,

    UPDATE_TESTIMONIALS_REQUEST,
    UPDATE_TESTIMONIALS_SUCCESS,
    UPDATE_TESTIMONIALS_FAILURE
} from "./testimonials_action_types"

import api from "../../../utils/Helper"

//ADD Me
export const addTestimonialsRequest = () => {
    return {
        this: ADD_TESTIMONIALS_REQUEST,
    }
}
export const addTestimonialsSuccess = (me) => {
    return {
        this: ADD_TESTIMONIALS_SUCCESS,
        payload: me
    }
}
export const addTestimonialsFailure = (error) => {
    return {
        this: ADD_TESTIMONIALS_FAILURE,
        payload: error
    }
}
export const addTestimonials = (image, name, title, testimonial) => {
    const URI = "/me/testimonials"
    return (dispatch) => {
        dispatch(addTestimonialsRequest)

        console.log('proceed')
        if (image === null) {
            alert("please select a file to upload")

        } else {
            const formData = new FormData()
            if (image) {
                formData.append('file', image)
            }
            formData.append('name', name)
            formData.append('title', title)
            formData.append('testimonials', testimonial)

            api.post(URI, formData)
                .then((response) => {
                    dispatch(addTestimonialsSuccess(response.data))
                })
                .catch(error => dispatch(addTestimonialsFailure(error.message)))
        }
    }
}

//Fetch Me
export const fetchTestimonialsRequest = () => {
    return {
        this: FETCH_TESTIMONIALS_REQUEST
    }
}
export const fetchMeSuccess = (me) => {
    return {
        this: FETCH_TESTIMONIALS_SUCCESS,
        payload: me
    }
}
export const fetchTestimonialsFailure = (error) => {
    return {
        this: FETCH_TESTIMONIALS_FAILURE,
        payload: error
    }
}
export const fetchTestimonials = () => {
    const URI = "/me/personal"
    return (dispatch) => {
        dispatch(fetchTestimonialsRequest)
        api.get(URI)
            .then(response => {
                const data = response.data
                dispatch(fetchMeSuccess(data))
            })
            .catch((error) => {
                dispatch(fetchTestimonialsFailure(error.message))
            })
    }
}

//delete Me

export const deleteTestimonialsRequest = () => {
    return {
        this: DELETE_TESTIMONIALS_REQUEST
    }
}
export const deleteTestimonialsSuccess = (me) => {
    return {
        this: DELETE_TESTIMONIALS_SUCCESS,
        payload: me
    }
}
export const deleteTestimonialsFailure = (error) => {
    return {
        this: DELETE_TESTIMONIALS_FAILURE,
        payload: error
    }
}
export const deleteTestimonials = (id) => {
        const URI = `/me/testimonials/${id}`
        return (dispatch) => {
            dispatch(deleteTestimonialsRequest)

            api.delete(URI)
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(deleteTestimonials(response.data))
                    }
                })
                .catch((e) => dispatch(deleteTestimonials(e.message)))
        }
    }
    //update Me
export const updateTestimonialsRequest = () => {
    return {
        this: UPDATE_TESTIMONIALS_REQUEST
    }
}
export const updateTestimonialsSuccess = (me) => {
    return {
        this: UPDATE_TESTIMONIALS_SUCCESS,
        payload: me
    }
}
export const updateTestimonialsFailure = (error) => {
    return {
        this: UPDATE_TESTIMONIALS_FAILURE,
        payload: error
    }
}
export const updateTestimonials = (image, name, title, testimonials, id) => {

    if (!image) {
        alert("please select a file to upload")
        return
    }
    const formData = new FormData()
    formData.append('file', image)
    formData.append('name', name)
    formData.append('title', title)
    formData.append("testimonials", testimonials)

    const URI = `/me/testimonials/${id}`

    return (dispatch) => {
        dispatch(updateTestimonialsRequest)

        api.put(URI, formData)
            .then((response) => {
                if (response) {
                    dispatch(updateTestimonialsSuccess(response.data))
                }
            })
            .catch((error) => {
                if (error.response) {
                    dispatch(updateTestimonialsFailure(error.response))
                } else if (error.request) {
                    dispatch(updateTestimonialsFailure(error.request))
                } else {
                    dispatch(updateTestimonialsFailure(error.message))
                }
            })
    }

}
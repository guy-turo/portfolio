import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from "./signup_action_types"
import axios from "axios"

export const signupRequest = () => {
    return {
        this: SIGNUP_REQUEST
    }
}
export const signupSuccess = (data) => {
    return {
        this: SIGNUP_SUCCESS,
        payload: data
    }
}
export const signupFailure = (error) => {
    return {
        this: SIGNUP_FAILURE,
        payload: error,
    }
}

export const signup = (name, email, password) => {
    const URI = "http://localhost:8000/api/v1/auth/signup"
    return (dispatch) => {
        dispatch(signupRequest)

        axios.post(URI, {
                name: name,
                email: email,
                password: password,
            })
            .then((res) => {
                if (res.status === 200) {
                    alert("Email already exists")
                }
                if (res.status === 201) {
                    dispatch(signupSuccess(res.data))
                }
                if (res.status === 208) {
                    alert(res.data.message)
                }
            }).catch(error => {
                dispatch(signupFailure(error.message))
            })
    }
}
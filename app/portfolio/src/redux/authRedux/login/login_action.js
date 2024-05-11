import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "./login_action_types"
import axios from "axios"

export const loginRequest = () => {
    return {
        this: LOGIN_REQUEST
    }
}
export const loginSuccess = (data) => {
    return {
        this: LOGIN_SUCCESS,
        payload: data
    }
}
export const loginFailure = (error) => {
    return {
        this: LOGIN_FAILURE,
        payload: error,
    }
}

export const login = (email, password) => {
    const URI = "http://localhost:8000/api/v1/auth/login"
    return (dispatch) => {
        dispatch(loginRequest)
        axios.post(URI, {
                email: email,
                password: password,
            })
            .then((response) => {
                if (response) {
                    dispatch(loginSuccess(response.data))
                }
            }).catch(error => {
                dispatch(loginFailure(error.message))
            })
    }
}
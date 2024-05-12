import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "./login_action_types"
import axios from "axios"

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}
export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}

export const login = (email, password) => {
    const URI = "http://localhost:8000/api/v1/auth/login"
    return (dispatch) => {
        dispatch(loginRequest())
        axios.post(URI, {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log("this is the response", response)
                if (response) {
                    console.log(response)
                    if (response.data.accessToken && response.data.refreshToken) {
                        localStorage.setItem("accessToken", response.data.accessToken)
                        localStorage.setItem("refreshToken", response.data.refreshToken)
                        dispatch(loginSuccess(response.data))
                    }
                }
                else {
                    throw new Error("Invalid login response format")
                  }
            }).catch(error => {
                const errorMessage = error.response?.data?.message || error.message
                dispatch(loginFailure(errorMessage))
            })
    }
}
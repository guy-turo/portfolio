import {
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from "./logout_action_types"
import api from "../../../utils/Helper"

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}
export const logoutSuccess = (data) => {
    return {
        type: LOGOUT_SUCCESS,
        payload: data
    }
}
export const logoutFailure = (error) => {
    return {
        type: LOGOUT_FAILURE,
        payload: error,
    }
}

export const logout = (initialToken) => {
    const URI = "/auth/logout"
    return async(dispatch) => {
        dispatch(logoutRequest)
        await api.put(URI, {
                token: initialToken
            }).then((response) => {
                if (response) {
                    const refreshToken = localStorage.getItem('refreshToken')
                    const accessToken = localStorage.getItem('accessToken')
                    if (refreshToken && accessToken) {
                        localStorage.removeItem("refreshToken")
                        localStorage.removeItem("accessToken")
                    }

                    //   navigate("/signin")
                    dispatch(logoutSuccess(response.data))
                }
            })
            .catch(error => {
                setTimeout(() => {
                    const refreshToken = localStorage.getItem('refreshToken')
                    const accessToken = localStorage.getItem('accessToken')
                    if (refreshToken && accessToken) {
                        localStorage.removeItem("refreshToken")
                        localStorage.removeItem("accessToken")
                    }
                    //   navigate('/signin')
                    dispatch(logoutFailure(error.message))
                }, 1500);
            })
    }
}
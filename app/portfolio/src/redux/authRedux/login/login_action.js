import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from "./login_action_types"
import axios from "axios"
import { useNavigate } from "react-router-dom"

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
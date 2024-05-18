import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from "./signup_action_types"
import axios from "axios"

export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
}
export const signupSuccess = (data) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}
export const signupFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        payload: error,
    }
}
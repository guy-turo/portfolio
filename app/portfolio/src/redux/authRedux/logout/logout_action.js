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
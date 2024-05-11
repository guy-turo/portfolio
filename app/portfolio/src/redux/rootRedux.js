import { combineReducers } from "redux"
import meReducer from "./personalRequestRedux/me/me_reducer"
import experienceReducer from "./personalRequestRedux/experience/experience_reducer"
import pdfReducer from "./pdfRequestRedux/pdfRedux/pdf_reducer"
import projectReducer from "./personalRequestRedux/project/project_reducer"
import serviceReducer from "./personalRequestRedux/service/service_reducer"
import socialReducer from "./personalRequestRedux/social/social_reducer"
import testimonialsReducer from "./personalRequestRedux/testimonial/testimonials_reducer"
import loginReducer from "./authRedux/login/login_reducer"
import signupReducer from "./authRedux/signup/signup_reducer"
import logoutReducer from "./authRedux/logout/logout_reducer"


const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    logout: logoutReducer,
    me: meReducer,
    experience: experienceReducer,
    pdf: pdfReducer,
    project: projectReducer,
    service: serviceReducer,
    social: socialReducer,
    testimonials: testimonialsReducer,
})
export default rootReducer
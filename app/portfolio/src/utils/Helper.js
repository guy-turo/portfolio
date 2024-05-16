import axios from 'axios'

const refreshToken = async() => {
    const URI = `http://localhost:8000/api/v1/auth/token`
    const initialToken = localStorage.getItem("refreshToken")
    if (initialToken !== '') {
        const response = await axios.post(URI, {
            token: initialToken
        })
        const newToken = response.data.accessToken
        return newToken
    } else {
        localStorage.setItem("refreshToken", '')
        localStorage.setItem("accessToken", '')

    }
}
const productUri = "https://app-api-bixtdry5xq-uc.a.run.app/api/v1/"
const api = axios.create({
    baseURL: "http://localhost:8000/api/v1/"
})
api.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response
        }
    },
    async(error) => {
        if (error.response && error.response.status === 401) {
            try {
                const newToken = await refreshToken()
                if (newToken) {
                    localStorage.setItem("accessToken", newToken)
                    error.config.headers.Authorization = `Bearer ${newToken}`
                }
                return Promise.resolve()
            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    })

api.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("accessToken") || ""
        if (token !== "") {
            config.headers.Authorization = "Bearer " + token
        }
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
export default api
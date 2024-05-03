import axios from 'axios'

const refreshToken = async() => {
    const URI = `${process.env.MAIN_HTTP}/auth/token`
    const initialToken = localStorage.getItem("refreshToken")
    const response = await axios.post(URI, {
        token: initialToken
    })
    const newToken = response.data.token
    return newToken
}
const api = axios.create({
    baseUrl: "http://localhost:8000/api/v1"
})

api.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response
        }
    },
    async(error) => {
        if (error.response && error.response.status === 401 && !error.config.__isRetryRequest) {
            try {
                const newToken = await refreshToken()
                axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`

                const originalRequest = error.config
                originalRequest.headers["Authorization"] = `Bearer ${newToken}`

                return axios(originalRequest)
            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    })
api.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem("token") || ""
        config.headers = {
            Authorization: `Bearer ${token}`,
            "x-token": JSON.parse(token),
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default api
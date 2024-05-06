import axios from 'axios'

const refreshToken = async() => {
    const URI = `http://localhost:8000/api/v1/auth/token`
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

        if (error) {

            try {

                const newToken = refreshToken()
                if (newToken) {
                    api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`

                }
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
        let token = localStorage.getItem("accessToken") || ""

        if (token !== "") {

            config.headers.Authorization = `Bearer ${token}`

        }

        return config
    },
    (error) => Promise.reject(error)
)

export default api
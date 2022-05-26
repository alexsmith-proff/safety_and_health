import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
})

axiosInstance.interceptors.request.use(config => {
    const authToken = localStorage.getItem('accessToken')
    if(authToken) {
        config.headers.authorization = `Bearer ${authToken}`
    }
    return config
}, error => {
    Promise.reject(error)
})

export default axiosInstance
import axios from 'axios'

const service = axios.create({
    baseURL: 'https://rssblog.herokuapp.com/',
    timeout: 5000
})

service.interceptors.response.use(
    // Do something with response data
    response => {
        if(response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // Do something with response error
    error => {
        return Promise.reject(error)
    })

export default service

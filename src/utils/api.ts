import axios from 'axios'
const service = axios.create({})


service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    const status = error?.response?.status
    console.log(`error--${status}`, 'error')
    return Promise.reject(error)
  }
)

export default service
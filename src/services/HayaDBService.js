import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials:true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.clear()
      window.location.assign('/')
    }
    return Promise.reject(error)
  }
)

const houseDetail = (houseId) => http.get(`/houses/${houseId}`)

const TaskbleService = {
  houseDetail
}

export default TaskbleService
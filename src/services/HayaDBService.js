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

const getHouses = () => http.get('/houses')
const getHouseDetail = (houseId) => http.get(`/houses/${houseId}`)
const deleteHouse = (houseId) => http.delete(`/houses/${houseId}`)

const TaskbleService = {
  getHouses,
  getHouseDetail,
  deleteHouse
}

export default TaskbleService
import axios from 'axios'
import QueryString from 'qs'

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

const createHouse = (houseData) => http.post('/houses/new', houseData)
const getHousesBasic = (params) => http.get('/houses', {
  params,
  paramsSerializer: (params) => {
    return QueryString.stringify(params, {arrayFormat: 'repeat'})
  }
})
const getHouseDetail = (houseId) => http.get(`/houses/${houseId}`)
const updateHouse = (houseId, houseData) => http.patch(`/houses/${houseId}`, houseData)
const deleteHouse = (houseId) => http.delete(`/houses/${houseId}`)

const TaskbleService = {
  createHouse,
  getHousesBasic,
  getHouseDetail,
  updateHouse,
  deleteHouse
}

export default TaskbleService
import axios from 'axios'

const LOCATION_API_URL = process.env.LOCATION_API_URL ? process.env.LOCATION_API_URL : 'https://get.geojs.io/v1/'
const apiInstance = axios.create({
  baseURL: LOCATION_API_URL,
  headers: {
  }
})

export default {
  getLocationIP: () => apiInstance.get('ip/geo.json')
}

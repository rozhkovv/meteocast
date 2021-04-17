import axios from 'axios'

const API_KEY = '73019413d83cdc1d257b17509a347cef'

// San Francisco
const DEFAULT_LOCATION = {
  lat: 33.441792,
  lon: -94.037689
}

// Create instance called instance
const apiInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {
  }
})

export default {

  getWeatherByLocation: (location = DEFAULT_LOCATION) => apiInstance({
    method: 'GET',
    url: 'onecall',
    params: {
      lat: location.lat,
      lon: location.lon,
      appid: API_KEY
    }
  }),

  getWeatherCondition: (query) => apiInstance({
    method: 'GET',
    url: 'weather',
    params: {
      q: query,
      appid: API_KEY
    }
  })

}

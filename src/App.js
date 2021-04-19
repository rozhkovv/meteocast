import React, { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js'
import './assets/style/App.scss'
import { PopUp } from './components/popup/PopUp'
import { Settings } from './components/settings/Settings'
import { Loader } from './components/loader/Loader'
import { invertColor } from './helperFunctions'

import api from './api/index'

const unsplash = createApi({
  accessKey: 'CgPV0x8kk4dBghQkeTd-7n8LRrKT8mp8JIIhUPUy7ZA'
})

export function App () {
  const [mode, setMode] = useState('c')
  const [location, setLocation] = useState('')
  const [weatherConditions, setWeatherConditions] = useState(null)
  const [temperature, setWeatherTemperature] = useState(0)
  const [bgPhoto, setBgPhoto] = useState('')
  const [colors, setColors] = useState(null)

  const getBackgroundPhoto = (query) => {
    unsplash.photos.getRandom({
      query
    }).then((result) => {
      if (result.type === 'success' && result.response) {
        console.log(result.response)
        setBgPhoto(result.response.urls.small)
        setColors({ regular: result.response.color, inverted: invertColor(result.response.color) })
      }
    })
  }

  const getWeatherTemperature = (payload) => {
    api.weather.getWeatherCondition(payload).then((response) => {
      setWeatherTemperature(Math.round(response.data.main.temp))
      setWeatherConditions(response.data)
      getBackgroundPhoto(response.data.weather[0].main)
    })
    return '...'
  }

  useEffect(() => {
    if (!location) {
      api.location.getLocationIP().then((result) => {
        const locationName = result.data.city ? result.data.city : result.data.country
        if (result.data && locationName) {
          setLocation(locationName)
          getWeatherTemperature({
            mode,
            location: locationName
          })
        }
      })
    }
  })

  const page = window.location.hash.substr(1) === 'options' ? 'options' : 'popup'
  let pageComponent = weatherConditions && colors ? (
    <PopUp
      mode={mode}
      location={location}
      weatherConditions={weatherConditions}
      backgroundPhoto={bgPhoto}
      temperature={temperature}
      colors={colors}
    />
  ) : (<Loader />)
  if (page === 'options') pageComponent = <Settings updateTheMode={(newMode) => setMode(newMode)} />

  return (
    <div className="App">
      {pageComponent}
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import './assets/style/App.scss'
import { PopUp } from './components/popup/PopUp'
import { Settings } from './components/settings/Settings'
import api from './api/index'

export function App () {
  const [mode, setMode] = useState('c')
  const [location, setLocation] = useState('')
  const [weatherConditions, setWeatherConditions] = useState('')

  const getWeatherTemperature = (payload) => {
    api.weather.getWeatherCondition(payload).then((response) => {
      setWeatherConditions(Math.round(response.data.main.temp))
    })
    return '...'
  }

  useEffect(() => {
    if (!location) {
      api.location.getLocationIP().then((result) => {
        if (result.data && result.data.city) {
          setLocation(result.data.city)
          getWeatherTemperature({
            mode,
            location: result.data.city
          })
        }
      })
    }
  })

  const page = window.location.hash.substr(1) === 'options' ? 'options' : 'popup'
  let pageComponent = (
    <PopUp
      mode={mode}
      location={location}
      weatherConditions={weatherConditions}
    />
  )
  if (page === 'options') pageComponent = <Settings updateTheMode={(newMode) => setMode(newMode)} />

  return (
    <div className="App">
      {pageComponent}
    </div>
  )
}

export default App

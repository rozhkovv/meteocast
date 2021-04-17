import React, { useState, useEffect } from 'react'
import './assets/style/App.scss'
import { PopUp } from './components/popup/PopUp'
import { Settings } from './components/settings/Settings'

// San Francisco
const DEFAULT_LOCATION = {
  lat: 33.441792,
  lon: -94.037689
}

export function App () {
  const [mode, setMode] = useState('c')
  const [location, setLocation] = useState(DEFAULT_LOCATION)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude: lat, longitude: lon } = position.coords
      setLocation({ lat, lon })
      console.log('Latitude is :', lat)
      console.log('Longitude is :', lon)
    }, (err) => console.log(`ERROR(${err.code}): ${err.message}`), {
      maximumAge: 60000,
      timeout: 5000,
      enableHighAccuracy: true
    })
  })

  const page = window.location.hash.substr(1) === 'options' ? 'options' : 'popup'
  let pageComponent = <PopUp mode={mode} location={location} />
  if (page === 'options') pageComponent = <Settings updateTheMode={(newMode) => setMode(newMode)} />

  return (
    <div className="App">
      {location.lat}
      {location.lon}
      {pageComponent}
    </div>
  )
}

export default App

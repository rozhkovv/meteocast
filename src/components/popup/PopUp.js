import React from 'react'
import PropTypes from 'prop-types'
import api from '../../api/index'

const getCityName = (event = null) => {
  if (event) {
    // const response = api.getWeatherByLocation(event.target.value)
    const response = api.getWeatherCondition(event.target.value)
    console.log(response)
  }
  return 'San Francisco'
}

const getWeatherTemperature = ({ mode = 'c' }) => (mode === 'c' ? 14 : 58)

export function PopUp (props) {
  const { mode } = props
  const cityName = getCityName()
  const weatherTemperature = getWeatherTemperature({ mode })
  const location = {
    lat: null,
    lng: null
  }

  return (
    <div className="cwa-popup red">
      {location.lat}
      -
      {location.lng}
      <div className="cwa-popup__city">{cityName}</div>
      <div className="cwa-popup__temperature">
        {weatherTemperature}
        °
      </div>
      <input type="text" name="city" onBlur={getCityName} />
    </div>
  )
}

PopUp.propTypes = {
  mode: PropTypes.string.isRequired
}

export default PopUp

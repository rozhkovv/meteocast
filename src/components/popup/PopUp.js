import React from 'react'
import PropTypes from 'prop-types'
// import api from '../../api/index'

// const getCityName = (event = null) => {
//   if (event) {
//     // const response = api.getWeatherByLocation(event.target.value)
//     const response = api.getWeatherCondition(event.target.value)
//     console.log(response)
//   }
//   return 'San Francisco'
// }

// const getWeatherTemperature = ({ mode, location }) => {
//   const response = api.weather.getWeatherCondition(location)
//   console.log(response)
//   return mode === 'c' ? 18 : 58
// }

export function PopUp (props) {
  const { location, weatherConditions } = props
  // const cityName = getCityName()
  return (
    <div className="cwa-popup red">
      <div className="cwa-popup__city">{location}</div>
      <div className="cwa-popup__temperature">
        {weatherConditions}
        °
      </div>
    </div>
  )
}

PopUp.propTypes = {
  location: PropTypes.string.isRequired,
  weatherConditions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default PopUp

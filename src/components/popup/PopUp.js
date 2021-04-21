import React from 'react'
import PropTypes from 'prop-types'

export function PopUp (props) {
  const {
    location,
    weatherConditions,
    temperature,
    backgroundPhoto,
    colors
  } = props

  return (
    <div className="cwa-popup">
      <div className="cwa-popup__background" style={{ backgroundImage: `url(${backgroundPhoto})` }}>
        <div className="cwa-popup__icon">
          <div className="cwa-popup__icon-bg" style={{ backgroundColor: colors.inverted }} />
          <img
            src={`http://openweathermap.org/img/wn/${weatherConditions.weather[0].icon}@4x.png`}
            alt={weatherConditions.weather[0].main}
          />
        </div>
        <div className="cwa-popup__info-content">
          <div className="cwa-popup__info-content-bg" />
          <div className="cwa-popup__location">
            <span className="cwa-popup__city">{location}</span>
            <span className="cwa-popup__state">{weatherConditions.weather[0].description}</span>
          </div>
          <div className="cwa-popup__temperature">
            {temperature}
            °
          </div>
        </div>

      </div>

    </div>
  )
}

PopUp.propTypes = {
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherConditions: PropTypes.isRequired,
  backgroundPhoto: PropTypes.string.isRequired,
  colors: PropTypes.isRequired
}

export default PopUp

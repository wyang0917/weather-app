import React from 'react'
import icon from '../../../assets/weather_icon/Cloudy.png'

const WeatherIcon = ({className}) => {
  return (

    <img src={icon} className={className} alt='cloud'></img>

  )
}

export default WeatherIcon
import React from 'react'

const WeatherIcon = ({className,icon}) => {
  return (

    <img src={icon} className={className} alt='weather-icon' />

  )
}

export default WeatherIcon
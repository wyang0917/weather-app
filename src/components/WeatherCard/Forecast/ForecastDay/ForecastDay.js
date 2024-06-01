import React from 'react'
import TemperatureRange from '../../TemperatureRange'
import WeatherIcon from '../../WeatherIcon'

const ForecastDay = ({FormatDay,FormatDate,icon,temperatureRange}) => {

  return (
    <div className='flex flex-col items-center'>
      <span className={'block text-2xl font-extrabold'}>{FormatDay}</span>
      <span className={'block text-sm'}>{FormatDate}</span>
      <WeatherIcon icon={icon} className={'scale-75 -mt-4'}/>
      <TemperatureRange temperatureRange={temperatureRange} className={'block -mt-2 text-sm'}/>
    </div>
  )
}

export default ForecastDay
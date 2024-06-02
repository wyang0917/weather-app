import React from 'react'
import WeatherIcon from '../../WeatherIcon'
import CityName from '../../CityName'
import TemperatureRange from '../../TemperatureRange'

const OtherCIty = ({bg,icon,name,temperatureRange}) => {
  return (
    <div className='relative m-2'>
      <div className={`${bg} bg-no-repeat bg-center bg-contain opacity-80 absolute inset-0`}></div>
      <div className={'text-white flex flex-col items-center relative z-10'}>
      <WeatherIcon icon={icon} className={'scale-50 -mt-10'}/>
      <CityName name={name} className={'block text-xl font-extrabold -mt-10'}/>
      <TemperatureRange temperatureRange={temperatureRange} className={'block text-sm'}/>
    </div>
    </div>
    
  )
}

export default OtherCIty
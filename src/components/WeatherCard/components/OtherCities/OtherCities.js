import React, { useEffect } from 'react'
import OtherCIty from './components/OtherCity'
import Cloudy from '../../../../assets/weather_icon/Cloudy.png'
import CloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import Snow from '../../../../assets/weather_icon/Snow.png'
import Sunny from '../../../../assets/weather_icon/Sunny.png'
import getCurrent from '../../../../apis/getCurrent'
const OtherCities = () => {
  const cities = [
    {
      bg:'bg-Sydney',
      icon:Sunny,
      name:'Sydney',
      temperatureRange:'28 ~ 32°',
      color:'from-blue-400',
    },
    {
      bg:'bg-Shanghai',
      icon:Cloudy,
      name:'Shanghai',
      temperatureRange:'20 ~ 23°',
      color:'from-blue-600',
    },
    {
      bg:'bg-Newyork',
      icon:CloudyDay,
      name:'New York',
      temperatureRange:'18 ~ 20°',
      color:'from-blue-700',
    },
    {
      bg:'bg-London',
      icon:Snow,
      name:'London',
      temperatureRange:'0 ~ 2°',
      color:'from-blue-800',
    },
  ]

  return (
    <div className='flex justify-between max-md:flex-wrap max-md:w-full'>
      {cities.map(city=>(
        <OtherCIty bg={city.bg} icon={city.icon} name={city.name} temperatureRange={city.temperatureRange} color={city.color} />
      ))}
    </div>
  )
}

export default OtherCities
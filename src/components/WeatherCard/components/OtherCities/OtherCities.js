import React from 'react'
import OtherCIty from './components/OtherCity'
import Cloudy from '../../../../assets/weather_icon/Cloudy.png'
import CloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import Snow from '../../../../assets/weather_icon/Snow.png'
import Sunny from '../../../../assets/weather_icon/Sunny.png'

const OtherCities = () => {
  const cities = [
    {
      bg:'bg-Sydney',
      icon:Sunny,
      name:'Sydney',
      temperatureRange:'28 ~ 32°',
    },
    {
      bg:'bg-Shanghai',
      icon:Cloudy,
      name:'Shanghai',
      temperatureRange:'20 ~ 23°',
    },
    {
      bg:'bg-Newyork',
      icon:CloudyDay,
      name:'New York',
      temperatureRange:'18 ~ 20°',
    },
    {
      bg:'bg-London',
      icon:Snow,
      name:'London',
      temperatureRange:'0 ~ 2°',
    },
  ]
  return (
    <div className='flex justify-around mt-6'>
      {cities.map(city=>(
        <OtherCIty bg={city.bg} icon={city.icon} name={city.name} temperatureRange={city.temperatureRange} />
      ))}
    </div>
  )
}

export default OtherCities
import React, { useEffect, useState } from 'react'
import OtherCIty from './components/OtherCity'
import Cloudy from '../../../../assets/weather_icon/Cloudy.png'
import CloudyDay from '../../../../assets/weather_icon/Cloudy_day.png'
import Snow from '../../../../assets/weather_icon/Snow.png'
import Sunny from '../../../../assets/weather_icon/Sunny.png'
import getCurrent from '../../../../apis/getCurrent'
const OtherCities = () => {
const [citiesData,setCitiesData]=useState([])
const cities = [
  {
    bg:'bg-Sydney',
    name:'Sydney',
    color:'from-blue-400',
  },
  {
    bg:'bg-Shanghai',
    name:'Shanghai',
    color:'from-blue-600',
  },
  {
    bg:'bg-Newyork',
    name:'New York',
    color:'from-blue-700',
  },
  {
    bg:'bg-London',
    name:'London',
    color:'from-blue-800',
  },
]

useEffect(()=>{
  const fetchData = async()=>{
    try {
      const updateCityWeather = await Promise.all(cities.map(async(city)=>{
        const data = await getCurrent(city.name)
        console.log('current data:',data);
        return {...city,weatherIcon:data.current.condition.icon,forecastDay:data.forecast.forecastday}
      }))
      console.log('Updated city data:', updateCityWeather)
      setCitiesData(updateCityWeather)
    }catch (error) {
      console.error('Error fetching city data:', error);
    }
    } 
  fetchData()

},[])
console.log('citiesData',citiesData);


  return (
    <div className='flex justify-between max-md:flex-wrap w-full'>
      {citiesData.map(city=>(
        <OtherCIty bg={city.bg} icon={city.weatherIcon} name={city.name} temperatureRange={`${city.forecastDay[0].day.mintemp_c} ~ ${city.forecastDay[0].day.maxtemp_c}°`} color={city.color} />
      ))}
    </div>
  )
}

export default OtherCities
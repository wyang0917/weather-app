import React from 'react'
import ForecastDay from './components/ForecastDay'
import Hail from '../../../../assets/weather_icon/Hail.png'
import Rain from '../../../../assets/weather_icon/Rain.png'
import Snow from '../../../../assets/weather_icon/Snow.png'
import Sunny from '../../../../assets/weather_icon/Sunny.png'
import { DateTime } from 'luxon'

const Forecast = () => {
  const formatForecastDay = (date,dayFromNow)=>{
    return DateTime.now().plus({days:dayFromNow}).toFormat('cccc')
  }
  const formatForecastDate = (date,dayFromNow)=>{
    return DateTime.now().plus({days:dayFromNow}).toFormat('dd MMMM')
  }
  const day = DateTime.now()
  const forecastDays = [
    {
      FormatDay:formatForecastDay(day,1),
      FormatDate:formatForecastDate(day,1),
      icon:Hail,
      temperatureRange:'20 ~ 25°'},
    {
      FormatDay:formatForecastDay(day,2),
      FormatDate:formatForecastDate(day,2),
      icon:Rain,
      temperatureRange:'18 ~ 20°'},
    {
      FormatDay:formatForecastDay(day,3),
      FormatDate:formatForecastDate(day,3),
      icon:Snow,
      temperatureRange:'20 ~ 23°'},
    {
      FormatDay:formatForecastDay(day,4),
      FormatDate:formatForecastDate(day,4),
      icon:Sunny,
      temperatureRange:'28 ~ 32°'},
  ]
  return (
    <div className='flex justify-between max-md:flex-wrap h-1/2 pb-3 font-medium max-md:mx-auto'> 
        {forecastDays.map((forecastDay,index)=>(
          <ForecastDay key={index} FormatDay={forecastDay.FormatDay} FormatDate={forecastDay.FormatDate} icon={forecastDay.icon} temperatureRange={forecastDay.temperatureRange} />
        ))}
    </div>
  )
}

export default Forecast
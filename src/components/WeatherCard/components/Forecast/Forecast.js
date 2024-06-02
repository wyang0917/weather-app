import React from 'react'
import ForecastDay from './components/ForecastDay'
import Hail from '../../../../assets/weather_icon/Hail.png'
import Rain from '../../../../assets/weather_icon/Rain.png'
import Snow from '../../../../assets/weather_icon/Snow.png'
import Sunny from '../../../../assets/weather_icon/Sunny.png'
import moment from 'moment'

const Forecast = () => {
  const formatCurrentDay = (date,i)=>{
    return date.clone().add(i,'days').format('dddd')
  }
  const formatCurrentDate = (date,i)=>{
    return date.clone().add(i,'days').format('DD MMMM')
  }
  const day = moment()
  const forecastDays = [
    {
      FormatDay:formatCurrentDay(day,0),
      FormatDate:formatCurrentDate(day,0),
      icon:Hail,
      temperatureRange:'20 ~ 25°'},
    {
      FormatDay:formatCurrentDay(day,1),
      FormatDate:formatCurrentDate(day,1),
      icon:Rain,
      temperatureRange:'18 ~ 20°'},
    {
      FormatDay:formatCurrentDay(day,2),
      FormatDate:formatCurrentDate(day,2),
      icon:Snow,
      temperatureRange:'20 ~ 23°'},
    {
      FormatDay:formatCurrentDay(day,3),
      FormatDate:formatCurrentDate(day,3),
      icon:Sunny,
      temperatureRange:'28 ~ 32°'},
  ]
  return (
    <div className='flex justify-around mt-6'> 
        {forecastDays.map((forecastDay,index)=>(
          <ForecastDay key={index} FormatDay={forecastDay.FormatDay} FormatDate={forecastDay.FormatDate} icon={forecastDay.icon} temperatureRange={forecastDay.temperatureRange} />
        ))}
    </div>
  )
}

export default Forecast
import React from 'react'
import bg from '../../../assets/background/Cloudy_day_background.png'
import CurrentDate from '../CurrentDate'
import CityName from '../CityName';
import Temperature from './Temperature';
import TemperatureRange from '../TemperatureRange';
import WeatherIcon from '../WeatherIcon';
import Meta from './Meta'

const CurrentCity = () => {
  console.log('currentcity');
  const CurrentCityDateFormat = (date)=>{
    return date.format('D MMMM,\xa0\xa0dddd hh:mm')
  }
  return (
    <div className='bg-blue-500 h-128 w-1/3 rounded-3xl relative py-4 px-6 text-white flex flex-col overflow-hidden box-border'>
      <img src={bg} alt="cloudy" className='absolute top-0 right-0'></img>
      <CurrentDate FormatDate={CurrentCityDateFormat} className="text-sm block" />
      <CityName className={'text-2xl font-extrabold mt-5 text-center block'} name={`Shanghai`}/>
      <Temperature className={'text-center text-7xl font-extrabold mt-7 block'} temperature={`23°`}/>
      <TemperatureRange className={'text-center text-sm block'} temperatureRange={`20 ~ 23°`}/>
      <WeatherIcon className={'scale-75 -mt-8'}/>
      <Meta className={'bg-white rounded-xl p-2 text-slate-950 font-medium -mt-4'}/>
    </div>
  )
}

export default CurrentCity
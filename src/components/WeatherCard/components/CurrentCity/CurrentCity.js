import React from 'react'
import bg from '../../../../assets/background/Cloudy_day_background.png'
import icon from '../../../../assets/weather_icon/Cloudy.png'
import CurrentDate from './components/CurrentDate'
import CityName from '../../../CityName';
import Temperature from './components/Temperature';
import TemperatureRange from '../../../TemperatureRange';
import WeatherIcon from '../../../WeatherIcon';
import Meta from './components/Meta'

const CurrentCity = () => {
  const formatCurrentCityDate = (date)=>{
    return date.format('DD MMMM,\xa0\xa0dddd hh:mm')
  }
  return (
    <div className='bg-blue-500 w-1/3 rounded-2xl relative py-3 px-3 text-white flex flex-col justify-between items-center	 overflow-hidden box-border max-md:w-full'>
      <img src={bg} alt="cloudy" className='absolute top-0 right-0' />
      <CurrentDate FormatDate={formatCurrentCityDate} className="text-sm block" />
      <CityName className={'text-2xl font-extrabold block my-8'} name={`Shanghai`}/>
      <Temperature className={'text-7xl font-extrabold block'} temperature={`23°`}/>
      <TemperatureRange className={'text-sm block'} temperatureRange={`20 ~ 23°`}/>
      <WeatherIcon className={''} icon={icon}/>
      <Meta className={'bg-white rounded-xl w-full text-black font-medium text-sm py-3'}/>
    </div>
  )
}

export default CurrentCity
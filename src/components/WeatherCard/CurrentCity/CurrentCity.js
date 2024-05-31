import React from 'react'
import bg from '../../../assets/background/Cloudy_day_background.png'
import CurrentDate from '../CurrentDate'
import CityName from '../CityName/CityName';
import Temperature from './Temperature/Temperature';

const CurrentCity = () => {
  console.log('currentcity');
  const CurrentCityDateFormat = (date)=>{
    return date.format('D MMMM, dddd hh:mm')
  }
  return (
    <div className='bg-blue-500 h-128 w-1/3 rounded-3xl relative py-4 px-6 text-white'>
      <img src={bg} alt="cloudy" className='bg-cover absolute top-0 right-0'></img>
      <CurrentDate FormatDate={CurrentCityDateFormat} className="text-sm block" />
      <CityName className={'text-2xl font-extrabold mt-5 mx-auto text-center block'} name={'Shanghai'}/>
      <Temperature className={'text-center text-7xl font-extrabold my-6 block'} temperature={'23°'}/>
    </div>
  )
}

export default CurrentCity
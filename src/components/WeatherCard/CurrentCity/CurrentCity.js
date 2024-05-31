import React from 'react'
import bg from '../../../assets/background/Cloudy_day_background.png'
import CurrentDate from '../CurrentDate'

const CurrentCity = () => {
  console.log('currentcity');
  const CurrentCityDateFormat = (date)=>{
    return date.format('D MMMM, dddd hh:mm')
  }
  return (
    <div className='bg-blue-500 h-128 w-1/3 rounded-3xl relative py-4 px-6 text-white'>
      <img src={bg} alt="cloudy" className='bg-cover absolute'></img>
      <CurrentDate FormatDate={CurrentCityDateFormat} className="" />
    </div>
  )
}

export default CurrentCity
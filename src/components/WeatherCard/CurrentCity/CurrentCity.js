import React from 'react'
import bg from '../../../assets/background/Cloudy_day_background.png'
import CurrentDate from '../CurrentDate'

const CurrentCity = () => {
  console.log('currentcity');
  return (
    <div className='bg-blue-500 h-128 w-1/3 rounded-3xl relative py-4 px-6 text-white'>
      <img src={bg} alt="cloudy" className='bg-cover absolute'></img>
      <CurrentDate />
    </div>
  )
}

export default CurrentCity
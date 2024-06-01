import React from 'react'
import CurrentCity from './CurrentCity'
import Forecast from './Forecast';

const WeatherCard = () => {
  console.log('weather card rendered');
  return (
    <div className='bg-slate-50 w-2/3 max-w-5xl h-auto p-8 rounded-3xl flex'>
      <CurrentCity />
      <Forecast />
    </div>
  )
}

export default WeatherCard
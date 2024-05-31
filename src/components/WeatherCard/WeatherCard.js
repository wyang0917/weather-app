import React from 'react'
import CurrentCity from './CurrentCity'

const WeatherCard = () => {
  console.log('weather card rendered');
  return (
    <div className='bg-slate-50 w-2/3 max-w-5xl h-auto p-8 rounded-3xl flex items-center'>
      <CurrentCity />
    </div>
  )
}

export default WeatherCard
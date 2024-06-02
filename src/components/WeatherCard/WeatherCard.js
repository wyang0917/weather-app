import React from 'react'
import CurrentCity from './CurrentCity'
import Forecast from './Forecast';
import SearchBar from './SearchBar';
import OtherCities from './OtherCities/OtherCities';

const WeatherCard = () => {
  console.log('weather card rendered');
  return (
    <div className='bg-slate-200 w-2/3 max-w-5xl h-auto p-8 rounded-3xl flex'>
      <CurrentCity />
      <div className=' w-2/3 px-6'>
      <Forecast />
      <SearchBar />
      <OtherCities />
      </div>
    </div>
  )
}

export default WeatherCard
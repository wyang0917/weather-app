import React,{useEffect}from 'react'
import CurrentCity from './components/CurrentCity'
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import OtherCities from './components/OtherCities';
import getCurrent from '../../apis/getCurrent';

const WeatherCard = () => {

  // useEffect(()=>{
  //   getCurrent()
  //   .then((data)=>{
  //     console.log(data);
  //   })
  // },[])
  
  return (
    <div className='bg-slate-200 w-2/3 max-w-5xl h-auto p-8 rounded-3xl flex '>
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
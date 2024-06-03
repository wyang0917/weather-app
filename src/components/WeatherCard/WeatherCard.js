import React, { useEffect } from 'react';
import CurrentCity from './components/CurrentCity';
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
    <div className="bg-slate-200  max-w-4xl h-auto px-6 py-5 rounded-3xl flex max-md:flex-col max-md:w-80">
      <CurrentCity />
      <div className=" w-2/3 px-6">
        <Forecast />
        <SearchBar />
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;

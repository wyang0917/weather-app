import React, { useEffect, useState } from 'react';
import CurrentCity from './components/CurrentCity';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import OtherCities from './components/OtherCities';
import currentMockData from '../../mocks/current.json';
import forecastMockData from '../../mocks/forecast.json';

const WeatherCard = () => {
  return (
    <div className="bg-slate-200  max-w-5xl h-auto px-6 py-5 rounded-3xl flex max-md:flex-col max-md:w-80 text-black">
      <CurrentCity
        temp={currentMockData.current.temp_c}
        minTemp={forecastMockData.forecast.forecastday[0].day.mintemp_c}
        maxTemp={forecastMockData.forecast.forecastday[0].day.maxtemp_c}
        icon={currentMockData.current.condition.icon}
        humidityDesc={currentMockData.current.humidity}
        windDesc={currentMockData.current.wind_kph}
        PMIconDesc={currentMockData.current.uv}
        somatosensoryIconDesc={currentMockData.current.feelslike_c}
      />
      <div className=" w-2/3 pl-6 max-md:w-full  max-md:pl-0 flex flex-col justify-between">
        <Forecast />
        <SearchBar />
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;

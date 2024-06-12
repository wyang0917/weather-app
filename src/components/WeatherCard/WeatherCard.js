import React, { useEffect, useState } from 'react';
import CurrentCity from './components/CurrentCity';
import Forecast from './components/Forecast';
import SearchBar from './components/SearchBar';
import OtherCities from './components/OtherCities';
import getForecast from '../../apis/getForecast';

const WeatherCard = () => {
  const [forecastWeatherData, setForecastWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState('brisbane');

  useEffect(() => {
    getForecast(cityName).then((response) => {
      console.log(response);
      setForecastWeatherData(response);
      setLoading(false);
    });
  }, [cityName]);

  const handleCityName = (text) => {
    setCityName(text);
  };

  if (loading) {
    return <div className="text-4xl	">Loading...</div>;
  }

  const {
    current: {
      temp_c: temp,
      wind_kph: windSpeed,
      humidity,
      feelslike_c: somatosensory,
      air_quality: { pm2_5: airCondition },
      condition: { icon: weatherIcon },
    },
    forecast: { forecastday },
  } = forecastWeatherData;

  const [day1, day2, day3, day4, day5] = forecastday.map((date) => ({
    minTemp: date.day.mintemp_c,
    maxTemp: date.day.maxtemp_c,
    forecastIcon: date.day.condition.icon,
  }));

  const forecastDayTempRange = [
    { minTemp: day2.minTemp, maxTemp: day2.maxTemp, icon: day2.forecastIcon },
    { minTemp: day3.minTemp, maxTemp: day3.maxTemp, icon: day3.forecastIcon },
    { minTemp: day4.minTemp, maxTemp: day4.maxTemp, icon: day4.forecastIcon },
    { minTemp: day5.minTemp, maxTemp: day5.maxTemp, icon: day5.forecastIcon },
  ];

  return (
    <div className="bg-slate-200  max-w-3xl h-auto px-6 py-5 rounded-3xl flex max-md:flex-col max-md:w-80 text-black">
      <CurrentCity
        temp={temp}
        minTemp={day1.minTemp}
        maxTemp={day1.maxTemp}
        icon={weatherIcon}
        humidityDesc={humidity}
        windDesc={windSpeed}
        PMIconDesc={airCondition}
        somatosensoryIconDesc={somatosensory}
        cityName={cityName}
      />
      <div className=" w-2/3 pl-6 max-md:w-full  max-md:pl-0 flex flex-col justify-between">
        <Forecast forecastDayTempRange={forecastDayTempRange} />
        <SearchBar handleCityName={handleCityName} />
        <OtherCities />
      </div>
    </div>
  );
};

export default WeatherCard;

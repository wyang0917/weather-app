import React, { useEffect, useState } from 'react';
import OtherCIty from './components/OtherCity';
import getCurrent from '../../../../apis/getCurrent';
const OtherCities = ({ handleCityName }) => {
  const [citiesData, setCitiesData] = useState([]);
  const cities = [
    {
      bg: 'bg-Sydney',
      name: 'Sydney',
      color: 'from-blue-400',
    },
    {
      bg: 'bg-Shanghai',
      name: 'Shanghai',
      color: 'from-blue-600',
    },
    {
      bg: 'bg-Newyork',
      name: 'New York',
      color: 'from-blue-700',
    },
    {
      bg: 'bg-London',
      name: 'London',
      color: 'from-blue-800',
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updateCityWeather = await Promise.all(
          cities.map(async (city) => {
            const data = await getCurrent(city.name);
            return {
              ...city,
              weatherIcon: data.current.condition.icon,
              forecastDay: data.forecast.forecastday,
            };
          })
        );

        setCitiesData(updateCityWeather);
      } catch (error) {
        throw new Error('Fail to fetching city data');
      }
    };
    fetchData();
  }, []);
  const handleClick = (cityName) => {
    handleCityName(cityName);
  };

  return (
    <div className="flex justify-between max-md:flex-wrap w-full">
      {citiesData.map((city) => (
        <OtherCIty
          bg={city.bg}
          icon={city.weatherIcon}
          name={city.name}
          temperatureRange={`${city.forecastDay[0].day.mintemp_c} ~ ${city.forecastDay[0].day.maxtemp_c}°`}
          color={city.color}
          onClick={() => handleClick(city.name)}
        />
      ))}
    </div>
  );
};

export default OtherCities;

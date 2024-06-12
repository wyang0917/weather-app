import React from 'react';
import WeatherIcon from '../../../../../WeatherIcon';
import CityName from '../../../../../CityName';
import TemperatureRange from '../../../../../TemperatureRange';

const OtherCIty = ({ bg, icon, name, temperatureRange, color,onClick }) => {
  return (
    <div className="relative mx-2 w-1/4 max-md:w-5/12 max-md:mt-3 cursor-pointer group" onClick={onClick}>
      <div
        className={`${bg} bg-no-repeat bg-center bg-cover absolute inset-0 rounded-2xl`}
      >
        <div className={`${color} bg-gradient-to-tl h-full rounded-2xl group-hover:opacity-0 transition-opacity duration-300`}></div>
      </div>
      <div className={'text-white flex flex-col items-center relative z-10'}>
        <WeatherIcon icon={icon} className={'px-6'} />
        <CityName name={name} className={'block text-xl font-extrabold'} />
        <TemperatureRange
          temperatureRange={temperatureRange}
          className={'block text-sm'}
        />
      </div>
    </div>
  );
};

export default OtherCIty;

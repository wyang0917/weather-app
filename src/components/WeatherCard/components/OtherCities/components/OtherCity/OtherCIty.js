import React from 'react';
import WeatherIcon from '../../../../../WeatherIcon';
import CityName from '../../../../../CityName';
import TemperatureRange from '../../../../../TemperatureRange';

const OtherCIty = ({ bg, icon, name, temperatureRange,color }) => {
  return (
    <div className="relative mx-2 w-1/4 max-md:w-1/2 max-md:mx-0 max-md:mt-3">
      <div
        className={`${bg} bg-no-repeat bg-center bg-cover opacity-80 absolute inset-0 rounded-2xl`}
      ><div className={`${color} bg-gradient-to-tl h-full rounded-2xl`}></div>
      </div>
      <div className={'text-white flex flex-col items-center relative z-10'}>
        <WeatherIcon icon={icon} className={'w-1/2'} />
        <CityName
          name={name}
          className={'block text-xl font-extrabold'}
        />
        <TemperatureRange
          temperatureRange={temperatureRange}
          className={'block text-sm'}
        />
      </div>
    </div>
  );
};

export default OtherCIty;

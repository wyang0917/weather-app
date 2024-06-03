import React from 'react';
import TemperatureRange from '../../../../../TemperatureRange';
import WeatherIcon from '../../../../../WeatherIcon';

const ForecastDay = ({ FormatDay, FormatDate, icon, temperatureRange }) => {
  return (
    <div className="flex flex-col items-center justify-around w-1/5">
      <div className='flex flex-col items-center'>
      <span className={'block text-2xl font-extrabold max-lg:text-xl'}>{FormatDay}</span>
      <span className={'block text-sm'}>{FormatDate}</span>
      </div>
      <WeatherIcon icon={icon} className={'w-2/3'} />
      <TemperatureRange
        temperatureRange={temperatureRange}
        className={'block -mt-2 text-sm'}
      />
    </div>
  );
};

export default ForecastDay;

import React from 'react';
import bg from '../../../../assets/background/Cloudy_day_background.png';
// import icon from '../../../../assets/weather_icon/Cloudy.png';
import CurrentDate from './components/CurrentDate';
import CityName from '../../../CityName';
import Temperature from './components/Temperature';
import TemperatureRange from '../../../TemperatureRange';
import WeatherIcon from '../../../WeatherIcon';
import Meta from './components/Meta';

const CurrentCity = ({temp, minTemp, maxTemp, icon,humidityDesc,windDesc,PMIconDesc,somatosensoryIconDesc}) => {

  const formatCurrentCityDate = (date) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return date.setZone(userTimeZone).toFormat('dd MMMM,\xa0\xa0cccc hh:mm');
  };

  return (
    <div className="bg-blue-500 w-1/3 rounded-2xl relative py-3 px-3 text-white flex flex-col justify-between items-center	 overflow-hidden box-border max-md:w-full">
      <img src={bg} alt="cloudy" className="absolute top-0 right-0" />
      <CurrentDate
        FormatDate={formatCurrentCityDate}
        className="text-sm block"
      />
      <CityName
        className={'text-2xl font-extrabold block my-8'}
        name={`Shanghai`}
      />
      <Temperature
        className={'text-7xl font-extrabold block'}
        temperature={temp}
      />
      <TemperatureRange
        className={'text-sm block'}
        temperatureRange={`${minTemp} ~ ${maxTemp}`}
      />
      <WeatherIcon className={'my-12 w-1/3'} icon={icon} />
      <Meta
        className={
          'bg-white rounded-xl w-full text-black font-medium text-sm py-3'} humidityDesc={humidityDesc} windDesc={windDesc} PMIconDesc={PMIconDesc} somatosensoryIconDesc={somatosensoryIconDesc}
        
      />
    </div>
  );
};

export default CurrentCity;

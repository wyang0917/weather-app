import React from 'react';
import { DateTime } from 'luxon';
import {v4 as uuid} from 'uuid'

import ForecastDay from './components/ForecastDay';

const Forecast = ({ forecastDayTempRange }) => {
  const day = DateTime.now();
  const formatForecastDay = (day, dayFromNow) => {
    return day.plus({ days: dayFromNow }).toFormat('cccc');
  };
  const formatForecastDate = (day, dayFromNow) => {
    return day.plus({ days: dayFromNow }).toFormat('dd MMMM');
  };
  
  const forecastDays = [
    {
      FormatDay: formatForecastDay(day, 1),
      FormatDate: formatForecastDate(day, 1),
      icon: forecastDayTempRange[0].icon,
      temperatureRange: `${forecastDayTempRange[0].minTemp} ~ ${forecastDayTempRange[0].maxTemp}°`,
    },
    {
      FormatDay: formatForecastDay(day, 2),
      FormatDate: formatForecastDate(day, 2),
      icon: forecastDayTempRange[1].icon,
      temperatureRange: `${forecastDayTempRange[1].minTemp} ~ ${forecastDayTempRange[1].maxTemp}°`,
    },
    {
      FormatDay: formatForecastDay(day, 3),
      FormatDate: formatForecastDate(day, 3),
      icon: forecastDayTempRange[2].icon,
      temperatureRange: `${forecastDayTempRange[2].minTemp} ~ ${forecastDayTempRange[2].maxTemp}°`,
    },
    {
      FormatDay: formatForecastDay(day, 4),
      FormatDate: formatForecastDate(day, 4),
      icon: forecastDayTempRange[3].icon,
      temperatureRange: `${forecastDayTempRange[3].minTemp} ~ ${forecastDayTempRange[3].maxTemp}°`,
    },
  ];

  return (
    <div className="flex justify-between max-md:flex-wrap h-1/2 pb-3 font-medium max-md:mx-auto ">
      {forecastDays.map((forecastDay, index) => (
        <ForecastDay
          key={uuid()}
          FormatDay={forecastDay.FormatDay}
          FormatDate={forecastDay.FormatDate}
          icon={forecastDay.icon}
          temperatureRange={forecastDay.temperatureRange}
        />
      ))}
    </div>
  );
};

export default Forecast;

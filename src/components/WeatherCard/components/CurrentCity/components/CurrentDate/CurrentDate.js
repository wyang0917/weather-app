import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

const CurrentDate = ({ FormatDate, className }) => {
  console.log('date rendered');
  const [date, setDate] = useState(DateTime.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(DateTime.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const NewDate = FormatDate(date);
  return <time className={className}>{NewDate}</time>;
};

export default CurrentDate;

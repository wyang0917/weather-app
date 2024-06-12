import React from 'react';
import humidityIcon from '../../../../../../assets/meta_icon/humidity.svg';
import PMIcon from '../../../../../../assets/meta_icon/PM2.5.svg';
import somatosensoryIcon from '../../../../../../assets/meta_icon/Somatosensory_temperature.svg';
import windIcon from '../../../../../../assets/meta_icon/wind_speed.svg';

const Meta = ({
  className,
  humidityDesc,
  windDesc,
  PMIconDesc,
  somatosensoryIconDesc,
}) => {
  const infos = [
    {
      icon: humidityIcon,
      desc: `${humidityDesc}%`,
      alt: 'humidityIcon',
      title: 'humidity',
    },
    {
      icon: windIcon,
      desc: `${Math.round(windDesc)}km/h`,
      alt: 'windIcon',
      title: 'wind speed',
    },
    { icon: PMIcon, desc: PMIconDesc, alt: 'PMIcon', title: 'air quality' },
    {
      icon: somatosensoryIcon,
      desc: `${somatosensoryIconDesc}°`,
      alt: 'somatosensoryIcon',
      title: 'feels like',
    },
  ];
  return (
    <ul className="flex justify-around bg-white rounded-xl w-full text-black font-medium text-sm py-3 cursor-pointer">
      {infos.map((info, index) => (
        <li key={index} className="text-center" title={info.title}>
          <img src={info.icon} alt={info.alt} className="mx-auto" />
          <span>{info.desc}</span>
        </li>
      ))}
    </ul>
  );
};

export default Meta;

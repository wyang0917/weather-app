import React from 'react'
import humidityIcon from '../../../../../../assets/meta_icon/humidity.svg'
import PMIcon from '../../../../../../assets/meta_icon/PM2.5.svg'
import somatosensoryIcon from '../../../../../../assets/meta_icon/Somatosensory_temperature.svg'
import windIcon from '../../../../../../assets/meta_icon/wind_speed.svg'

const Meta = ({className,humidityDesc,windDesc,PMIconDesc,somatosensoryIconDesc}) => {
  const infos = [
    {icon:humidityIcon,desc:`${humidityDesc}%`,alt:'humidityIcon'},
    {icon:windIcon,desc:`${Math.round(windDesc)}km/h`,alt:'windIcon'},
    {icon:PMIcon,desc:PMIconDesc,alt:'PMIcon'},
    {icon:somatosensoryIcon,desc:`${somatosensoryIconDesc}°`,alt:'somatosensoryIcon'},
  ]
  return (
    <div className={className}>
      <ul className='flex justify-around'>
        {infos.map((info,index)=>(
          <li key={index} className='text-center'>
            <img src={info.icon} alt={info.alt} className="mx-auto" />
            <span>{info.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Meta
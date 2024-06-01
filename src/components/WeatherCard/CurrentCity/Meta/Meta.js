import React from 'react'
import humidityIcon from '../../../../assets/meta_icon/humidity.svg'
import PMIcon from '../../../../assets/meta_icon/PM2.5.svg'
import somatosensoryIcon from '../../../../assets/meta_icon/Somatosensory_temperature.svg'
import windIcon from '../../../../assets/meta_icon/wind_speed.svg'

const Meta = ({className}) => {
  const infos = [
    {icon:humidityIcon,desc:"85%"},
    {icon:windIcon,desc:"9km/h"},
    {icon:PMIcon,desc:"75µg"},
    {icon:somatosensoryIcon,desc:"26°"},
  ]
  return (
    <div className={className}>
      <ul className='flex justify-around'>
        {infos.map((info,index)=>(
          <li key={index} className=''>
            <img src={info.icon} alt={`icon${index+1}`} className="mx-auto"></img>
            <span>{info.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Meta
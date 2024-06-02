import React, {useState,useEffect} from 'react'
import moment from 'moment'

const CurrentDate = ({FormatDate,className}) => {
  console.log('date rendered');
  const [date,setDate]=useState(moment())
  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(moment())
    },1000)
    return ()=>clearInterval(interval)
  },[])
  const NewDate = FormatDate(date)
  return (
    <time className={className}>{NewDate}</time>
  )
}

export default CurrentDate
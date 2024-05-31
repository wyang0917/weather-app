import React, {useState,useEffect} from 'react'
import moment from 'moment'

const CurrentDate = () => {
  const [date,setDate]=useState(moment())
  useEffect(()=>{
    const interval = setInterval(()=>{
      setDate(moment())
    },1000)
    return ()=>clearInterval(interval)
  },[])
  return (
    <div>{date.format('D MMMM, dddd hh:mm')}</div>
  )
}

export default CurrentDate
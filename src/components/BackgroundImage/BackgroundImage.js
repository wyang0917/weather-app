import React from 'react'
import bg from '../../assets/background.png'

const BackgroundImage = ({children}) => {
  return (
    <div className="min-h-screen bg-cover flex items-center font-alimama bg-gradient-to-r from-sky-500 to-indigo-500 w-full">
      <img src={bg}  alt='cloud' className='absolute bottom-0 right-0'></img>
      {children}
    </div>
  )
}

export default BackgroundImage
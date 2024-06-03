import React from 'react'
import bg from '../../assets/background.png'

const BackgroundImage = ({children}) => {
  return (
    <div className="min-h-screen bg-cover flex items-center justify-center font-alimama w-full opacity-75 bg-gradient-to-r from-indigo-300 to-indigo-600 relative">
      <img src={bg}  alt='cloud' className='fixed bottom-0 right-0 -z-10 object-contain '/>
      {children}
    </div>
  )
}

export default BackgroundImage
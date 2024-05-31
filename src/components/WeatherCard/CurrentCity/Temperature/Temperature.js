import React from 'react'

const Temperature = ({temperature,className}) => {
  return (
    <span className={className}>{temperature}</span>
  )
}

export default Temperature
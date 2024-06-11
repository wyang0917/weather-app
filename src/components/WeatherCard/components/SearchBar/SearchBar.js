import React, { useEffect, useState } from 'react'

const SearchBar = ({handleCityName}) => {
  const [inputText,setInputText] = useState('')
  const [error,setError] = useState('')
  //   // const regex = /^[a-zA-Z\s]*$/
  //   // if(text.trim() && regex.test(text)){
  //   //   setInputText(text)
  //   // }
  const validateText =(text)=>{
    if(!text.trim()){
      setError('City name cannot be empty.')
      return false
    }
    const regex = /^[a-zA-Z\s]*$/
    if(!regex.test(text)){
      setError('City name can only contain letters and spaces.')
      return false
    }
    setError('')
    return true
  }
    

  const handleSubmit = (event)=>{
    event.preventDefault()
    if(validateText(inputText)){
      handleCityName(inputText)
    }
    setInputText('')
  }

  useEffect(()=>{
    if(error){
      const timer = setTimeout(()=>{
        setError('')
      },2000)
      return ()=>clearTimeout(timer)
    }
  },[error])
  return (
    <form className='w-1/2 relative ml-2 max-md:w-full max-md:my-8 ' onSubmit={handleSubmit}>
      <input className='outline-none rounded-lg py-1 px-4 w-full ' placeholder='search for a city' onChange={(event)=>setInputText(event.target.value)} value={inputText}></input>
      <button className='py-0.5 px-3 text-white bg-violet-900 rounded-lg  absolute inset-y-px right-px ' type='submit'>search</button>
      {error && <p className='absolute'>{error}</p>}
    </form>
  )
}

export default SearchBar
import React from 'react'

const SearchBar = () => {
  return (
    <form className='mt-28 w-1/2 relative'>
      <input className='outline-none rounded-lg py-1 px-4 w-full' placeholder='search for a city'></input>
      <button className='py-0.5 px-3 text-white bg-violet-900 rounded-lg  absolute inset-y-px right-px '>search</button>
    </form>
  )
}

export default SearchBar
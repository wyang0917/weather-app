import React from 'react'

const SearchBar = () => {
  return (
    <form className='w-1/2 relative ml-2 max-md:w-full max-md:m-0'>
      <input className='outline-none rounded-lg py-1 px-4 w-full' placeholder='search for a city'></input>
      <button className='py-0.5 px-3 text-white bg-violet-900 rounded-lg  absolute inset-y-px right-px '>search</button>
    </form>
  )
}

export default SearchBar
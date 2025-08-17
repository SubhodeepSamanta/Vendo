import React from 'react'
import {Search} from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='bg-gray-200 shadow-md px-2 py-1 rounded-md md:flex items-center gap-2 hidden'>
        <Search className='h-5 w-5'/>
        <input type="text" id='search' className='outline-0' placeholder='Search'/>
    </div>
  )
}

export default SearchBar
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({setDarkTheme, darkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <Link to="/">
            <p className="text-2xl bg-blue-800 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-100">Google</p>  
          </Link>
          <button type="button" className="text-xl dark:bg-gray-500 dark:text-gray-200 bg-white border rounded-full px-3 py-2 hover:shadow-lg" onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? 'Light 🔆' : 'Dark 🌖'}
          </button>    
        </div>
        <Search />
    </div>
  )
}


import React from 'react'

export default function Header() {
  return (
    <>
  <div className="w-full border-b border-gray-300  bg-white">
  <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img src="src/assets/img/logo.svg" alt="Logo" className="w-30 h-17 ms-22 " />
      {/* <span className="text-xl font-bold">
        <span className="text-green-700">Farm</span>
        <span className="text-gray-800">House</span>
        <span className="text-yellow-500">Hub</span>
      </span> */}
    </div>


  

    {/* Right Side */}
    <div className="flex items-center space-x-6">
      <a href="#" className="text-lg text-gray-600 hover:text-black">List your property</a>
      
      <button className="flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2  rounded-lg shadow-md text-lg me-20 ">
        <svg className="w-5 h-5 mr-1 " fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0H3z" /></svg>
        LOGIN / SIGNUP
      </button>
    </div>
  </div>

  {/* Search Bar */}
  <div className="max-w-4xl mx-auto mt-1 mb-4 bg-white rounded-full border border-gray-300 flex items-center px-4 py-4 space-x-6">
    
    {/* Where */}
    <div className="flex-1">
      <p className="text-sm text-black-500">Where</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-black-700">Address not found</span>
        <button className="bg-gray-100 text-xs text-gray-700 px-2 py-1 rounded-full flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 018 8c0 4.418-8 10-8 10S2 14.418 2 10a8 8 0 018-8z" /></svg>
          Near Me
        </button>
      </div>
    </div>

    {/* Divider */}
    <div className="h-8 w-px bg-gray-300" />

    {/* When */}
    <div className="flex-1">
      <p className="text-sm text-black-500">When</p>
      <p className="text-sm text-black-700">May 26, 10AM - May 26, 9PM</p>
    </div>

    {/* Divider */}
    <div className="h-8 w-px bg-gray-300" />

    {/* Who */}
    <div className="flex-1">
      <p className="text-sm text-black-500">Who</p>
      <p className="text-sm text-black-700">5</p>
    </div>

    {/* Search Button */}
    <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full shadow-md">
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387-1.414 1.414-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" /></svg>
    </button>
  </div>
</div>

    </>
  )
}

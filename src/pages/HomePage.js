// src/pages/Profile.js
import React, { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto md:my-8">
      <div className='flex justify-center min-h-screen bg-gray-100'>
        {/* Sidebar */}
        <aside
          className={`bg-blue-500 text-white w-64 space-y-6 px-4 py-7 absolute inset-y-0 left-0 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}>
          <div className='flex items-center space-x-2 px-4'>
            <img
              src='https://via.placeholder.com/40'
              alt='Logo'
              className='h-8 w-8'
            />
            <span className='text-xl font-bold'>MyApp</span>
          </div>
          <nav>
            <a href='#' className='block py-2.5 px-4 rounded hover:bg-blue-600'>
              Dashboard
            </a>
            <a href='#' className='block py-2.5 px-4 rounded hover:bg-blue-600'>
              Profile
            </a>
            <a href='#' className='block py-2.5 px-4 rounded hover:bg-blue-600'>
              Settings
            </a>
            <a href='#' className='block py-2.5 px-4 rounded hover:bg-blue-600'>
              Logout
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className='flex-1 flex flex-col'>
          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-gray-500 p-4 focus:outline-none'
            onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>

          <div className='p-6'>
            <h1 className='text-2xl font-bold text-gray-800'>User Profile</h1>
            <div className='mt-6 bg-white rounded shadow-md p-4'>
              <div className='flex items-center space-x-4 mb-4'>
                <img
                  className='w-16 h-16 rounded-full object-cover'
                  src='https://via.placeholder.com/150'
                  alt='User Avatar'
                />
                <div>
                  <h2 className='text-xl font-bold text-gray-800'>John Doe</h2>
                  <p className='text-sm text-gray-600'>johndoe@example.com</p>
                </div>
              </div>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-medium text-gray-800'>
                    Full Name
                  </h3>
                  <p className='text-gray-600'>John Doe</p>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-gray-800'>Email</h3>
                  <p className='text-gray-600'>johndoe@example.com</p>
                </div>
                <div>
                  <h3 className='text-lg font-medium text-gray-800'>Phone</h3>
                  <p className='text-gray-600'>+1 234 567 890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// src/pages/Register.js
import React from "react";

function RegisterPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 font-medium mb-2'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Enter your full name'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-medium mb-2'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Create a password'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='confirm-password'
              className='block text-gray-700 font-medium mb-2'>
              Confirm Password
            </label>
            <input
              type='password'
              id='confirm-password'
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Confirm your password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'>
            Register
          </button>
        </form>
        <p className='text-sm text-center text-gray-600 mt-4'>
          Already have an account?{" "}
          <a href='#' className='text-blue-500 hover:underline'>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;

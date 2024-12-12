// src/pages/Login.js
import React from "react";

function Login() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full bg-white p-8 rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
        <form>
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
              placeholder='Enter your password'
            />
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
              <input type='checkbox' className='form-checkbox text-blue-500' />
              <span className='ml-2 text-gray-600'>Remember me</span>
            </label>
            <a href='#' className='text-sm text-blue-500 hover:underline'>
              Forgot Password?
            </a>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200'>
            Login
          </button>
        </form>
        <p className='text-sm text-center text-gray-600 mt-4'>
          Don’t have an account?{" "}
          <a href='#' className='text-blue-500 hover:underline'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

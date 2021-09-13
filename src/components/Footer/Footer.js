import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full bg-gray-800 py-4 md:py-8 lg:px-40'>
      <div className='flex flex-col justify-center items-center md:items-start md:mx-8 w-full md:w-1/3'>
        <h1 className='font-semibold text-xl text-white py-3 text-center md:text-left'>Piroll Desgin, Inc</h1>
        <p className='text-white text-center md:text-left'> &copy;2017 piroll. All rights reserved</p>
        <p className='text-white text-center md:text-left'>Designed by rubirurk</p>
      </div>
      <div className='flex flex-col md:flex-row w-full md:mx-4 md:w-1/3 py-3'>
        <div className=''>
          <h3 className='text-white text-center'>hello@pirolltheme.com</h3>
          <h3 className='text-white text-center'>+ 92 849 3439 103</h3>
        </div>
        <div className='flex justify-center items-center md:justify-end text-white lg:px-24 '>
          <div className='px-2'>
            <h6>Projects</h6>
            <h6>About</h6>
            <h6>Services</h6>
            <h6>Careers</h6>
          </div>
          <div className='px-2'>
            <h6>News</h6>
            <h6>Events</h6>
            <h6>Contact</h6>
            <h6>Legals</h6>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-white w-full md:w-1/3'>
        <h6>Facebook</h6>
        <h6>Instagram</h6>
        <h6>Dribble</h6>
        <h6>Twitter</h6>
      </div>
    </div>
  )
}

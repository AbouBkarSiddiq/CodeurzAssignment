import React from 'react'

import sign from '../../assets/images/sign.jpg'
import Skills from '../Skills/Skills'

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen py-16 overflow-x-hidden lg:py-24' id="aboutus">
      <h2 className='font-bold text-xl md:text-3xl py-2 lg:py-4'>About Us</h2>
      <p className='text-sm md:text-2xl text-center text-gray-700 md:w-1/2 py-2 px-3'>Divide have don't man wherein air fourth, Own itself make have night won't make A you under Seed Appear which good give Own give air without fowl move dry first heaven fruit, dominion she'd won't very well.</p>
      <img src={sign} alt='' className='' />
      <Skills />
    </div>
  )
}

export default AboutUs

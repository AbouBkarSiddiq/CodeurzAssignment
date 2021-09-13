import React from 'react'

import skills from '../../assets/data/skills'
import SimpleSlider from '../Carousel/Carousel'
import Grid from '../Grid/Grid'
import Video from '../Video/Video'

export default function WorkProcess() {
  return (
    <div className='flex flex-col' id="process">
      <div className='flex flex-col justify-center items-center w-screen py-16'>
        <h3 className='font-bold text-3xl py-4'>Our Work Process</h3>
        <p className='text-sm md:text-xllg:text-2xl text-center md:w-1/2 py-4'>Was years its season was there form he in in them together over that, third sixth gathered female creeping bearing behold years.</p>
      </div>
      <div className='flex justify-center items-center'>
        <Video />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 py-8 lg:py-16' id="services">
        {skills.map((skill) => (
          <div className='flex flex-col justify-center items-center py-2'>
            <div className=''>
              <img src={skill.image} alt='' className='w-12 h-12' />
            </div>
            <h2 className='text-center w-1/2 font-semibold text-sm py-2'>{skill.name}</h2>
            <p className='text-center px-8 lg:w-2/3'>{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="lg:py-16" id="testimonial">
        <SimpleSlider />
      </div>
      <div>
        <Grid />
      </div>
    </div>
  )
}

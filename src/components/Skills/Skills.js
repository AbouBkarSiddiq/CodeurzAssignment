import React from 'react'

import ProgressBar from '../ProgressBar'
import skills from '../../assets/images/skills.jpg'

const Skills = () => {
  
  return (
    <div className='flex flex-col md:justify-center w-screen h-screen object-contain px-4' style={{ background: `transparent url(${skills}) no-repeat scroll center`, backgroundSize: "cover" }}>
      <div className='lg:pl-56'>
        <h1 className='font-bold text-xl md:text-3xl py-2'>PROFESSIONAL SKILLS</h1>
        <ProgressBar width="75%" skill='UI/UX DESIGN 75%' />
        <ProgressBar width="90%" skill='WEB DEVELOPMENT 75%' />
        <ProgressBar width="65%" skill='MARKETING 75%' />
      </div>
    </div>
  )
}

export default Skills

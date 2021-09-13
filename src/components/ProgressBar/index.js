import React from 'react'

export default function ProgressBar({width, skill}) {
  return (
    <div className=''>
      <h1 className='font-bold text-sm mt-2'>{skill}</h1>
      <div className="h-1 relative max-w-xl overflow-hidden mt-4">
        <div className="w-full h-full bg-gray-300 absolute"></div>
        <div className="h-full bg-green-500 absolute" style={{ width: width }}></div>
      </div>
    </div >
  )
}


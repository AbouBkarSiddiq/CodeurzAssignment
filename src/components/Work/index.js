import React from 'react'

import works from '../../assets/data/works'
import products from '../../assets/data/products'

export default function Work() {
  return (
    <div className='flex flex-col lg:py-16' id="work">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8' style={{ backgroundColor: '#00ccff' }}>
        {
          works.map((work) => (
            <div className='flex justify-center items-end px-12 py-8'>
              <div className='px-2 py-2'>
                <img src={work.image} alt='' className='w-8 h-8 ' />
              </div>
              <div className='px-2 py-2'>
                <p className='font-Manrope font-bold text-white '>{work.stats}</p>
                <p className='font-Manrope font-bold text-xs text-white '>{work.name}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {
            products.map((p) => (
              <div>
                <img src={p.image} alt='' />
              </div>
            ))
          }
        </div>
        <div className='flex justify-center items-center bg-gray-100 py-8'>
          <button className='text-sm font-bold text-gray-600'>LOAD MORE WORK</button>
        </div>
      </div>
    </div>
  )
}

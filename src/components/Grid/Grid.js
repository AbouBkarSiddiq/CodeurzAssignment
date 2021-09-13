import React from 'react'

import brands from '../../assets/data/brands'

export default function Grid() {
  return (
    <div className='flex justify-center items-center md:justify-between lg:px-80'>
      {brands.map((brand) => (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
          <img src={brand.image} alt='' />
        </div>
      ))}      
    </div>
  )
}

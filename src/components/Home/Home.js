import React from 'react'
import { Link } from 'react-scroll'
import chair1 from '../../assets/images/chair1.jpg'
const Home = () => {
  return (
    <div className='flex relative h-screen w-screen' style={{ background: `transparent url(${chair1}) no-repeat scroll center`, backgroundSize: "cover" }} id="home">
      <div className='flex flex-col justify-center items-center px-12 md:items-end'>
        <h2 className='font-bold text-xl md:text-3xl lg:text-4xl text-center md:text-left md:w-1/2 lg:w-2/5'>We Design and Develop</h2>
        <p className='text-sm md:text-2xl text-center text-gray-600 md:text-left md:w-1/2 lg:w-2/5 py-4'>We are new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps. </p>
        <div className='md:w-1/2 lg:w-2/5 text-sm text-white rounded-md py-4'>
          <Link className='font-semibold md:font-bold text-sm py-3 px-4 lg:px-6 cursor-pointer' to="form" smooth={true} duration={1000} sm style={{ backgroundColor: '#00ffff' }}>CONTACT US</Link>
        </div>
      </div>
    </div>
  )
}

export default Home

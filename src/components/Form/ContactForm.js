import React from 'react'

export default function ContactForm() {
  return (
    <div className='flex flex-col justify-center items-center w-screen bg-gray-100 py-12 md:py-16 px-6' >
      <h2 className='font-bold text-3xl py-4'>Need a Project ?</h2>
      <p className='font-normal text-xl text-center md:w-1/2 lg:w-1/3 md:py-4'>Let us know what are you looking for in an agency. We will take a look and see if this could be the start of something beautiful.</p>
      <form className='flex flex-col justify-center w-full lg:w-3/5 md:px-24 items-center' id="form">
        <div className='flex flex-col justify-center items-center md:flex-row w-full -mx-2'>
          <input type="text" name="name" placeholder="Your Name" required className="py-2 lg:py-3 px-2 w-full my-2 md:mr-4 rounded-sm" />
          <input type="text" name="name" placeholder="Your Email" required className="py-2 lg:py-3 px-2 w-full my-2 rounded-sm" />
        </div>
        <div className='flex flex-col justify-center items-center mx-6 w-full'>
          <input type="text" name="name" placeholder="Your Title" required className="py-2 lg:py-3 px-2 w-full my-2 rounded-sm" />
          <div className='w-full py-4'>
            <textarea className='w-full pb-12 lg:pb-28 px-2' placeholder='Your comment' required>
            </textarea>
          </div>
          <button className='py-4 px-4 text-white font-bold lg:py-5 lg:px-12' style={{ backgroundColor: '#00ffff' }}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

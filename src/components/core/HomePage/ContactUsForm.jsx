import React from 'react'

function ContactUsForm() {
  return (
    <form className='flex flex-col gap-y-10 w-[486px]'>
        <div className='flex flex-col gap-y-2'>
            <label className='text-lg'>Name Of Gym</label>
            <input className=' outline-none border-b-2 border-gray-600 bg-black px-2' />
        </div>
        <div className='flex flex-col gap-y-2'>
            <label className='text-lg'>Location</label>
            <input className=' outline-none border-b-2 border-gray-600 bg-black px-2' />
        </div>
        <div className='flex flex-col gap-y-2'>
            <label className='text-lg'>Your Name</label>
            <input className=' outline-none border-b-2 border-gray-600 bg-black px-2' />
        </div>
        <div className='flex flex-col gap-y-2'>
            <label className='text-lg'>Contact</label>
            <input className=' outline-none border-b-2 border-gray-600 bg-black px-2' />
        </div>
        <div className='flex flex-col gap-y-2'>
            <label className='text-lg'>Email</label>
            <input type='email' className=' outline-none border-b-2 border-gray-600 bg-black px-2' />
        </div>
        <div className=''>
            <button className='py-1 px-2 bg-white rounded-full text-black font-semibold'>Contact Us</button>
        </div>
    </form>
  )
}

export default ContactUsForm;

import React from 'react'
import ContactUsForm from './ContactUsForm';

function ContactUs() {
  return (
    <div className='mt-30 bg-black w-full'>
        <div className='max-w-[1277px] w-11/12 mx-auto flex items-center justify-between text-white py-36'>
            <div className='flex flex-col lg:w-[620px] gap-y-10'>
                <p className='text-4xl uppercase font-semibold'>Want to install FitSnap AI Camera in your GYM .Please submit your details below.</p>
                <p className='text-lg lg:w-[400px] font-semibold'>Want to install FitSnap AI Camera in your GYM ? Please submit your details below.</p>
            </div>
            <div>
                <ContactUsForm />
            </div>
        </div>
    </div>
  )
}

export default ContactUs;

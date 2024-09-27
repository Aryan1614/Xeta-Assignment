import React from 'react';
import thingsNeed from '../../../assets/thingsNeed.jpg';
import { IoMdArrowForward, IoMdCheckmarkCircleOutline } from 'react-icons/io';

function ThingsNeed() {

    const points = [
        {
            id:1,
            name:"24*7 AI Trainer"
        },
        {
            id:2,
            name:"Unlimited Access"
        },
        {
            id:3,
            name:"150+ Exercise"
        },
        {
            id:4,
            name:"Customized Plans"
        },
        {
            id:5,
            name:"Advanced AI Camera"
        },
        {
            id:6,
            name:"Voice Feedback"
        },
        {
            id:7,
            name:"Complete Plans"
        },
        {
            id:8,
            name:"Real Time Feedback"
        },
        {
            id:9,
            name:"Rep Counter"
        },
        {
            id:10,
            name:"Saved Workout Videos"
        },
        {
            id:11,
            name:"Activity History"
        },
        {
            id:12,
            name:"Voice Commands"
        },
    ];

  return (
    <div className='mt-36 mb-36'>
      <div className='text-center'>
        <h1 className='uppercase text-6xl font-semibold'>Things You Need</h1>
      </div>
      <div className='relative -z-40 mt-14 '>
        <img src={thingsNeed} alt='logo' className='h-[925px] backdrop-blur-sm bg-white opacity-60 w-full object-cover -z-10' /> 
        <div className='flex items-center absolute bg-opacity-100 text-black top-20 lg:left-[200px]'>
            <p className='text-black text-2xl font-semibold mr-4'>Headphones</p>
            <div className='border-2 border-black lg:w-[190px]' />
            <div className='bg-gray-500 rounded-full p-2'>
                <div className='bg-black rounded-full p-3' />
            </div>
        </div>
        <div className='flex items-center absolute bg-opacity-100 text-black bottom-60 lg:right-[330px]'>
            <p className='text-black text-2xl font-semibold mr-4'>A Tab with FitSnap</p>
            <div className='border-2 border-black lg:w-[190px]' />
            <div className='bg-gray-500 rounded-full p-2'>
                <div className='bg-black rounded-full p-3' />
            </div>
        </div>
        <div className='flex items-center absolute bg-opacity-100 text-black bottom-2 lg:left-[190px]'>
            <p className='text-black text-2xl font-semibold mr-4'>Fitness band</p>
            <div className='border-2 border-black lg:w-[190px]' />
            <div className='bg-gray-500 rounded-full p-2'>
                <div className='bg-black rounded-full p-3' />
            </div>
        </div>
      </div>
      <div>
        <p className='text-[120px] text-center italic text-wrap font-light uppercase'>Revolutionize your gym</p>
      </div>
      <div className='mx-auto mt-20'>
        <div>
            <h1 className='text-center uppercase text-6xl font-semibold'>Lorem ipsum</h1>
        </div>
        <div className='max-w-[1000px] w-11/12 mx-auto flex lg:flex-row lg:items-center justify-between gap-x-10 flex-col mt-10'>
            <div className='border w-[300px] rounded-xl border-[#1E1C95] py-5 px-6 justify-between gap-y-2 flex flex-col'>
                {
                    points.map((point,index) => (
                        <div className='flex items-center justify-between' key={index}>
                            <p className='font-semibold text-md'>{point?.name}</p>
                            <IoMdCheckmarkCircleOutline className='text-[#1E1C95] text-xl font-bold' />
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col justify-between w-[440px] gap-y-8 lg:mr-36'>
                <p className=' font-medium text-xl'>To benefits of all the features of FitSnap, the ideal tablet featuring 8GB RAM and an immersive 11-inch screen should offer a balance of performance, display quality</p>
                <button className='flex flex-row items-center text-[#1E1C95] py-1 text-lg px-2 border-[#1E1C95] border rounded-full w-fit gap-x-2'>
                    <p>Download Brochure</p>
                    <IoMdArrowForward className='-rotate-45' />
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThingsNeed;

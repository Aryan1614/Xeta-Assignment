import React from 'react';
import logo from '../../assets/Logo.png';
import { LiaFacebookF } from 'react-icons/lia';
import { FaYoutube } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImLinkedin } from 'react-icons/im';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-black w-full text-white pb-20'>
      <div className='w-[1200px] mx-auto flex flex-row items-center justify-between px-10 py-5'>
        <div className='flex flex-col'>
            <div className='w-[201px] h-[41px] mb-16'>
                <img src={logo} alt='logo' className='object-cover' /> 
            </div>
            <div className='flex flex-col gap-y-3 lg:ml-5 mt-10'>
                <h1 className='text-3xl font-semibold'>Get FitSnap</h1>
                <p className='text-sm w-[380px]'>Be the first to test the first AI personal trainer, ever! Keep up to
date with the launch, new workouts and further details by joining
our mailing list.</p>
            </div>
            <div className='flex items-center gap-x-2 text-sm lg:ml-4 mt-4'>
                <LiaFacebookF />
                <FaYoutube />
                <FiInstagram />
                <ImLinkedin />
            </div>
        </div>
        <div className='w-[656px] flex flex-row mt-10 justify-between items-start'>
            <div>
                <div className='flex flex-col'>
                    <h1 className='font-semibold text-lg'>Download The App</h1>
                    <nav className='flex flex-col gap-y-2 mt-2'>
                        <Link>Android - Google Play Store</Link>
                        <Link>iOS - Apple App Store</Link>
                    </nav>
                </div>
                <div className='flex flex-col gap-y-2 mt-8'>
                    <h1 className='font-semibold text-lg'>Contact</h1>
                    <p>Etiam consequat sem ullamcorper, euismodmetus sit </p>
                    <div>+91 0000000000</div>
                </div>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h1 className='font-semibold text-lg'>Company</h1>
                <nav className='flex flex-col gap-y-2 mt-2'>
                    <Link>About us</Link>
                    <Link>Terms & Conditions</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Community Guidelines</Link>
                </nav>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

import React from 'react'
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

function NavBar() {

    const navbarLinks = [
        {
            id:1,
            name:"Lorem ipsum",
            path:"/xyz"
        },
        {
            id:2,
            name:"Lorem ipsum",
            path:"/xyz"
        },
        {
            id:3,
            name:"Lorem ipsum",
            path:"/xyz"
        },
        {
            id:4,
            name:"Dashboard",
            path:"/dashboard/client"
        },
    ];

  return (
    <div className='h-[83px] absolute top-0 flex items-center w-screen inset-0 z-50 backdrop-blur-sm bg-white bg-opacity-30'>
        <div className='flex items-center justify-between w-full px-[25px] mx-auto z-20'>
            <div className=''>
                <Link to={"/"}>
                    <img src={logo} width={188} height={79} alt='logo' />
                </Link>
            </div>
            <div className='text-lg font-inter text-black flex items-center gap-x-[34px]'>
                {
                    navbarLinks.map((link,index) => (
                        <Link to={link?.path} key={index} className='hover:text-[#20203a] text-white hover:underline'>
                            {link?.name}
                        </Link>
                    ))
                }
            </div>
            <div>
                <Link to={"/contact"} className='border rounded-full py-1 px-4 border-[#13118F] text-[#13118F] text-lg'>
                    Contact Us
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar;
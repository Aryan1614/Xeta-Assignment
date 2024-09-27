import React, { useState } from 'react'
import SideBar from '../components/core/Dashboard/SideBar';
import { Outlet } from 'react-router-dom';
import DashNavbar from '../components/core/Dashboard/DashNavbar';

function DashBoard({clientName,setClientName}) {
  const[active,setActive] = useState(true);
  
  return (
    <div className='overflow-hidden flex flex-row items-center overflow-x-hidden'>
      <div className={`slideInOut h-screen  ${active ? "visible" : "hidden"}`}>
        <SideBar />
      </div>
      <div className={`${active ? "w-full" : "w-screen"} border flex flex-col`}>
        <div>
          <DashNavbar clientName={clientName} setClientName={setClientName} active={active} setActive={setActive} />
        </div>  
        <div className='h-[calc(100vh-57px)] w-full px-6 py-4 bg-[#d4d4d4]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashBoard;

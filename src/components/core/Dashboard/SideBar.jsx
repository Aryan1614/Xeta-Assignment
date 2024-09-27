import React from 'react'
import { LuPlus } from 'react-icons/lu';
import SideBarLinks from './SideBarLinks';

function SideBar() {

    const sideBarLinks = [
        {
            id: 1,
            name: "Dashboard",
            Icon: "MdDashboard",
            Path: "/dashboard/main"
        },
        {
            id: 2,
            name: "My Profile",
            Icon: "FaUserLarge ",
            Path: "/dashboard/profile"
        },
        {
            id: 3,
            name: "My Client",
            Icon: "FaUserGroup",
            Path: "/dashboard/client"
        },
        {
            id: 4,
            name: "Report",
            Icon: "TbReport",
            Path: "/dashboard/report"
        },
        {
            id: 5,
            name: "My Diet Plan",
            Icon: "RiCalendarTodoFill",
            Path: "/dashboard/diet-plan"
        },
        {
            id: 6,
            name: "Create Diet Plan",
            Icon: "GrPlan",
            Path: "/dashboard/create-plan"
        },
        {
            id: 7,
            name: "Chat",
            Icon: "BsChatLeftDotsFill",
            Path: "/dashboard/chat"
        },
        {
            id: 8,
            name: "Search Food",
            Icon: "ImSpoonKnife",
            Path: "/dashboard/food"
        },
        {
            id: 9,
            name: "Settings",
            Icon: "IoIosSettings",
            Path: "/dashboard/settings"
        },
    ];

  return (
    <div className='w-[300px] px-2 py-6'>
      <p className='bg-[#FAA057] w-[230px] rounded-sm py-2 flex items-center justify-center font-semibold text-white text-xl mx-auto'>Dietsnap.fit</p>
      <button className='gap-x-2 bg-[#FAA057] w-[180px] rounded-md text-md text-white py-2 mt-10 mx-auto flex items-center justify-center'>
        <div><LuPlus /></div>
        <div>Add New Entry</div>
      </button>
      <div className='mx-auto mt-10 w-[210px] flex flex-col gap-y-2'>
        {
            sideBarLinks.map((link) => (
                <SideBarLinks link={link} IconName={link?.Icon} key={link?.id} />
            ))
        }
      </div>
    </div>
  )
}

export default SideBar;

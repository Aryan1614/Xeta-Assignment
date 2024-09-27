import React, { useEffect, useState } from 'react'
import { FaBell, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useLocation, useNavigate } from 'react-router-dom';
import { clientData } from '../../../data/clientsData';

function DashNavbar({active,setActive,clientName,setClientName}) {
    const location = useLocation();
    const array = location.pathname.split("/");
    const name = array[array.length - 1];

    const navigate = useNavigate();
    const [searchData,setSearchData] = useState("");
    const [allData,setAllData] = useState(clientData);

    const setUser = (user) => {
      setClientName(user);
    }

    const HandleClientChange = (client) => {
      setClientName(client);
      setSearchData("");
    }

    useEffect(() => {
      const filteredAndSortedData = clientData
      .filter((client) =>
        client.name.toLowerCase().includes(searchData.toLowerCase())
      ) // Filter based on search query
      .sort((a, b) => a.name.localeCompare(b.name));
      setAllData(filteredAndSortedData);
    },[searchData]);
    
  return (
    <div className='w-full h-[57px] flex items-center justify-between px-10 border'>
      <div className='flex items-center gap-x-5'>
        <div className='text-2xl cursor-pointer' onClick={() => setActive(!active)}><GiHamburgerMenu /></div>
        <div className='text-xl font-semibold uppercase'>{name} Page</div> 
      </div>
      
      <div className={`flex items-center gap-x-4 ${name === "client" ? "visible" : "hidden"}`}>
        <div className='relative w-[250px]'>
            <input type='text' placeholder='Search client by Name' value={searchData} onChange={(e) => setSearchData(e.target.value)} className='relative rounded-sm border w-full outline-none px-10 py-1 ' />
            <FaSearch className='absolute top-2 left-3' />
            <div className={`absolute -bottom-36 ${searchData.length > 0 ? "visible" : "hidden"} p-5 rounded-md left-0 w-[250px] bg-white border flex flex-col`}>
              {
                allData.length === 0 && (
                  <div>User Not Found...</div>
                )
              }
              {
                allData?.map((client,index) => (
                  <div className='flex cursor-pointer items-center text-lg font-semibold' key={index} onClick={() => HandleClientChange(client)}>
                    {client?.name}
                  </div>
                ))
              }
            </div>
        </div>
        <div className='cursor-pointer' onClick={() => navigate("/dashboard/notifications")}>
          <FaBell />
        </div>
        <div className='flex flex-row items-center gap-x-2'>
            <div className='w-10 h-10'>
                <img src={clientName?.image} alt='user' className='' />
            </div>
            <div>
                <h1>{clientName?.name}</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DashNavbar;

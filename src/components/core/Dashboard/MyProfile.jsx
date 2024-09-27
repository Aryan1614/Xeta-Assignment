import React from 'react'
import { useNavigate } from 'react-router-dom'

function MyProfile() {
  const navigate = useNavigate();
  return (
    <div className='w-[calc(100vw-300px)] h-[calc(100vh-57px)] flex flex-col justify-center items-center'>
      <p className='text-4xl font-semibold'>Check Out Client Page</p>
      <button className='underline text-blue-600 mt-4 text-lg font-semibold' onClick={() => navigate("/dashboard/client")}>Click Here</button>
    </div>
  )
}

export default MyProfile

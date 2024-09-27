import React, { useEffect, useState } from 'react'
import { BsFire } from 'react-icons/bs';
import { FaApple, FaFilter, FaHamburger } from 'react-icons/fa';
import { GiChickenLeg } from 'react-icons/gi';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

function MyClient({clientName,setClientName}) {

  const[filters,setFilters] = useState([]);
  const[filterMealsData,setFilterMealsData] = useState(clientName?.FoodEntries);

  const dataset = [
    {
      weight:46,
      goal:48
    },
    {
      weight:48,
      goal:49
    },
    {
      weight:50,
      goal:55
    },
    {
      weight:55,
      goal:58
    },
    {
      weight:55,
      goal:62
    },
    {
      weight:60,
      goal:65
    },
    {
      weight:62,
      goal:70
    },
  ];

  const chartSetting = {
    width: 850,
    height: 200,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };

  return (
    <div className='w-full h-full flex flex-col gap-y-4 overflow-hidden'>
      <div className='grid grid-cols-4 gap-x-5 w-full grid-rows-1'>
        <div className=' bg-white h-[120px] flex items-center justify-center rounded-sm'>
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center justify-center h-16 w-16 bg-[#d2e8ff] rounded-sm'>
              <BsFire className='text-[#FACD57] text-2xl' />
            </div>
            <div className='text-xl font-semibold'>
              <p>{clientName?.avgData?.calories}</p>
              <p className='text-gray-500'>Avg. calories</p>
            </div>
          </div>
        </div>
        <div className=' bg-white h-[120px] flex items-center justify-center rounded-sm'>
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center justify-center h-16 w-16 bg-[#d2e8ff] rounded-sm'>
              <GiChickenLeg className='text-[#FA8157] text-2xl' />
            </div>
            <div className='text-xl font-semibold'>
              <p>{clientName?.avgData?.Proteins}</p>
              <p className='text-gray-500'>Avg. Proteins</p>
            </div>
          </div>
        </div>
        <div className=' bg-white h-[120px] flex items-center justify-center rounded-sm'>
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center justify-center h-16 w-16 bg-[#FEFAF1] rounded-sm'>
              <FaApple className='text-[#AF5A3D] text-2xl' />
            </div>
            <div className='text-xl font-semibold'>
              <p>{clientName?.avgData?.Carbs}</p>
              <p className='text-gray-500'>Avg. Carbs</p>
            </div>
          </div>
        </div>
        <div className=' bg-white h-[120px] flex items-center justify-center rounded-sm'>
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center justify-center h-16 w-16 bg-[#ecddb8] rounded-sm'>
              <FaHamburger className='text-[#3D73AF] text-2xl' />
            </div>
            <div className='text-xl font-semibold'> 
              <p>{clientName?.avgData?.Fats}</p>
              <p className='text-gray-500'>Avg. Fats</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between w-full'>
        <div className='h-[260px] w-[75%] bg-white flex flex-col gap-y-2 rounded-md px-6 py-3'>          
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-semibold'>Body Weight</h1>
            <div className='flex items-center gap-x-10 pr-8'>
              <div className='flex items-center gap-x-2 w-[24px]'>
                <p className='rounded-full p-1 bg-[#FAA057]'></p>
                <p>weight (Kg)</p>
              </div>
              <div className='flex items-center gap-x-2 w-[24px] pl-2'>
                <p className='rounded-full p-1 bg-[#FAA057]'></p>
                <p>Goal (Kg)</p>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <BarChart 
              dataset={clientName?.bodyWeight}
              series={[
                { dataKey: 'weight', label: 'weight' },
                { dataKey: 'goal', label: 'goal' },
              ]}
              {...chartSetting}
            />
          </div>
        </div>
        <div className='h-[260px] w-[24%] bg-white flex flex-col gap-y-2 rounded-md px-6 py-3'>
          <h1 className='text-2xl font-semibold'>Body Fat</h1>
          <div className='mt-2 w-[180px] h-[180px] mx-auto rounded-full border-3 border-blue-500'>
            <Swiper 
              modules={[Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {
                clientName?.FatsData.map((data,index) => (
                  <SwiperSlide className='h-full relative w-full' key={index}>
                    <CircularProgressbar minValue={0} maxValue={100} strokeWidth={6} circleRatio={0.8} className='text-[#CDDCEB] rotate-[215deg]' value={data?.value} />
                    <div className='absolute top-14 text-center left-14 text-lg font-semibold'>
                      <h1>{data?.value} %</h1>
                      <p>{data?.name}</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
      <div className='w-full h-[228px] flex items-center justify-between'>
        <div className='bg-white w-[75%] h-full rounded-md overflow-y-hidden py-3 px-6'>
          <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Food Entries</h1>
            <div><FaFilter/></div>
          </div>
          <table className='w-full mt-4 '>
            <thead className='grid grid-cols-6 grid-rows-1 bg-[#F8F4EE] px-2'>
              <td>Meal</td>
              <td>Food</td>
              <td>Calories</td>
              <td>Proteins</td>
              <td>Carbs</td>
              <td>Fats</td>
            </thead>
            <tbody className='flex flex-col gap-y-3 mt-4 overflow-y-scroll max-h-[100px]'>
              {
                clientName?.FoodEntries?.map((data,index) => (
                  <tr className='grid grid-cols-6 grid-rows-1 bg-[#CDDCEB] px-2'>
                    <td>{data?.Meal}</td>
                    <td>{data?.Food}</td>
                    <td>{data?.calories}</td>
                    <td>{data?.Proteins}</td>
                    <td>{data?.Carbs}</td>
                    <td>{data?.Fats}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className='w-[24%] h-full rounded-md bg-[#3D73AF] py-2'>
            <div className='text-white flex flex-col gap-y-2'>
              <h1 className='text-2xl pl-6 pt-2'>Miles Walked</h1>
              <p>{}</p>
            </div>
            <div>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8] }]}
                series={[
                  {
                    data: [20, 800, 1500, 1700, 740],
                  },
                ]}
                width={300}
                height={200}
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyClient;
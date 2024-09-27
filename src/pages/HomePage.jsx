import React from 'react'
import video from '../assets/video.mp4';
import image from '../assets/image.png';
import Image1 from '../assets/Hero-Section-Image1.png';
import Image2 from '../assets/Hero-Section-Image2.mp4';
import Image3 from '../assets/Hero-Section-Image3.png';
import Image4 from '../assets/Hero-Section-Image4.png';
import ClientReviews from '../components/core/HomePage/ClientReviews';
import ThingsNeed from '../components/core/HomePage/ThingsNeed';
import ContactUs from '../components/core/HomePage/ContactUs';
import Footer from '../components/common/Footer';
import bgImage from '../assets/background.png';
import { FaYoutube } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import NavBar from '../components/common/NavBar';

function HomePage() {

  const images = [Image1,Image2,Image3,Image4];

  const statsData = [
    {
      id:1,
      name:"Get Enrolled",
      value:"50+"
    },
    {
      id:2,
      name:"Users Enrolled",
      value:"250+"
    },
    {
      id:3,
      name:"Workout Sessions",
      value:"60+"
    },
  ];

  const advertiseData = [
    {
      id:1,
      image: "Image1",
      title:"Enhanced Focus on Individual Needs",
      desc:"FitSnap: Ditch bad form, embrace perfect workouts. AI analyzes your moves in real-time for flawless fitness.",
      bg:"#7D8DC7"
    },
    {
      id:2,
      image: "Image2",
      title:"Data-driven Insights",
      desc:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur.",
      bg:"#5E9ED7"
    },
    {
      id:3,
      image: "Image3",
      title:"Efficient Workouts",
      desc:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      bg:"#C46DA0"
    },
    {
      id:4,
      image: "Image4",
      title:"Preventing Injuries",
      desc:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur",
      bg:"#69996A"
    },
  ];

  return (
    <div className='w-full relative overflow-x-hidden'>
      <NavBar />
      <div className='relative'>
        <video src={video} autoPlay={true} loop={true} className='flex filter brightness-50 contrast-110 -z-40 max-h-[903px]'>
        </video>

        <div className='absolute flex flex-col top-60 text-white w-full gap-y-3'>
          <h1 className='text-6xl italic text-center font-bold font-sans'>Fitsnap for GYM</h1>
          <p className='text-center mx-auto w-[580px] font-semibold text-lg mt-6'>Welcome to the next generation of fitness! At FitSnap, we are thrilled to introduce the power of Artificial Intelligence (AI) to revolutionize your gym experience.</p>
        </div>
      </div>
      <div className='w-full flex justify-center min-h-[320px] bg-white relative border'>
        <img src={image} alt='logo' className='absolute -top-32 z-20 w-full' /> 
        <div className='max-w-[1094px] absolute top-28 w-11/12 z-40 flex flex-row items-center justify-between'>
          { 
            statsData.map((stat) => (
              <div className='flex flex-col gap-y-5 text-right'>
                <div className=' font-bold text-4xl'>{stat.value}</div>
                <div className='font-semibold text-xl'>{stat.name}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='mt-10 max-w-[1300px] w-11/12 mx-auto mb-36'>
          <div className='flex flex-col items-center gap-y-6 max-w-[940px] w-11/12 mx-auto'>
            <h1 className='text-center font-semibold text-5xl uppercase'>Why choose fitsnap</h1>
            <p className='uppercase font-semibold'>Get Realtime update with AI</p>
          </div>
          <div className='grid grid-cols-1 grid-rows-4 w-full mx-auto mt-10'>
            {
              advertiseData.map((data,index) => (
                <div className='grid grid-cols-2 grid-rows-1 h-[460px]' key={index}> 
                  <div className={`${index%2 === 0 ? "order-1" : "order-2"}`}>
                    {
                      data.id === 2 ? (
                        <video src={images[1]} className='h-full w-full object-cover' autoPlay={true} controls={false} loop={true} alt='video'></video>
                      ) : 
                      (
                        <img src={images[data.id-1]} className='h-full w-full bg-cover' alt={`image${data.id}`} />
                      )
                    }
                  </div>
                  <div style={{ backgroundColor: data.bg }} className={`flex text-white items-center justify-center ${index%2 === 0 ? "order-2" : "order-1"}`}>
                    <div className='flex flex-col gap-y-8 w-[445px]'>
                      <h1 className='text-5xl font-semibold'>{data.title}</h1>
                      <p className='text-lg leading-5'>{data.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      <div className='mt-20'>
        <div className='flex flex-col mx-auto w-fit gap-y-4'>
          <h1 className='text-center font-semibold text-5xl uppercase'>Lorem ipsum</h1>
          <p className='text-center text-md mt-4'>Lorem ipsum dolor sit amet,orem ipsum dolor  consectetur adipiscing</p>
        </div>
        <div className='w-full relative min-h-[716px] h-11/12 flex justify-center items-center mt-10 bg-[#5E9ED7]'>
            <div className='w-[608px] h-[170px]'>
              <h1 className='text-6xl font-semibold uppercase'>Lorem ipsum dolor sit amet, </h1>
            </div>
            <div className='z-20 pb-6 bg-white flex flex-col p-3 rounded-md'>
              <div>
                <iframe 
                  width="495"
                  height="295" 
                  src="https://www.youtube.com/embed/xqvCmoLULNY?si=7XekE21f_0PQiWXi" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen
                  className='object-cover rounded-md'>
                </iframe>
              </div>
              <div className='flex items-center justify-between mt-4 px-1'>
                <div className='flex flex-col gap-y-2'>
                  <h1 className='font-semibold'>Expercise Tutorial - Squat</h1>
                  <div className='flex items-center gap-x-2'>
                    <div><FaYoutube className='text-red-500' /></div>
                    <p className='text-gray-400'>YouTube</p>
                  </div>
                </div>
                <div className='pr-3'>
                  <IoMdInformationCircleOutline className='text-2xl text-gray-300' />
                </div>
              </div>
            </div>
            <img src={bgImage} alt='bg-image' className='absolute right-0 top-0 z-10' width={960}  /> 
        </div>
      </div>
      <ClientReviews />
      <ThingsNeed />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage;
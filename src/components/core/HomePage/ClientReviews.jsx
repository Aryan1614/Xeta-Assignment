import React from 'react';
import userImage from '../../../assets/user.jpg';

function ClientReviews() {

    const reviews = [
        {
            id:1,
            desc:"I LOVE the FitSnap.  to train my daily exercise, it offers wide range of category that fit my needs",
            name:"Riya Awasti",
        },
        {
            id:2,
            desc:"I LOVE the FitSnap.  to train my daily exercise, it offers wide range of category that fit my needs",
            name:"Riya Awasti",
        },
        {
            id:3,
            desc:"I LOVE the FitSnap.  to train my daily exercise, it offers wide range of category that fit my needs",
            name:"Riya Awasti",
        },
    ];

  return (
    <div className='mt-20 max-w-[1220px] w-11/12 mx-auto mb-10'>
      <h1 className='max-w-[600px] leading-tight font-medium mx-auto text-center w-11/12 text-5xl uppercase'>What Our Clients Say About Us</h1>
      <div className='lg:flex grid grid-cols-1 lg:items-center lg:gap-x-4 mt-6'>
        {
            reviews.map((review,index) => (
                <div className='flex flex-col justify-between p-7 h-[494px] border border-[#13118F]' key={index}>
                    <div>
                        <p>{review?.desc}</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-5'>
                        <img src={userImage} alt='user-img' className='w-10 rounded-full' />
                        <p>{review?.name}</p>
                    </div>
                </div>  
            ))
        }
      </div>
    </div>
  )
}

export default ClientReviews;

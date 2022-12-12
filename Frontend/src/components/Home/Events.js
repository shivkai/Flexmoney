import React from 'react'
import yoga from '../../Images/yoga.webp'
const Events = () => {
    
  return (
    <div className='mt-4 mb-4'>
        <h1 className='text-center text-xl  border-b-2 my-4 font-normal'>Event's Organized By Yoga Foundation</h1>
        <div className='flex  animate-pulse gap-6'>
            <div className='animate-scroll '>
            <img src={yoga} className='w-[350px]  h-[250px] '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            {/* <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div>
            <div className='animate-scroll'>
            <img src={yoga} className='w-[350px]  h-[250px]  '/>
            </div> */}
           
         
            
            
            
        </div>
    </div>
  )
}

export default Events
import React from 'react'
import yoga from '../../Images/yff.webp'
const Navbar = () => {
  return (
    <div>
        <div className='bg-gray-100 flex py-2 align-middle items-center justify-evenly relative'>
            <div className='absolute left-8 top-0'><img src={yoga} className="w-30 rounded-lg h-14 "/></div>
            <div className='w-1/2' >
                <ul className='flex justify-around'>
                    <a href="#yoga"><li className='py-2 cursor-pointer px-6 hover:bg-red-400 ' >Yoga</li>
                    </a><a href="#about"><li className='py-2  cursor-pointer px-6 hover:bg-red-400' >About Us</li>
                    </a><a href="#register"> <li className='py-2  cursor-pointer px-6 hover:bg-red-400' >Register</li>
                   </a></ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import yoga from '../../Images/yff.webp'

const UserHome = ({user}) => {
const route = useNavigate();
  const func = ()=>{
    localStorage.clear();
    route('/');
  }

  return (
    <>
     <div className='bg-gray-100 flex py-7 align-middle items-center justify-evenly relative'>
            <div className='absolute left-8 top-0'><img src={yoga} className="w-30 rounded-lg h-14 "/></div>
           <button onClick={func} className='py-2 px-4 rounded absolute right-4 bg-red-400'>Logout</button>
        </div>

        <div>
        <div class="flex justify-center">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{localStorage.getItem("user")}</h5>
    <p class="text-gray-700 text-base mb-4">
      {localStorage.getItem("userId")}
      
    </p>
    <p class="text-gray-700 text-base mb-4">
      {(user.fee=="1")?    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" disabled>Fee Paid</button>
 :     <button onClick={()=>{route('/user/payment')}} type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Pay Fee Now</button>
}
    </p>
  </div>
</div>
        </div>
    </>
  )
}

export default UserHome
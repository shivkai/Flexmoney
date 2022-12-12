import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ticket = ({user}) => {
    const navigate  = useNavigate();
  return (

<div class="bg-gray-100 h-screen flex align-middle">
      <div class="bg-white p-6  my-auto h-[350px] mx-auto">
        
        <div class="text-center my-auto">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Registration Successfull! For {Date().substring(4,7)} Month</h3>
            <p class="text-gray-600 text-lg my-4">Thank you for Registering.<br/> See you in session<span className='underline text-xl'> {localStorage.getItem("userName").split(" ")[0].toLocaleUpperCase()}</span> .</p>
            <p class="text-gray-600 my-2">Save this Payment Id for future purpose.<br/><span onClick={(e) => {navigator.clipboard.writeText(localStorage.getItem("userid"));alert("ID copied to clipboard");}} className='underline text-sky-500 cursor-pointer'>{localStorage.getItem("userid")}</span></p>
            <p> Have a great day!  </p>
            <div class="py-10 text-center">
                <a onClick={()=>{navigate('/');localStorage.clear();}} class="px-12 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white font-semibold py-3">
                    GO BACK 
               </a>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Ticket
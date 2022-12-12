import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import yogalogo from '../../Images/yff.webp'
const Footer = () => {
  return (
    <div>
        <footer class="text-center bg-gray-900 text-white">
  <div class="container px-6 pt-6">
    <div class="flex justify-center  mb-6">
      <a href="#!" type="button" class="rounded-full border-2 flex justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
      <AiFillGithub className=''/>
      </a>

      <a href="#!" type="button" className="rounded-full border-2 flex justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
       <AiFillFacebook />
      </a>

      <a href="#!" type="button" class="rounded-full border-2 flex justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
       <AiFillInstagram/>
      </a>

      <a href="#!" type="button" class="rounded-full border-2 flex justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
           <AiFillTwitterCircle/>
             </a>

      <a href="#!" type="button" class="rounded-full border-2 flex justify-center items-center border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
       <AiFillLinkedin/>
      </a>

    
    </div>
  </div>

  <div class="text-center p-4 flex justify-center" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    
    <a class="text-whitehite " href="#"><img src={yogalogo}/></a>
  </div>
</footer>
    </div>
  )
}

export default Footer
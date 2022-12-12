import React, { useState,useCallback } from 'react'
import yoga from '../Images/yoga.jpg'
import yogaLow from '../Images/yogaLow.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'tw-elements';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
var uuid = require("uuid");
var id = uuid.v4();
const Form = ({update}) => {
const navigate = useNavigate();
const [fname,setFname] = useState("");
const [lname,setLname] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [age,setAge] = useState(0);
const [slot,setSlot] = useState("");
const data = {
  name : fname+" "+lname,
  age : parseInt(age),
  slot,
  email,
  password,id
};


  const submitHandler=()=>{
     if(data.name.length<=1){
      toast.error('Sorry! But people with name can only apply', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else if(data.age<18 || data.age>65)
    {
      toast.error('Sorry! But people with age 18-65 can only apply', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
    }
    else if(data.slot===""){
      toast.error('Sorry! But you have to choose a slot', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
    // setUser({value:data});
   update(data);
    setTimeout(()=>{

      navigate('/user/login');
    },1500);
    }
    
  }

  return (
    <>


<div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-2 py-5">
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:"1000px"}}>
        <div className="md:flex w-full">
            <div id="register" className="hidden md:block w-[40%] bg-indigo-500 ">
            <LazyLoadImage src={yoga}
            style={{height:"100%",minWidth:"100%",display:"inherit"}}
            placeholderSrc={yogaLow}
        alt="Image Alt"
      />
            </div>
            <div className="w-full md:w-1/2 py-10 px-4 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">JOIN YOGA CLASSES</h1>
                    <p className='text-xl'>Enter your information to join</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                            <div className="flex">
                                <input type="text" onChange={(e)=>{setFname(e.target.value)}} className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John"/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                            <div className="flex">
                                <input type="text" id="age" onChange={(e)=>{setLname(e.target.value)}} className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John@gmail.com"/>
                            </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                            <label htmlFor="pass" className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <input type="password" id="pass" onChange={(e)=>{setPassword(e.target.value)}} className="w-full  pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="********"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <div className=" px-3 mb-5">
                            <label htmlFor="age" className="text-xs font-semibold px-1">Age</label>
                            <div className="flex">
                              <input type="number" id='age' onChange={(e)=>{setAge(e.target.value)}} min="18" name='age' className="w-[100px]   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-center" placeholder='0' />
                                {/* <input  placeholder="0"/> */}
                            </div>
                        </div>
                    {/* </div>
                    <div className="flex -mx-3"> */}
                        <div className="w-full px-3 mb-12">
                            <label htmlFor="" className="text-xs font-semibold px-1">Slot</label>
                            <div className="flex">
                            <div class="flex justify-center">
  <div>
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       {(slot==="")?<p>Dropdown button</p>:slot}
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li className='cursor-pointer' onClick={(e)=>{setSlot("6Am-7Am")}}>

          <p
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            >6Am-7Am</p >
        </li>
        <li className='cursor-pointer' onClick={(e)=>{setSlot("7Am - 8Am")}}>
          <p
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            
            >7Am - 8Am</p    >
        </li>
        <li className='cursor-pointer' onClick={(e)=>{setSlot("9Am- 10Am")}}>
          <p
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
           
            >9Am- 10Am</p>
        </li>
        <li className='cursor-pointer' onClick={(e)=>{setSlot("5Pm- 6Pm")}}>
          <p
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
          
            >5Pm- 6Pm</p>
        </li>
      </ul>
    </div>
  </div>
</div>
 </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            <button onClick={submitHandler} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>
</>
  )
}

export default Form
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [pass, setpass] = useState("");
const [visible, setVisible] = useState(true);
const [vis, setvis] = useState(true);
  return (
    <>
           
<div className="bg-gray-100 flex justify-center items-center h-screen">
    
    <div className="w-1/2 h-screen hidden lg:block ml-14 mt-14">
      <img  className='mb-14' src="src/assets/Login/FastX.png" alt="" />
      <img className='ml-5' src="src/assets/Login/pengiriman-barang-delivery-planning-system-3-1024x558 1.png" alt="" />
    </div>
    
    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <div className='flex gap-4'>
        <div className='relative flex-none'>
          <img src="src/assets/ForgotPassword/Ellipse 1.png" alt="" />
          <div className='absolute left-2  top-3'>
            <img src="src/assets/ForgotPassword/image 23.png" alt="" />
          </div>
        </div>
      <div className='text-center text-3xl mb-10 flex-initial '> Forgot Password</div>
      </div>
        
    
      <h1 className="text-2xl font-semibold mb-8 text-decoration: underline">Update</h1>
      
      
      <form action="#" method="POST ">
      <div className="relative mt-8">
      <div className='gap-2 relative hover:cursor-pointer'>
      <svg className="w-2.5 h-2.5 ml-2 mt-4  absolute hover:cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    <button  className="text-black bg-white hover:bg-white  focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-10  absolute ml-6  mt-2 py-0.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-white" type="button">+91 
    </button>
    </div>
    <div className="absolute inset-y-0 right-3 flex items-center pl-3.5 pointer-events-none">
        <img src="src/assets/Signup/google 5.png" alt="" />
      </div>
      <input type="Number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-16 p-2.5  left-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Mobile Number"/>
    </div>

    <div className="relative mt-8">
      <div className="absolute inset-y-0 right-3 flex items-center pl-3.5 pointer-events-none">
        <img src="src/assets/Login/google 4.png" alt="" />
      </div>
      <input type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full  p-2.5  left-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Email"/>
    </div>
    
       <div className="mb-4 mt-8 border border-gray-300 bg-white rounded-md py-2 px-3 flex flex-row focus:outline-none focus:border-green-500 ">
      <input type="text"  className="w-80  focus:border-green-500 " placeholder="Verification Code" autoComplete="off" />
      <button type="submit" className=" text-green-500 font-semibold rounded-md ml-5 w-20">Get Code</button>
       </div>

       <div className='flex justify-between mt-8 w-full items-center shadow-sm bg-gray-50 border  border-gray-300 text-black'>
      <input 
      value={password}
      type={visible ? "text" :"password"}
      id='password'
      placeholder='Enter password'
      onChange={(e) => setPassword(e.target.value)}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full  p-2.5  left-0 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'/>
      <div className='p-2 ' onClick={() => setVisible(!visible)}>
        {visible ? <IoEye /> : <IoEyeOff /> }

      </div>

    </div>
    <div className='flex justify-between mt-8 w-full items-center shadow-sm bg-gray-50 border  border-gray-300 text-black'>
      <input 
      value={pass}
      type={vis ? "text" :"password"}
      id='password'
      placeholder='Confirm Password'
      onChange={(e) => setpass(e.target.value)}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full  p-2.5  left-0 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500'/>
      <div className='p-2 ' onClick={() => setvis(!vis)}>
        {vis ? <BsEyeFill /> : <BsEyeSlashFill /> }

      </div>

    </div>
 
        
       
        
     
        <button onClick={()=>navigate("/login")} type="submit" className="bg-[#80A78C] mt-8 hover:bg-[#3d5e47] text-white font-semibold rounded-md py-2 px-4 w-full">UPDATE</button>
      </form>
      
      
    </div>
    </div>
    </>
  )
}

export default ForgotPassword
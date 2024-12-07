import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../../assets/Login/poster.png";
import icon from "../../../assets/Signup/Vector.png";
import edit from "../../../assets/Signup/material-symbols_edit-outline.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { useState } from 'react';
const Signup = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null);      
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username) {
      toast.error("Enter Your Name !");
      return;
    } else if (!formData.email) {
      toast.error("Enter Your Email !");
      return;
    } else if (!formData.mobile) {
      toast.error("Enter Your Mobile Number !");
      return;
    } else if (formData.mobile.length < 10) {
      toast.error("Please enter a 10-digit Mobile Number !");
      return;
    } else if (!formData.mobile.startsWith("+91")) {
    formData.mobile = "+91" + formData.mobile;
  }
    try{
      setLoading(true);
      // const res = await fetch('https://emonoid.com/api/auth/signup',
      const res = await fetch('/api/auth/signup',
      {                                      
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });  
      const data= await res.json();
      // console.log(data);
      if(data.success===false){
        setLoading(false);
        setError(data.message);
        toast.error("User already registered!")
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/login');
    }catch(error){
      setLoading(false)
      toast.success("Now, there's no need to sign up. You can log in directly with your mobile number");
      setError(error.message);
    }
  };
  return (
    <div className='w-full flex items-center justify-center'>
      <div className="bg-[#FFFFFF] w-11/12 h-screen flex items-center justify-evenly">
        <div className="w-5/12 hidden lg:block">
          <h1 className="pl-12 mb-6 text-5xl font-medium">MyFast<span className="text-green-600">X</span></h1>
          <img className="ml-5" src={logo} alt=""/>
        </div>
        <div className="md:w-4/12">
          <h1 className="text-center font-medium mb-8 text-xl md:text-4xl ">Welcome to MyFast<span className="text-green-600">X</span></h1>
          <h1 className="underline decoration-[#62B179] underline-offset-4 text-xl md:text-2xl font-medium"> SIGNUP</h1>
          <div className="grid justify-items-center my-6 h-fit  relative">
            <img className="h-[80px] w-[80px]  " src={icon} alt="" />
            <img
              className="h-[25px] w-[25px] absolute hover:cursor-pointer  bottom-0 left-[55%] "
              src={edit}
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 md:gap-6 mt-6'>
            <div className="border-solid border rounded-[8px] p-2 border-[#E5E5E5] flex justify-between">
              <input className='text-sm bg-white w-10/12 outline-none' type="text" placeholder="Enter Name" id='username' onChange={handleChange}/>
              <IoPersonCircleOutline className='text-xl text-deep-green'/>
            </div>
            <div className="border-solid border rounded-[8px] p-2 border-[#E5E5E5] flex justify-between">
              <input className='text-sm bg-white w-10/12 outline-none' type="email" placeholder="Enter Email" id='email' onChange={handleChange}/>
              <IoMdMail className='text-xl text-deep-green'/>
            </div>
            <div className="border-solid border rounded-[8px] p-2 border-[#E5E5E5] flex justify-between">
              <input className='text-sm bg-white w-10/12 outline-none' type="tel" placeholder="Enter Mobile Number" id='mobile' onChange={handleChange}/>
              <FaMobileScreen className='text-xl text-deep-green'/>
            </div>
            <button disabled={loading} className="bg-[#80A78C]  hover:bg-[#3d5e47] mt-6 text-white font-medium rounded-md py-2 px-4 w-full">{loading ? 'Loading...':'Sign Up'}</button>
          </form>
          
          <div className='flex gap-2 mt-5'>
            <p>Have an account?</p>
            <Link to={'/login'} className='text-deep-green'>Log In</Link>
          </div>
          {error && <p className='text-red-500 mt-5'>Now, there's no need to sign up. You can log in directly with your mobile number</p>}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/admin/logo.png';
import loginImg from '../../assets/admin/loginImg.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {useDispatch, useSelector} from 'react-redux'
import {signInStart, signInSuccess, signInFailure} from '../../redux/admin/adminSlice'

const AdminLogin = () => {
    const [formData, setFormData]= useState({});
    const navigate = useNavigate();
    const [vis, setVis] = useState(false);
    const {loading, error} = useSelector((state)=>state.admin);
    const dispatch = useDispatch();

    const handleChange=(e)=>{
      setFormData({
          ...formData,
          [e.target.id]:e.target.value,
      });
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(signInStart());
        const response = await fetch('https://myfastx-backend.onrender.com/api/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('adminToken', data.token); // Storing the token
          localStorage.setItem('adminDetails', JSON.stringify(data.admin)); // Storing the admin details
          dispatch(signInSuccess(data));
          navigate("/fastx/admin/dashboard");
        } else {
          toast.error('Admin login failed')
          dispatch(signInFailure(error.message));
        }
      } catch (error) {
        toast.error('Admin login failed')
        dispatch(signInFailure(error.message));
      }
    };

  return (
    <div className='flex w-full h-screen items-center justify-evenly'>
            <div className='flex w-full md:w-10/12 items-center justify-center'>
                <form onSubmit={handleSubmit} className='w-full md:w-6/12  flex flex-col justify-center items-center'>
                    <div className=''>
                        <img className='h-12' src={logo} alt="" />
                    </div>
                    <div className='mt-6 mb-4'>
                        <h1 className='text-xl font-semibold text-gray-700'>Admin login</h1>
                    </div>
                    <div className='w-full flex flex-col items-center my-4'>
                        <h1 className='text-base w-10/12 md:w-9/12 font-medium text-gray-500'>Email address</h1>
                        <input className='h-10 pl-3 w-10/12 md:w-9/12 focus:outline-none bg-gray-100 rounded-md' type="email" id='email' placeholder='type here'  onChange={handleChange} />
                    </div>
                    <h1 className='text-base w-10/12 md:w-9/12 font-medium text-gray-500'>Password</h1>
                    <div className='w-10/12 md:w-9/12 flex items-center justify-between  bg-gray-100 rounded-md'>
                        <input type={vis ? "text" :"password"}  id='password' placeholder='Confirm Password' onChange={handleChange}
                        className='h-10 pl-3 md:w-10/12 focus:outline-none bg-gray-100 rounded-md'/>
                        <div className='px-4 py-2 cursor-pointer' onClick={() => setVis(!vis)}>{vis ? <BsEyeFill /> : <BsEyeSlashFill /> }</div>
                    </div>
                    {/* <div className='w-10/12 md:w-9/12 flex justify-end my-4 gap-2'>
                        <h1>Dont have an account?</h1>
                        <button onClick={()=>navigate("/admin/signup")} className='text-deep-green'>signup</button>
                    </div> */}
                    <div className='w-10/12 md:w-9/12 mt-4'>
                     <button type="submit"  className='bg-deep-green h-10 rounded-md w-full text-white'>{loading? 'Loading':'Log In'}</button>
                    </div>
                    <div className='w-10/12 md:w-9/12 flex justify-end my-4'>
                        {/* <button onClick={()=>navigate("/admin_forgot_password")} className='text-gray-500'>Forgot Password?</button> */}
                    </div>
                    {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
                </form>
                
                <div className='md:w-6/12 flex items-center justify-center '>
                    <div className='w-11/12 pt-12 hidden lg:block'>
                        <img className=' h-96' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
  );
};

export default AdminLogin;

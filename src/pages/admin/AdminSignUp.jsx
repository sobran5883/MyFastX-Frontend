import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/admin/logo.png';
import loginImg from '../../assets/admin/loginImg.png';
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
// import {useDispatch} from 'react-redux'
// import {signInStart, signInSuccess, signInFailure} from '../../redux/admin/adminSlice'

const AdminLogin = () => {
    const [formData, setFormData]= useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [vis, setVis] = useState(false);
    // const dispatch = useDispatch();

    const handleChange=(e)=>{
      setFormData({
          ...formData,
          [e.target.id]:e.target.value,
      });
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const res = await fetch('/api/admin/signup',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        });
        const data=await res.json();
        if(data.success===false){
            setError(data.message);
            return;
        }
        setError(null);
        navigate('/admin/login');
      }catch(error){
        setError(error.message);
      }
    }

  return (
    <div className='flex w-full h-screen items-center justify-evenly'>
            <div className='flex w-10/12 items-center justify-center'>
                <form onSubmit={handleSubmit} className='w-full lg:w-6/12  flex flex-col justify-center items-center'>
                    <div className=''>
                        <img className='h-12' src={logo} alt="" />
                    </div>
                    <div className='mt-10 mb-4'>
                        <h1 className='text-xl font-semibold text-gray-700'>Admin SignUp</h1>
                    </div>
                    <div className='my-4'>
                        <h1 className='text-sm text-center md:text-lg text-gray-500'>Please fill in your unique admin login details below</h1>
                    </div>
                    <div className='w-full flex flex-col items-center my-4'>
                        <h1 className='text-base w-9/12 font-medium text-gray-500'>Name</h1>
                        <input className='h-10 pl-3 w-9/12 focus:outline-none bg-gray-100 rounded-md' type="text" id='name' placeholder='type here'  onChange={handleChange} />
                    </div>
                    <div className='w-full flex flex-col items-center my-4'>
                        <h1 className='text-base w-9/12 font-medium text-gray-500'>Email address</h1>
                        <input className='h-10 pl-3 w-9/12 focus:outline-none bg-gray-100 rounded-md' type="email" id='email' placeholder='type here'  onChange={handleChange} />
                    </div>
                    <h1 className='text-base w-9/12 font-medium text-gray-500'>Password</h1>
                    <div className=' w-9/12 flex items-center justify-between  bg-gray-100 rounded-md'>
                        <input type={vis ? "text" :"password"}  id='password' placeholder='Confirm Password' onChange={handleChange}
                        className='h-10 pl-3 w-10/12 focus:outline-none bg-gray-100 rounded-md'/>
                        <div className='px-4 py-2 cursor-pointer' onClick={() => setVis(!vis)}>{vis ? <BsEyeFill /> : <BsEyeSlashFill /> }</div>
                    </div>
                    <div className='w-9/12 flex justify-end mt-2 mb-4 gap-2'>
                        <h1>Have an account?</h1>
                        <button onClick={()=>navigate("/admin/login")} className='text-deep-green'>login</button>
                    </div>
                    <div className='w-9/12'>
                     <button type="submit"  className='bg-deep-green h-10 rounded-md w-full text-white'> Sign Up </button>
                    </div>
                    {error && <p className='text-red-500 mt-5'>{error}</p>}
                </form>
                <div className='lg:w-6/12 flex items-center justify-center '>
                    <div className='11/12 pt-12 hidden lg:block'>
                        <img className=' h-96' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>


  );
};

export default AdminLogin;
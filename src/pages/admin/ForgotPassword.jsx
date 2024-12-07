import { useNavigate } from 'react-router-dom'
import logo from '../../assets/admin/logo.png'
import loginImg from '../../assets/admin/loginImg.png'
import { useState } from 'react';
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import back from '../../assets/admin/back.png'
const ForgotPassord=()=>{
    const navigate = useNavigate();
    const [pass1, setpass1] = useState("");
    const [pass, setpass] = useState("");
    const [vis1, setvis1] = useState(false);
    const [vis, setvis] = useState(false);
    return(
        <div className='flex w-full h-screen items-center justify-evenly'>
            <div className='flex w-10/12 items-center justify-center'>
                <div className='w-full lg:w-6/12 flex flex-col justify-center items-center'>
                    <div className=''>
                        <img className='h-12' src={logo} alt="" />
                    </div>
                    <button onClick={()=>navigate(-1)} className='flex mt-6 mb-4 items-center'>
                        <img className='h-8 mx-4' src={back} alt="" />
                        <h1 className='text-xl font-semibold text-gray-700'>Forgot Password</h1>
                    </button>
                    <div className='w-full flex flex-col items-center my-4'>
                        <h1 className='text-base w-9/12 font-medium text-gray-500'>Email address</h1>
                        <input className='h-10 pl-3 w-9/12 focus:outline-none bg-gray-100 rounded-md' type="text" placeholder='type here'/>
                    </div>
                    <div className='w-full flex flex-col items-center my-4'>
                        <h1 className='text-base w-9/12 font-medium text-gray-500'>Verification Code</h1>
                        <div className='flex justify-between w-9/12 items-center rounded-md bg-gray-100'>
                            <input className='h-10 pl-3 w-9/12 focus:outline-none bg-gray-100 rounded-md' type="text" placeholder='type here'/>
                            <h1 className='bg-gray-100 rounded-md pr-3 text-deep-green text-xs md:text-sm'>Get Code</h1>
                        </div>
                    </div>
                    <div className='w-full my-4 flex flex-col items-center'>
                        <h1 className='text-base w-9/12  font-medium text-gray-500'>Enter Password</h1>
                        <div className=' w-9/12 flex items-center justify-between bg-gray-100 rounded-md'>
                        <input  value={pass1} type={vis1 ? "text" :"password"} id='password' placeholder='Confirm Password' onChange={(e) => setpass1(e.target.value)} 
                        className='h-10 pl-3 w-10/12 focus:outline-none bg-gray-100 rounded-md'/>
                        <div className='px-4 py-2 cursor-pointer' onClick={() => setvis1(!vis1)}>{vis1 ? <BsEyeFill /> : <BsEyeSlashFill /> }</div>
                    </div>
                    </div>
                    <div className='w-full my-4 flex flex-col items-center'>
                        <h1 className='text-base w-9/12 font-medium text-gray-500'>Confirm Password</h1>
                        <div className=' w-9/12 flex items-center justify-between bg-gray-100 rounded-md'>
                        <input  value={pass} type={vis ? "text" :"password"} id='password' placeholder='Confirm Password' onChange={(e) => setpass(e.target.value)} 
                        className='h-10 pl-3 w-10/12 focus:outline-none bg-gray-100 rounded-md'/>
                        <div className='px-4 py-2 cursor-pointer' onClick={() => setvis(!vis)}>{vis ? <BsEyeFill /> : <BsEyeSlashFill /> }</div>
                    </div>
                    </div>
                    <div className='w-9/12 my-4'>
                    <button onClick={()=>navigate(-1)} className='bg-deep-green h-10 rounded-md w-full text-white'>Sign In</button>
                    </div>
                </div>
                <div className='lg:w-6/12 flex items-center justify-center'>
                    <div className='11/12 pt-12 hidden lg:block'>
                        <img className=' h-96' src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassord
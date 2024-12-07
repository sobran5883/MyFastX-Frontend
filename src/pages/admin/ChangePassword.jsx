import {Link} from 'react-router-dom'
import hide from '../../assets/admin/hideIcon.png'
import { useSelector } from 'react-redux'
const ChangePassword=()=>{
  const {currentAdmin} = useSelector(state=> state.admin);
    return(
        <div className='w-full flex flex-col'>
            <div className='w-10/12 pt-4 flex flex-col items-center mb-6'>
                <div className='w-9/12'>
                  <div className='my-4 pb-8'>
                    <h1 className='ml-12 text-3xl font-medium'>Change Password</h1>
                  </div>  
                  <div className='pb-3'>
                    <h1 className='font-semibold'>Email Address</h1>
                  </div>
                  <div className='flex w-full justify-between'>
                    <h1 className='text-sm'>Your email address is <span className='font-semibold'>{currentAdmin.email}</span></h1>
                    <Link className='text-red-600'>change</Link>
                  </div>
                  <hr className='border-t-2 my-4'/>
                  <div className='pb-6'>
                    <h1 className='text-lg font-semibold'>Password</h1>
                  </div>
                  <div className='w-full flex flex-col items-center justify-center'>
                    <div className='w-9/12 flex border-2 px-2 h-10 items-center justify-between rounded-md'>
                        <input className='text-sm focus:outline-none' type="text" placeholder="Enter Old Password"/>
                        <img className='h-6 cursor-pointer' src={hide} alt="" />
                    </div>
                    <div className='w-9/12 ml-6'>
                        <Link className='text-xs text-blue-700'>forgot Password ?</Link>
                    </div>
                    <div className='my-4 w-9/12 flex border-2 px-2 h-10 items-center justify-between rounded-md'>
                        <input className='text-sm focus:outline-none' type="text" placeholder='Enter New Password'/>
                        <img className='h-6 cursor-pointer' src={hide} alt="" />
                    </div>
                    <div className='my-4 w-9/12 flex border-2 px-2 h-10 items-center justify-between rounded-md'>
                        <input className='text-sm focus:outline-none' type="text" placeholder='Confirm Password'/>
                        <img  className='h-6 cursor-pointer' src={hide} alt="" />
                    </div>
                    <div className='my-4 w-9/12 flex items-center justify-between rounded-md'>
                        <button className='h-10 text-white text-sm bg-blue-950 w-full rounded-md'>Update Changes</button>
                    </div>
                  </div>
                </div>
            </div>
         </div>
    )
}
export default ChangePassword;




import { Link, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteAdminFailure, signOutAdminStart, deleteAdminSuccess,} from '../../redux/admin/adminSlice';

const Setting=()=>{
    const dispatch=useDispatch();
    const handleLogout = async () => {
        try {
          dispatch(signOutAdminStart());
          localStorage.removeItem('access_token');
          const message = 'admin has been logged out!';
          await new Promise(resolve => setTimeout(resolve, 1000));
          dispatch(deleteAdminSuccess(message));
        } catch (error) {
          dispatch(deleteAdminFailure(error.message));
        }
      };
    return(
        <div className='w-full flex'>
            <div className='w-1/5 flex justify-center'>
                <div className='pt-12 w-full bg-white'>
                        <Link to="/fastx/admin/setting/profile">
                        <div className='flex mb-4 hover:bg-blue-200 h-8 rounded-t-md items-center pl-2'>
                            <div className='ml-2'>
                                <h1 className='text-sm font-medium'>Profile</h1>
                            </div>
                        </div>
                        </Link>
                        <Link to="/fastx/admin/setting/change_password">
                        <div className='flex mb-4 hover:bg-blue-200 h-8 items-center pl-2'>
                            <div className='ml-2'>
                                <h1 className='text-sm font-medium'>Change Password</h1>
                            </div>
                        </div>
                        </Link>
                        <button onClick={handleLogout} className='flex mb-4 text-red-700 h-8 items-center ml-2 pl-2 text-sm font-medium'>Log Out</button>

                </div>
            </div>
            <div className='w-11/12 pt-10 flex flex-col align-baseline justify-start'>
                <Outlet/>
            </div>
        </div>
    )
}
export default Setting;


import camera from '../../assets/admin/camera.png'
import done from '../../assets/admin/Done.png'
import { useSelector } from 'react-redux';
const Profile=()=>{
    const {currentAdmin} = useSelector(state=> state.admin);
        // const dispatch=useDispatch();
    return(
        <div className='w-full flex flex-col'>
            <div className='w-8/12 pt-4 flex flex-col items-center mb-6'>
                <div className='relative'>
                    <div>
                    <img
                        className='h-28 rounded-full'
                        src={currentAdmin.avatar || "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                        alt="Admin Avatar"
                    />
                    </div>
                    <div className='absolute top-20 left-20 flex bg-blue-950 h-6 w-6 items-center justify-center rounded-full '>
                        <img src={camera} alt="" />
                    </div>
                </div>
                <div className='w-9/12'>
                    <h1 className='text-xl font-semibold mt-8'>Account Setting</h1>
                </div>
                <div className='flex w-9/12 my-4'>
                    <h1>Personal</h1>
                    <h1 className='ml-28'>Address</h1>
                </div>
                <div className='w-9/12'>
                    <h1 className='text-sm font-medium pb-1'>Name</h1>
                    <div className='w-10/12 h-8 flex items-center px-2 rounded-md border'>
                        <input className='text-sm focus:outline-none w-11/12' type="text" placeholder='Enter your name' defaultValue={currentAdmin.name} />
                        <img className='h-4' src={done} alt="" />
                    </div>
                </div>
                <div className='w-9/12 my-4'>
                    <h1 className='text-sm font-medium pb-1'>Location</h1>
                    <div className='w-10/12 border rounded-md h-8 flex items-center px-2'>
                        <input className='text-sm' type="text" placeholder='Enter your location' defaultValue={currentAdmin.location}/>
                    </div>
                </div>
                <div className='w-9/12 mb-4'>
                    <h1 className='text-sm font-medium pb-1'>Contact No.</h1>
                    <div className='w-10/12 border rounded-md h-8 flex items-center px-2'>
                        <input className='text-sm' type="text" placeholder='+91' defaultValue={currentAdmin.phone}/>
                    </div>
                </div>
                <div className='w-9/12 mb-4'>
                    <h1 className='text-sm font-medium pb-1'>Email Id</h1>
                    <div className='w-10/12 border rounded-md h-8 flex items-center px-2'>
                        <input className='text-sm' type="email" placeholder='eg. abc@gmail.com' defaultValue={currentAdmin.email}/>
                    </div>
                </div>
                <div className='w-9/12 my-4 items-center'>
                    <button className='w-8/12 bg-blue-950 rounded-2xl text-white text-sm h-8'>Save changes</button>
                </div>
            </div>
         </div>
    )
}
export default Profile;


import { useNavigate } from 'react-router-dom'
import back from '../../../assets/profile/back.png'
import agent from '../../../assets/profile/agentImg.png'
import plus from '../../../assets/profile/plus.png'
import gallery from '../../../assets/profile/gallery.png'
import camera from '../../../assets/profile/camera.png'
import mic from '../../../assets/profile/mic.png'
import forword from '../../../assets/profile/forward.png'
const Help=()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-pale-mint w-full h-fit flex items-center">
            <div className="w-11/12 md:w-10/12 flex h-full flex-col items-baseline mt-12 ml-2 md:ml-8">
                <div className='flex items-center mt-2 mb-12'>
                    <button onClick={()=>navigate(-1)} ><img className='h-6 pr-8' src={back} alt="" /></button>
                    <h1 className='text-lg font-urbanist font-medium '>Chat With Agent</h1>
                </div>
                <div className='w-full flex flex-col h-full items-end justify-between'>
                    <div className='h-96 flex flex-col w-full'>
                        <div className='flex h-10 items-center'>
                            <img className='mr-4' src={agent} alt="" />
                            <h1 className='h-8 bg-light-gray flex items-center px-2 rounded-xl text-sm font-medium font-inter'>Hello Sir</h1>
                        </div>
                        <div className='w-full flex items-center justify-end'>
                            <h1 className='h-8 bg-light-gray flex items-center px-2 rounded-xl text-sm font-medium font-inter'>Where can i track my order?</h1>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full bg-light-gray h-10'>
                        <div className='md:w-9/12 flex items-center'>
                            <img className='h-5 px-2' src={plus} alt="" />
                            <input className='placeholder-gray-700 focus:outline-none text-sm font-inter w-10/12 bg-light-gray' type="text" placeholder='Type your message'/>
                        </div>
                        <div className='pr-2'>
                            <button><img className='h-4 mx-0.5 md:mx-1' src={gallery} alt="" /></button>
                            <button><img className='h-4 mx-0.5 md:mx-1' src={camera} alt="" /></button>
                            <button><img className='h-4 mx-0.5 md:mx-1' src={mic} alt="" /></button>
                            <button><img className='h-4 mx-0.5 md:mx-1' src={forword} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;

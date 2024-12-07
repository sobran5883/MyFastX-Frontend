import { useNavigate } from 'react-router-dom'
import search from '../../../assets/profile/search.png'
import arrowDown from '../../../assets/profile/arrowDown.png'
import agent from '../../../assets/profile/agent.png'
import arrow from '../../../assets/profile/arrow.png'
const Help=()=>{
    const navigate = useNavigate();
    return(
        <div className="bg-pale-mint w-full h-fit flex items-center">
            <div className="w-11/12 md:w-10/12 flex h-full flex-col items-baseline mt-12 ml-2 md:ml-8">
                <div className="w-full bg-white flex flex-col items-center justify-center rounded-xl">
                    <div className='w-11/12 md:w-9/12'>
                        <div className='mt-6 mb-4'>
                            <p className='font-normal text-xl md:text-2xl'>FAQ's</p>
                        </div>
                        <div className="w-full md:w-10/12 flex items-center justify-baseline border rounded-3xl bg-slate-200 mb-8 h-10 w">
                            <i className='relative px-4'><img className='h-3' src={search} alt="" /></i>
                            <input className='text-xs font-urbanist md:text-sm bg-gray-200 text-gray-950 w-full focus:outline-none' type="text" placeholder="Search your Query here"/>
                        </div>
                        <div className='pb-60'>
                            <div className='flex items-center justify-between'>
                                <div className='w-11/12'>
                                    <h1 className='font-semibold font-urbanist text-sm md:text-base'>How do I make an order with FastX ? </h1>
                                </div>
                                <div className='w-1/12'>
                                    <img className='w-5' src={arrowDown} alt="" />
                                </div>
                            </div>
                            <hr className='my-2'/>
                            <div className='flex items-center justify-between'>
                                <div className='w-11/12'>
                                    <h1 className='font-semibold font-urbanist text-sm md:text-base'>How long does it take for you to match me with a delivery agent </h1>
                                </div>
                                <div className='w-1/12'>
                                    <img className='w-5' src={arrowDown} alt="" />
                                </div>
                            </div>
                            <hr className='my-2'/>
                            <div className='flex items-center justify-between'>
                                <div className='w-11/12'>
                                    <h1 className='font-semibold font-urbanist text-sm md:text-base'>How much does it cost generally ? </h1>
                                </div>
                                <div className='w-1/12'>
                                    <img className='w-5' src={arrowDown} alt="" />
                                </div>
                            </div>
                            <hr className='my-2'/>
                            <div className='flex items-center justify-between'>
                                <div className='w-11/12'>
                                    <h1 className='font-semibold font-urbanist text-sm md:text-base'>Is it true that prices are less as compared to other apps ?</h1>
                                </div>
                                <div className='w-1/12'>
                                    <img className='w-5' src={arrowDown} alt="" />
                                </div>
                            </div>
                            <hr className='my-2'/>
                            <div className='flex items-center justify-between mb-6'>
                                <div className='w-11/12'>
                                    <h1 className='font-semibold font-urbanist text-sm md:text-base'>How do I check the status of My Order?</h1>
                                </div>
                                <div className='w-1/12'>
                                    <img className='w-5' src={arrowDown} alt="" />
                                </div>
                            </div>
                            <hr className='my-2'/>
                            <div className='my-4 mt-8'>
                                <h1 className='font-semibold font-urbanist text-sm md:text-base'>For More Queries reach out to our agent:</h1>
                            </div>
                            <div className='flex border border-deep-green rounded-2xl items-center justify-between h-16 my-4 px-8'>
                                <div className='flex w-5/12 justify-between'>
                                <img className='h-7' src={agent} alt="" />
                                <input className='text-sm ml-2 font-urbanist placeholder-gray-500 font-medium md:text-sm focus:outline-none' type="text" placeholder='Chat With Agent'/>
                                </div>
                                <button onClick={()=>navigate("/profile/chat_with_agent")} >
                                    <img className='h-4' src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;

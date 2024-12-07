import order1 from '../../../assets/profile/order1.png'
// import orderBtn from '../../../assets/profile/orderBtn.png'
import greentick from '../../../assets/profile/greentick.png'
import arrowRight from '../../../assets/profile/arrowRight.png'
import truck from '../../../assets/profile/truck.png'
const Myprofile=()=>{
    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex items-center">
            <div className="myProfile w-11/12 flex h-full flex-col items-baseline justify-center mt-12 ml-2 md:ml-8 ">
                <div className="myprofileContainer w-full bg-white h-4/5 rounded-xl">
                    <div className="myprofileInnerConatainer h-full px-2 md:px-8 py-4 flex flex-col items-baseline justify-evely">
                        <div className="flex items-center my-8">
                            <h1 className='text-gray-500 font-base md:text-xl'>My Orders</h1>
                            <img className='h-3 mx-1' src={arrowRight} alt="" />
                            <h1  className='text-gray-500 font-base md:text-xl'>Order details</h1>
                        </div>
                        <div className="orderCards w-full">
                            <div className="orderCard my-2 md:w-9/12 flex items-center bg-dark-blue h-32 md:h-40 rounded-t-2xl ">
                                <div className="orderImg pl-4 md:pl-8">
                                    <img src={order1} alt="" className='h-16 w-16 md:h-24 md:w-24'/>
                                </div>
                                <div className="pl-6 md:pl-12">
                                    <h1 className='text-white font-normal text-sm md:text-ms pb-2'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs pb-2'>Weight: 376.3kg</p>
                                    <div className='flex items-center'>
                                        <img className='h-5 pr-1 pb-2' src={truck} alt="" />
                                        <h1 className='text-xxs md:text-sm text-white font-light pb-2'>22 Jun, 2023</h1>
                                    </div>
                                    <div className='text-xxs md:text-sm text-white font-light'>Rs. 776.93</div>
                                </div>

                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex flex-col items-center  bg-dark-blue h-72 md:h-80 rounded-2xl ">
                                <div className='w-full pl-10 mt-6 mb-2'>
                                    <h1 className='text-white font-normal text-lg'>Order Status</h1>
                                </div>
                                <hr className='w-full border-b-1'/>
                                <div className='w-full pl-6'>
                                    <div className='flex items-center my-5'>
                                        <img className='h-5 mx-4' src={greentick} alt="" />
                                        <h1 className='text-white font-light text-sm'>CONFIRMED</h1>
                                    </div>
                                    <div className='flex items-center my-5'>
                                        <img className='h-5 mx-4' src={greentick} alt="" />
                                        <h1 className='text-white font-light text-sm'>pICKED UP</h1>
                                    </div>
                                    <div className='flex items-center my-5'>
                                        <img className='h-5 mx-4' src={greentick} alt="" />
                                        <h1 className='text-white font-light text-sm'>SHIPPED</h1>
                                    </div>
                                    <div className='flex items-center my-5'>
                                        <img className='h-5 mx-4' src={greentick} alt="" />
                                        <h1 className='text-white font-light text-sm'>OUT FOR DELIVERY</h1>
                                    </div>
                                    <div className='flex items-center my-5'>
                                        <img className='h-5 mx-4' src={greentick} alt="" />
                                        <h1 className='text-white font-light text-sm'>DELIVERED</h1>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex flex-col items-center  bg-dark-blue h-72 md:h-80 rounded-2xl ">
                                <div className='w-full pl-10 mt-6 mb-2'>
                                    <h1 className='text-white font-normal text-lg'>Pick Up</h1>
                                </div>
                                <hr className='w-full border-b-2 border-gray-500'/>
                                <div className='w-full flex items-center h-24'>
                                    <h1 className='pl-10 text-white text-sm font-light'>Ramakrishna Nagar, Hafeezpet, Hyderabad, Telangana 500049</h1>                    
                                </div>
                                <hr className='w-full border-b-2 border-gray-500'/>
                                <div className='w-full flex items-center h-24'>
                                    <h1 className='pl-10 text-white text-lg font-normal'>Drop Off</h1>                    
                                </div>
                                <hr className='w-full border-b-2 border-gray-500'/>
                                <div className='w-full flex items-center h-24'>
                                    <h1 className='pl-10 text-white text-sm font-light'>Central Park Phase 2 Kondapur, Hyderabad, Telangana 500084</h1>                    
                                </div>
                            </div>
        
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Myprofile

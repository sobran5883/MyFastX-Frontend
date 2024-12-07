import { useNavigate } from 'react-router-dom'
import doctext from '../../assets/admin/document-text.png'
import location from '../../assets/admin/location.png'
import truckIcon from '../../assets/admin/truck-tick.png'
import path from '../../assets/admin/path.png'
import vehicle1 from '../../assets/admin/vehicle1.png'
import visa from '../../assets/admin/visa-logo.png'
import orderProfile1 from '../../assets/admin/orderProfile1.png'
import phoneIcon from '../../assets/admin/phoneIcon.png'
import msjIcon from '../../assets/admin/msjIcon.png'
import rating from '../../assets/admin/stars.png'
import infoCircle from '../../assets/admin/info-circle.png'
import truckTime from '../../assets/admin/truck-time.png'
import boxreturn from '../../assets/admin/box-remove.png'
import tiltArrow from '../../assets/admin/tiltArrow.png'
const OrderList=()=>{
    const navigate = useNavigate()
    return(
        <div className='w-full flex flex-col'>
            <div className='w-10/12 pt-12 flex flex-col mb-6'>
                <div className='flex w-full justify-between'>
                    <div>
                        <h1 className='text-xl font-semibold text-gray-800'>Order ID: 3354654654526</h1>
                    </div>
                    <div className='flex'>
                        <button onClick={()=>navigate("/fastx/admin/invoice")}   className='mr-2 flex border h-7 items-center px-2 py-1 rounded-md'>
                            <img className='h-3 mr-1' src={doctext} alt="" />
                            <h1 className='text-xs'>Invoice</h1>
                        </button>
                        <button className='mr-2 flex bg-green-600 h-7 items-center px-2 py-1 rounded-md'>
                            <h1 className='text-white text-xs'>Track order</h1>
                            <img className='h-3 ml-1' src={location} alt="" />
                        </button>
                    </div>
                </div>
                <div className='flex pt-6'>
                    <div className='flex border-r pr-4'>
                        <h1 className='text-sm'>Order date:</h1>
                        <h1 className='text-sm font-semibold'>11th Jan 2023</h1>
                    </div>
                    <div className='flex items-center pl-4'>
                        <img className='h-4' src={truckIcon} alt="" />
                        <h1 className='text-xs text-green-500'>Estimated delivery: in 4 Hours</h1>
                    </div>
                </div>
                <div className='w-full py-16 flex items-center justify-center'>
                    <img className='h-20' src={path} alt="" />
                </div>
                <div className='flex items-center justify-between pb-4'>
                    <div className='flex items-center'>
                        <div>
                            <img className='h-16' src={vehicle1} alt="" />
                        </div>
                        <div className='px-8'>
                            <div>
                                <h1 className='font-medium'>Two Wheeler</h1>
                            </div>
                            <div className='flex'>
                                <h1 className='text-xs text-gray-500 border-gray-300 border-r pr-2'>Weight</h1>
                                <h1 className='text-xs text-gray-500 border-gray-300 border-r pr-2 pl-2'>376.3</h1>
                                <h1 className='text-xs text-gray-500 border-gray-300 pl-2'>Kg</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-sm font-semibold'>Rs.776.93</h1>
                    </div>
                </div>
                <hr className='border-b my-6'/>
                <div className='flex justify-between py-4'>
                    <div>
                        <div>
                            <h1 className='text-base font-semibold'>Payment</h1>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-xs text-gray-500'>Visa **56</h1>
                            <img className='h-2 pl-2' src={visa} alt="" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-base font-semibold'>Pick Up</h1>
                        <h1 className='text-xs text-gray-500'>Address</h1>
                        <h1 className='text-sm text-gray-700'>Ramakrishna Nagar,</h1>
                        <h1 className='text-sm text-gray-700'>Hafeezpet, Hyderabad,</h1>
                        <h1 className='text-sm text-gray-700'>Telangana 500049</h1>
                    </div>
                    <div>
                        <h1 className='text-base font-semibold'>Drop off</h1>
                        <h1 className='text-xs text-gray-500'>Address</h1>
                        <h1 className='text-sm text-gray-700'>Central Park Phase 2</h1>
                        <h1 className='text-sm text-gray-700'>Kondapur, Hyderabad</h1>
                        <h1 className='text-sm text-gray-700'>Telangana 500084</h1>
                    </div>
                </div>
                <hr className='border-b my-6'/>
                <div>
                    <div className='mb-4'>
                        <h1 className='font-medium'>Driver Details</h1>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <img className='h-16 pl-4' src={orderProfile1} alt="" />
                        </div>
                        <div className='pr-6'>
                            <h1 className='text-base font-semibold'>Sagar</h1>
                            <h1 className='text-gray-400 text-xs pt-2'>Drives</h1>
                            <h1 className='text-blue-900 text-sm font-semibold pb-1'>Motor Cycle</h1>
                        </div>
                        <div className='flex w-3/5 justify-between'>
                            <div>
                                <div className='flex items-center'>
                                    <img className='h-6' src={phoneIcon} alt="" />
                                    <h1 className='text-sm pl-2'>+919988904321</h1>
                                </div>
                                <div className='flex items-center pt-4'>
                                    <img className='h-6' src={msjIcon} alt="" />
                                    <h1 className='text-sm pl-2'>sagar@gmail.com</h1>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-sm font-medium'>Driver Rating</h1>
                                </div>
                                <div className='flex items-center pt-2'>
                                    <h1 className='text-xs'>4.5</h1>
                                    <img className='h-2 px-2' src={rating} alt="" />
                                    <h1 className='text-xs'>1.3k Reviews</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-b my-6'/>
                <div className='flex w-full justify-between'>
                    <div>
                        <div>
                            <h1 className='text-sm'>Need Help</h1>
                        </div>
                        <div className='flex py-0.5 items-center'>
                            <img className='h-3' src={infoCircle} alt="" />
                            <h1 className='text-xs px-1 text-gray-500'>Order Issues</h1>
                            <img src={tiltArrow} alt="" />
                        </div>
                        <div className='flex py-0.5 items-center'>
                            <img className='h-3' src={truckTime} alt="" />
                            <h1 className='text-xs px-1 text-gray-500'>Delivery Info</h1>
                            <img src={tiltArrow} alt="" />
                        </div>
                        <div className='flex py-0.5 items-center'>
                            <img className='h-3' src={boxreturn} alt="" />
                            <h1 className='text-xs px-1 text-gray-500'>Return</h1>
                            <img src={tiltArrow} alt="" />
                        </div>
                    </div>
                    <div className='w-2/6'>
                        <div>
                            <h1 className='text-sm'>Order Summary</h1>
                        </div>
                        <div className='flex w-full justify-between pb-1'>
                            <h1 className='text-gray-500 text-sm'>Total</h1>
                            <h1 className='text-gray-500 text-sm'>₹70</h1>
                        </div>
                        <div className='flex w-full justify-between pb-1'>
                            <h1 className='text-gray-500 text-xs'>Base price(Motorcycle)</h1>
                            <h1 className='text-gray-500 text-xs'>₹50</h1>
                        </div>
                        <div className='flex w-full justify-between pb-1'>
                            <h1 className='text-gray-500 text-xs'>Over mileage(9km)</h1>
                            <h1 className='text-gray-500 text-xs'>₹50</h1>
                        </div>
                        <div className='flex w-full justify-between pb-1'>
                            <h1 className='text-gray-500 text-xs'>Coupon Discount-</h1>
                            <h1 className='text-gray-500 text-xs'>-₹30</h1>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default OrderList;
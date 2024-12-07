import calander from '../../assets/admin/calander.png'
import arrowdown from '../../assets/admin/arrowdown2.png'
import avatar1 from '../../assets/admin/avatar1.png'
import avatar2 from '../../assets/admin/avatar2.png'
import avatar3 from '../../assets/admin/avatar3.png'
import rating from '../../assets/admin/rating.png'
import vehicle1 from '../../assets/admin/reviewVehicle1.png'
import vehicle2 from '../../assets/admin/reviewVehicle2.png'
const OrderList=()=>{
    return(
        <div className='w-full flex flex-col'>
            <div className='w-11/12 pt-12 flex flex-col mb-6'>
                <div className='flex justify-between py-4 mb-8'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Reviews</h1>
                    </div>
                    <div className='flex items-center shadow-md px-2 rounded-lg'>
                        <div className='h-8 w-8 m-3 bg-blue-200 rounded-lg flex justify-center items-center'>
                            <img className='h-6' src={calander} alt="" />
                        </div>
                        <div>
                            <h1 className='text-sm font-medium'>Filter Period</h1>
                            <h1 className='text-xs text-gray-500'>17 July 2023 - 21 August 2023</h1>
                        </div>
                        <div className='px-1'>
                            <img className='h-5 cursor-pointer' src={arrowdown} alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className='flex bg-gray-50 p-3 pr-0 my-6 items-center rounded-lg shadow-md'>
                        <div className='w-3/5'>
                            <div>
                                <div className='flex items-center my-2'>
                                    <div>
                                        <img className='h-12' src={avatar1} alt="" />
                                    </div>
                                    <div className='mx-3'>
                                        <h1 className='text-sm font-semibold'>Harsha</h1>
                                        <h1 className='text-xs text-gray-500'>3 hours ago</h1>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <p className='text-xs text-gray-700 font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text </p>
                                </div>
                                <div className='flex items-center mb-4'>
                                    <img className='h-4' src={rating} alt="" />
                                    <h1 className='px-3 text-sm'>4.5</h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <img src={vehicle1} alt="" />
                        </div>
                    </div>
                    <div className='flex bg-gray-50 p-3 pr-0 my-6 items-center rounded-lg shadow-md'>
                        <div className='w-3/5'>
                            <div>
                                <div className='flex items-center my-2'>
                                    <div>
                                        <img className='h-12' src={avatar2} alt="" />
                                    </div>
                                    <div className='mx-3'>
                                        <h1 className='text-sm font-semibold'>Harsha</h1>
                                        <h1 className='text-xs text-gray-500'>3 hours ago</h1>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <p className='text-xs text-gray-700 font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text </p>
                                </div>
                                <div className='flex items-center mb-4'>
                                    <img className='h-4' src={rating} alt="" />
                                    <h1 className='px-3 text-sm'>4.5</h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <img src={vehicle2} alt="" />
                        </div>
                    </div>
                    <div className='flex bg-gray-50 p-3 pr-0 my-6 items-center rounded-lg shadow-md'>
                        <div className='w-3/5'>
                            <div>
                                <div className='flex items-center my-2'>
                                    <div>
                                        <img className='h-12' src={avatar3} alt="" />
                                    </div>
                                    <div className='mx-3'>
                                        <h1 className='text-sm font-semibold'>Harsha</h1>
                                        <h1 className='text-xs text-gray-500'>3 hours ago</h1>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <p className='text-xs text-gray-700 font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text </p>
                                </div>
                                <div className='flex items-center mb-4'>
                                    <img className='h-4' src={rating} alt="" />
                                    <h1 className='px-3 text-sm'>4.5</h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <img src={vehicle1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default OrderList;
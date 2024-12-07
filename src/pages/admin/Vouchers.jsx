import { useNavigate } from 'react-router-dom'
import plus from '../../assets/admin/plus.png'
import copy from '../../assets/admin/copy.png'
import arrowright from '../../assets/admin/arrowright.png'
import flash from '../../assets/admin/flash.png'
import launch from '../../assets/admin/launch.png'


const Voucher=()=>{
    const navigate = useNavigate();
    return(
        <div className='w-full flex flex-col'>
            <div className='w-11/12 pt-12 flex flex-col mb-6'>
                <div className='w-full items-center justify-between flex my-4 pb-4'>
                    <h1 className='text-lg font-semibold '>Vouchers</h1>
                    <button onClick={()=>navigate("/fastx/admin/add_coupon")} className=' bg-blue-900 p-1.5 flex items-center rounded-md'>
                        <img className='h-3 px-2' src={plus} alt="" />
                        <h1 className='text-white p-1 text-xs'>Add New Coupon</h1>
                    </button>
                </div>
                <div>
                    <h1 className='font-semibold mb-4'>Coupons available for customers</h1>
                </div>
                <div className='justify-between items-center grid grid-cols-3 gap-4'>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                        <div>
                            <h1 className='text-lg font-extrabold text-blue-950'>10% OFF</h1>
                        </div>
                        <div>
                            <h1 className='text-xs font-semibold text-blue-950'>For orders over ₹999</h1>
                        </div>
                        <div className='flex items-center justify-between my-6'>
                            <div>
                                <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-3 mx-1' src={copy} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                <img className='h-3 mx-1' src={arrowright} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                            </div>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='text-xs text-slate-500 mb-1'>05/08/2021 04:00 – 09/08/2021 12:00</li>
                            <li className='text-xs text-slate-500 mb-1'>For all products.</li>
                            <li className='text-xs text-slate-500 mb-1'> Combinations: Get 20% off when you spend over $169.00 or get 15% off when you spend over $89.00.</li>
                        </ul>
                    </div>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                        <div>
                            <h1 className='text-lg font-extrabold text-blue-950'>5% OFF</h1>
                        </div>
                        <div>
                            <h1 className='text-xs font-semibold text-blue-950'>FOR WHOLE ORDER</h1>
                        </div>
                        <div className='flex items-center justify-between my-6'>
                            <div>
                                <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-3 mx-1' src={copy} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                <img className='h-3 mx-1' src={arrowright} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                            </div>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='text-xs text-slate-500 mb-1'>05/08/2021 04:00 – 09/08/2021 12:00</li>
                            <li className='text-xs text-slate-500 mb-1'>For all products.</li>
                            <li className='text-xs text-slate-500 mb-1'> Combinations: Get 20% off when you spend over ₹1000 or get 5% off when you spend over ₹799.</li>
                        </ul>
                    </div>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                        <div>
                            <h1 className='text-lg font-extrabold text-blue-950'>10% OFF</h1>
                        </div>
                        <div>
                            <h1 className='text-xs font-semibold text-blue-950'>For orders over ₹999</h1>
                        </div>
                        <div className='flex items-center justify-between my-6'>
                            <div>
                                <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-3 mx-1' src={copy} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                <img className='h-3 mx-1' src={arrowright} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-between p-0.5 my-4 bg-yellow-400'>
                            <div className='flex items-center'>
                                <img className='h-3 px-2' src={flash} alt="" />
                                <h1 className='text-xs font-medium'>Flash sale</h1>
                            </div>
                            <div className='flex'>
                                <h1 className='text-xs mx-0.5 font-medium'>Ends in</h1>
                                <h1 className='text-xs mx-0.5 font-bold'>01</h1>
                                <h1 className='text-xs mx-0.5 font-medium'>h</h1>
                                <h1 className='text-xs mx-0.5 font-bold'>08</h1>
                                <h1 className='text-xs mx-0.5 font-medium'>m</h1>
                                <h1 className='text-xs mx-0.5 font-bold'>50</h1>
                                <h1 className='text-xs mx-0.5 font-medium'>s</h1>
                            </div>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='text-xs text-slate-500 mb-1'>Only on full priced items</li>
                            <li className='text-xs text-slate-500 mb-1'>Cannot be combined with other coupons or promotions</li>
                        </ul>
                    </div>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                        <div>
                            <h1 className='text-lg font-extrabold text-blue-950'>10% OFF</h1>
                        </div>
                        <div>
                            <h1 className='text-xs font-semibold text-blue-950'>For orders over ₹999</h1>
                        </div>
                        <div className='flex items-center justify-between my-6'>
                            <div>
                                <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-3 mx-1' src={copy} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                <img className='h-3 mx-1' src={arrowright} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                            </div>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='text-xs text-slate-500 mb-1'>05/08/2021 04:00 – 09/08/2021 12:00</li>
                            <li className='text-xs text-slate-500 mb-1'>For all products.</li>
                            <li className='text-xs text-slate-500 mb-1'> Combinations: Get 20% off when you spend over $169.00 or get 15% off when you spend over $89.00.</li>
                        </ul>
                    </div>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                        <div>
                            <h1 className='text-lg font-extrabold text-blue-950'>5% OFF</h1>
                        </div>
                        <div>
                            <h1 className='text-xs font-semibold text-blue-950'>FOR WHOLE ORDER</h1>
                        </div>
                        <div className='flex items-center justify-between my-6'>
                            <div>
                                <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-3 mx-1' src={copy} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                <img className='h-3 mx-1' src={arrowright} alt="" />
                                <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                            </div>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='text-xs text-slate-500 mb-1'>05/08/2021 04:00 – 09/08/2021 12:00</li>
                            <li className='text-xs text-slate-500 mb-1'>For all products.</li>
                            <li className='text-xs text-slate-500 mb-1'> Combinations: Get 20% off when you spend over ₹1000 or get 5% off when you spend over ₹799.</li>
                        </ul>
                    </div>
                </div>
                <div className='my-8'>
                    <h1 className='text-xl font-semibold'>Newly added Vouchers</h1>
                </div>
                <div className='justify-between items-center grid grid-cols-3 gap-4'>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                            <div>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg font-extrabold text-blue-950'>10% OFF</h1>
                                    <button className='flex rounded-md bg-blue-900 h-8 w-32 items-center'>
                                        <img className='px-1' src={launch} alt="" />
                                        <h1 className='text-white text-xs px-1'>Launch Voucher</h1>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xs font-semibold text-blue-950'>For orders over ₹999</h1>
                            </div>
                            <div className='flex items-center justify-between my-6'>
                                <div>
                                    <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img className='h-3 mx-1' src={copy} alt="" />
                                    <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                    <img className='h-3 mx-1' src={arrowright} alt="" />
                                    <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                                </div>
                            </div>
                            <div className='flex items-center justify-between p-0.5 my-4 bg-yellow-400'>
                                <div className='flex items-center'>
                                    <img className='h-3 px-2' src={flash} alt="" />
                                    <h1 className='text-xs font-medium'>Flash sale</h1>
                                </div>
                                <div className='flex'>
                                    <h1 className='text-xs mx-0.5 font-medium'>Ends in</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>01</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>h</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>08</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>m</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>50</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>s</h1>
                                </div>
                            </div>
                            <ul className='list-disc pl-4'>
                                <li className='text-xs text-slate-500 mb-1'>Only on full priced items</li>
                                <li className='text-xs text-slate-500 mb-1'>Cannot be combined with other coupons or promotions</li>
                            </ul>
                    </div>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                            <div>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg font-extrabold text-blue-950'>10% OFF</h1>
                                    <button className='flex rounded-md bg-blue-900 h-8 w-32 items-center'>
                                        <img className='px-1' src={launch} alt="" />
                                        <h1 className='text-white text-xs px-1'>Launch Voucher</h1>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xs font-semibold text-blue-950'>For orders over ₹999</h1>
                            </div>
                            <div className='flex items-center justify-between my-6'>
                                <div>
                                    <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img className='h-3 mx-1' src={copy} alt="" />
                                    <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                    <img className='h-3 mx-1' src={arrowright} alt="" />
                                    <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                                </div>
                            </div>
                            <div className='flex items-center justify-between p-0.5 my-4 border border-black'>
                                <div className='flex items-center'>
                                    <img className='h-3 px-2' src={flash} alt="" />
                                    <h1 className='text-xs font-medium'>Flash sale</h1>
                                </div>
                                <div className='flex'>
                                    <h1 className='text-xs mx-0.5 font-medium'>Ends in</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>01</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>h</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>08</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>m</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>50</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>s</h1>
                                </div>
                            </div>
                            <ul className='list-disc pl-4'>
                                <li className='text-xs text-slate-500 mb-1'>Only on full priced items</li>
                                <li className='text-xs text-slate-500 mb-1'>Cannot be combined with other coupons or promotions</li>
                            </ul>
                    </div>
                    <div className='border-2 w-full border-gray-400 rounded-md p-4'>
                            <div>
                                <div className='flex justify-between'>
                                    <h1 className='text-lg font-extrabold text-blue-950'>10% OFF</h1>
                                    <button className='flex rounded-md bg-blue-900 h-8 w-32 items-center'>
                                        <img className='px-1' src={launch} alt="" />
                                        <h1 className='text-white text-xs px-1'>Launch Voucher</h1>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xs font-semibold text-blue-950'>For orders over ₹999</h1>
                            </div>
                            <div className='flex items-center justify-between my-6'>
                                <div>
                                    <h1 className='text-sm text-blue-700 font-medium'>Code: FASTX10</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img className='h-3 mx-1' src={copy} alt="" />
                                    <h1 className='text-sm mr-2 font-medium'>copy</h1>
                                    <img className='h-3 mx-1' src={arrowright} alt="" />
                                    <h1 className='text-sm mr-2 font-medium'>Apply</h1>
                                </div>
                            </div>
                            <div className='flex items-center justify-between p-0.5 my-4 border border-black'>
                                <div className='flex items-center'>
                                    <img className='h-3 px-2' src={flash} alt="" />
                                    <h1 className='text-xs font-medium'>Flash sale</h1>
                                </div>
                                <div className='flex'>
                                    <h1 className='text-xs mx-0.5 font-medium'>Ends in</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>01</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>h</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>08</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>m</h1>
                                    <h1 className='text-xs mx-0.5 font-bold'>50</h1>
                                    <h1 className='text-xs mx-0.5 font-medium'>s</h1>
                                </div>
                            </div>
                            <ul className='list-disc pl-4'>
                                <li className='text-xs text-slate-500 mb-1'>Only on full priced items</li>
                                <li className='text-xs text-slate-500 mb-1'>Cannot be combined with other coupons or promotions</li>
                            </ul>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default Voucher;
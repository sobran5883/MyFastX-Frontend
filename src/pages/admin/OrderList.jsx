import search1 from '../../assets/admin/search1.png'
import calendar from '../../assets/admin/calendar1.png'
import arrowDown from '../../assets/admin/arrowDown.png'
import up from '../../assets/admin/up.png'
import Orders from './charts/orders_bar_chart/Order'
import Bike from './charts/vehicle_type_chart/bike/Bike'
import ThreeWheeler from './charts/vehicle_type_chart/3_wheeler/3Wheeler'
import SevenFt from './charts/vehicle_type_chart/7ft/7ft'
import EightFt from './charts/vehicle_type_chart/8ft/8Ft'
import Tata407 from './charts/vehicle_type_chart/tata_407/Tata407'
import Eicher from './charts/vehicle_type_chart/eicher/Eicher'
import { useNavigate } from 'react-router-dom'
const OrderList=()=>{
  const navigate=useNavigate()
    return(
        <div className='w-full flex flex-col'>
                <div className='w-11/12 pt-12 flex flex-col mb-6'>
                    <div className='flex items-center w-full justify-around'>
                        <div className='w-1/2'>
                          <div className='w-11/12 flex justify-between'>
                            <div>
                              <h1 className='text-xl font-medium'>Orders</h1>
                              <h1 className='text-xs text-gray-500'>Graph of Orders</h1>
                            </div>
                            <div>
                              <button className='border rounded-3xl flex h-10 w-32 items-center justify-center'>
                                <h1 className='text-sm font-medium'>This Week</h1>
                                <img className='h-6 pl-2' src={arrowDown} alt="" />
                              </button>
                            </div>
                          </div>
                          <div className='flex w-11/12 justify-between'>
                            <div className=' my-3'>
                            <h1 className='text-sm font-medium'>Last Week <span className='text-green-400'>1800</span></h1>
                            </div>
                            <div className='flex items-center'>
                              <h1 className='text-lg font-semibold'>2500</h1>
                              <h1 className='ml-3 mr-1 text-green-400'>7%</h1>
                              <img className='' src={up} alt="" />
                            </div>
                          </div>
                          <div>
                          <Orders/>
                          </div>
                        </div>
                        <div className='w-1/3'>
                            <div className='pl-4'>
                              <h1 className='text-2xl font-medium text-gray-400'>Vehicle Type</h1>
                            </div>
                            <div className='grid grid-cols-3 '>
                              <div className='flex flex-col items-center justify-center'>
                                <Bike/>
                                <h1 className='text-sm text-gray-600'>250</h1>
                              </div>
                              <div className='flex flex-col items-center justify-center'>
                                <ThreeWheeler/>
                                <h1 className='text-sm text-gray-600'>400</h1>
                              </div>
                              <div className='flex flex-col items-center justify-center'>
                                <SevenFt/>
                                <h1 className='text-sm text-gray-600'>140</h1>
                              </div>
                              <div className='flex flex-col items-center justify-center'>
                                <EightFt/>
                                <h1 className='text-sm text-gray-600'>100</h1>
                              </div>
                              <div className='flex flex-col items-center justify-center'>
                                <Tata407/>
                                <h1 className='text-sm text-gray-600'>22</h1>
                              </div>
                              <div className='flex flex-col items-center justify-center'>
                                <Eicher/>
                                <h1 className='text-sm text-gray-600'>10</h1>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 flex flex-col items-center justify-center'>
                    <div className='flex w-full justify-between items-center'>
                        <div className='pl-4'>
                            <h1 className='text-xl font-medium'>Orders</h1>
                        </div>
                        <div className='flex items-center mb-2'>
                            <button className='mx-1 border border-gray-400 border-y-2 rounded-sm px-2 py-1 h-8 flex items-center font-medium text-xs'>Export to excel</button>
                        </div>
                    </div>
                    <hr className='w-full my-4'/>
                    <div className='w-full flex justify-between'>
                        <div className='flex border rounded-lg px-2 py-1 h-8 w-1/2 ml-4'>
                            <img src={search1} alt="" />
                            <input className='text-sm focus:outline-none pl-2 w-full' type="text" placeholder='search order ID'/>
                        </div>
                        <div className='flex'>
                            <div className='border flex items-center rounded-sm mr-2 px-2 py-1 justify-between'>
                                <img className='h-5' src={calendar} alt="" />
                            </div>
                            <div className='flex border items-center rounded-sm mr-2 px-2 py-1 justify-between'>
                                <h1>Type</h1>
                                <img className='pl-1 h-4' src={arrowDown} alt="" />
                            </div>
                            <div className='flex border items-center rounded-sm mr-2 px-2 py-1 justify-between'>
                                <h1>Status</h1>
                                <img className='pl-1 h-4' src={arrowDown} alt="" />
                            </div>
                            <div className='flex border items-center rounded-sm mr-2 px-2 py-1 justify-between'>
                                <h1>Today</h1>
                                <img className='pl-1 h-4' src={arrowDown} alt="" />
                            </div>
                        </div>
                    </div>
                    <hr className='w-full mt-4 border-t border-gray-200'/>
                    <div className='w-full'>
                        <table className="w-full">
                          <thead>
                            <tr className='py-4'>
                              <td><input className='h-6  w-6 rounded-sm mt-1' type="checkbox" /></td>
                              <td className='border-b-2 py-4'>order ID</td>
                              <td className='border-b-2 py-4'>Date</td>
                              <td className='border-b-2 py-4'>Customer</td>
                              <td className='border-b-2 py-4'>Vehicle</td>
                              <td className='border-b-2 py-4'>Driver</td>
                              <td className='border-b-2 py-4'>Weight</td>
                              <td className='border-b-2 py-4'>status</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className='py-4'>
                              <td><input className='h-6 w-6 mt-1' type="checkbox" /></td>
                              <button onClick={()=>(navigate("/fastx/admin/order_detail"))}><td className='text-sm border-b py-4'>#7676</td></button>
                              <td className='text-sm border-b py-4'>18/08/2022</td>
                              <td className='text-sm border-b py-4'>Suresh</td>
                              <td className='text-sm border-b py-4'>Bike</td>
                              <td className='text-sm border-b py-4'>David</td>
                              <td className='text-sm border-b py-4'>14Kg</td>
                              <td className='text-sm border-b py-4 text-yellow-400'>on going</td>
                            </tr>
                            <tr className='py-4'>
                              <td><input className='h-6 w-6 mt-1' type="checkbox" /></td>
                              <button onClick={()=>(navigate("/fastx/admin/order_detail"))}><td className='text-sm border-b py-4'>#7676</td></button>
                              <td className='text-sm border-b py-4'>18/08/2022</td>
                              <td className='text-sm border-b py-4'>Suresh</td>
                              <td className='text-sm border-b py-4'>Bike</td>
                              <td className='text-sm border-b py-4'>David</td>
                              <td className='text-sm border-b py-4'>14Kg</td>
                              <td className='text-sm border-b py-4 text-yellow-400'>on going</td>
                            </tr>
                            <tr className='py-4'>
                              <td><input className='h-6 w-6 mt-1' type="checkbox" /></td>
                              <button onClick={()=>(navigate("/fastx/admin/order_detail"))}><td className='text-sm border-b py-4'>#7676</td></button>
                              <td className='text-sm border-b py-4'>18/08/2022</td>
                              <td className='text-sm border-b py-4'>Suresh</td>
                              <td className='text-sm border-b py-4'>Bike</td>
                              <td className='text-sm border-b py-4'>David</td>
                              <td className='text-sm border-b py-4'>14Kg</td>
                              <td className='text-sm border-b py-4 text-green-500'>Completed</td>
                            </tr>
                            <tr className='py-4'>
                              <td><input className='h-6 w-6 mt-1' type="checkbox" /></td>
                              <button onClick={()=>(navigate("/fastx/admin/order_detail"))}><td className='text-sm border-b py-4'>#7676</td></button>
                              <td className='text-sm border-b py-4'>18/08/2022</td>
                              <td className='text-sm border-b py-4'>Suresh</td>
                              <td className='text-sm border-b py-4'>Bike</td>
                              <td className='text-sm border-b py-4'>David</td>
                              <td className='text-sm border-b py-4'>14Kg</td>
                              <td className='text-sm border-b py-4 text-green-500'>Completed</td>
                            </tr>
                            <tr className='py-4'>
                              <td><input className='h-6 w-6 mt-1' type="checkbox" /></td>
                              <button onClick={()=>(navigate("/fastx/admin/order_detail"))}><td className='text-sm border-b py-4'>#7676</td></button>
                              <td className='text-sm border-b py-4'>18/08/2022</td>
                              <td className='text-sm border-b py-4'>Suresh</td>
                              <td className='text-sm border-b py-4'>Bike</td>
                              <td className='text-sm border-b py-4'>David</td>
                              <td className='text-sm border-b py-4'>14Kg</td>
                              <td className='text-sm border-b py-4 text-green-500'>Completed</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
         </div>
    )
}
export default OrderList;

import calander from '../../assets/admin/calander.png'
import arrowdown from '../../assets/admin/arrowdown2.png'
import orders from '../../assets/admin/orders.png'
import reached from '../../assets/admin/reached.png'
import revenue from '../../assets/admin/revenue.png'
import arrowUp from '../../assets/admin/arrowUp.png'
import threeDots from '../../assets/admin/threeDots.png'
import weekly from '../../assets/admin/weekly.png'

import PieChart1 from './charts/revenue_pie_chart/total_order/TotalOrder'
import PieChart2 from './charts/revenue_pie_chart/customer_growth/CustomerGrowth'
import PieChart3 from './charts/revenue_pie_chart/total_revenue/TotalRevenue'
import OrderChart from './charts/order_area_chart/ChartOrder'
import TotalRevenue from './charts/total_revenue_line_charts/TotalRevenue'
import CustomerReached from './charts/customer_reached_bar_chart/CustomerReached'
const Admin=()=>{
    return(
        <div className='w-full flex flex-col'>
                <div className='w-11/12 pt-12 flex flex-col mb-6'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='font-semibold text-3xl text-gray-500'>Dashboard</h1>
                            <p className='text-slate-400'>Hi, Admin. Welcome back  to FastX Admin!</p>
                        </div>
                        <div className=''>
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
                    </div>
                    <div className='mt-12 flex w-4/5 justify-between'>
                        <div className='flex'>
                            <div className='p-2'>
                                <img className='h-20' src={orders} alt="" />
                            </div>
                            <div className='p-2'>
                                <div>
                                   <h1 className='font-bold text-4xl text-slate-600'>75</h1>
                                   <h1 className='text-sm text-gray-500'>Total Orders</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img className='p-1' src={arrowUp} alt="" />
                                    <h1 className='text-xs'>4% (30 days)</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='p-2'>
                                <img className='h-20' src={revenue} alt="" />
                            </div>
                            <div className='p-2'>
                                <div>
                                   <h1 className='font-bold text-4xl text-slate-600'>$128</h1>
                                   <h1 className='text-sm text-gray-500'>Total Orders</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img className='p-1' src={arrowUp} alt="" />
                                    <h1 className='text-xs'>4% (30 days)</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='p-2'>
                                <img className='h-20' src={reached} alt="" />
                            </div>
                            <div className='p-2'>
                                <div>
                                   <h1 className='font-bold text-4xl text-slate-600'>350</h1>
                                   <h1 className='text-sm text-gray-500'>Total Orders</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img className='p-1' src={arrowUp} alt="" />
                                    <h1 className='text-xs'>4% (30 days)</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full mt-8 mb-10 justify-center'>
                    <div className='w-6/12 shadow-md rounded-lg mr-1 flex flex-col'>
                        <div className='pl-8 w-11/12 flex justify-between items-center'>
                            <h1 className='text-lg font-semibold text-gray-700'>Pie Chart</h1>
                            <div className='flex'>
                                <div className='flex items-center'>
                                <input className='ml-4 w-5 h-4' type="checkbox"/>
                                <h1 className='text-sm font-medium'>chart</h1>
                                </div>
                                <div className='flex items-center'>
                                <input className='ml-4 w-5 h-4' type="checkbox"/>
                                <h1 className='text-sm font-medium'>Show Value</h1>
                                </div>
                                <button><img className='h-6 cursor-pointer px-2' src={threeDots} alt="" /></button>
                            </div>
                        </div>
                        <div className='flex mt-3'>
                            <PieChart1/>
                            <PieChart2/>
                            <PieChart3/>
                        </div>
                    </div>
                    <div className='w-6/12 shadow-md rounded-lg ml-1'>
                        <div className='pl-4'>
                            <h1 className='text-lg font-semibold text-gray-700'>Chart Order</h1>
                            <h1 className='text-xs text-gray-400'>Lorem ipsum dolar sit amet, consectetur adip</h1>
                        </div>
                        <div>
                        <OrderChart/>
                        </div>
                    </div>
                </div>

                <div className='flex w-full mb-16'>
                    <div className='w- w-1/2 shadow-md mr-8 rounded-lg'>
                        <TotalRevenue/>
                    </div>
                    <div className='w w-2/5 shadow-md rounded-lg flex flex-col items-center'>
                        <div className='flex items-center mb-4'>
                            <h1 className='text-lg font-semibold text-gray-700'>Customer Reached</h1>
                            <button><img className='h-8 mx-4 pl-4' src={weekly} alt="" /></button>
                        </div>
                        <CustomerReached/>
                    </div>
                </div>
         </div>
    )
}
export default Admin;
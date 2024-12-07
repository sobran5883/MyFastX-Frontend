import { useState } from 'react'
import { useSelector } from 'react-redux';
import analysis from '../../assets/admin/analysis.png'
import growth from '../../assets/admin/growth.png'
import newChat from '../../assets/admin/newChat.png'
import orderBox from '../../assets/admin/orderBox.png'
import xsign from '../../assets/admin/x-sign.png'

import logo from '../../assets/admin/logo.png'
import icon1 from '../../assets/admin/Icon1.png'
import icon2 from '../../assets/admin/Icon2.png'
import icon4 from '../../assets/admin/Icon4.png'
import icon6 from '../../assets/admin/Icon6.png'
import icon7 from '../../assets/admin/Icon7.png'
import icon9 from '../../assets/admin/Icon9.png'
import icon10 from '../../assets/admin/Icon10.png'
import icon11 from '../../assets/admin/Icon11.png'
import notification1 from '../../assets/admin/notification1.png'

import { NavLink, Outlet } from 'react-router-dom'
const Admin=()=>{
    const {currentAdmin} = useSelector(state=> state.admin);
    const [open, setOpen] = useState(false);
    const activeLink='bg-green-200 text-deep-green'
    const normalLink=''
    return(
        <div className='w-full flex'>
            <div className='w-1/5 flex justify-center'>
                <div className='pt-8 w-11/12 bg-white'>
                    <div>
                        <img className='h-12' src={logo} alt="" />
                    </div>
                    <div>
                        <h1 className='text-sm text-slate-400'>Admin Dashboard</h1>
                    </div>
                    <div className='pt-12'>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/dashboard">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon1} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/order_list">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon2} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Order List</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/customer">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon4} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Customer</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/reviews">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon6} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Reviews</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/driver_list">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon7} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Drivers List</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/chat_support">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon9} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Chat with customer</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/vouchers">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon10} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>Vochers</h1>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} to="/fastx/admin/setting/profile">
                        <div className='flex mb-4'>
                            <div className='mx-2'>
                                <img src={icon11} alt="" />
                            </div>
                            <div className='ml-2'>
                                <h1>setting</h1>
                            </div>
                        </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='w-11/12 pt-10 flex flex-col align-baseline justify-end'>
                <div className="header flex w-full h-10 justify-end">
                    <div className='w-1/4 flex items-center justify-end mr-8 border-r-2 pr-4 relative'>
                        <div className=''>
                        <button onClick={()=>{setOpen(!open)}}>
                        <div className='px-2'>
                            <img className='h-10' src={notification1} alt="" />
                        </div>
                        </button>

                        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}` }>
                            <div className={`dropdown-menu ${open ? 'block' : 'hidden'} bg-white absolute z-50 flex flex-col items-center py-2 w-96 right-6`}>
                                <div className='flex items-center justify-between pb-2 mb-3 w-11/12 border-b'>
                                    <h1 className='font-medium'>Notification</h1>
                                    <img onClick={()=>{setOpen(!open)}} className='h-3 w-3 cursor-pointer' src={xsign} alt="" />
                                </div>
                                <div className='w-11/12'>
                                    <button className='bg-green-500 text-sm p-1 px-2 rounded-2xl'>All Notifications</button>
                                    <button className='border border-black rounded-2xl text-sm px-2 py-1 ml-4'>Unread</button>
                                </div>
                                <div className='w-11/12 my-3'>
                                    <h1 className='font-medium'>Today</h1>
                                </div>
                                <div className='w-11/12 h-20 flex justify-between items-center my-2 p-1 rounded-md bg-gray-100'>
                                    <img className='h-10' src={newChat} alt="" />
                                    <div className='px-1 '>
                                        <h1 className='text-sm font-semibold pb-3'>New Chat from Customer Srinvas</h1>
                                        <h1 className='text-xs'>Click here to reply</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-xs font-medium'>08:15</h1>
                                    </div>
                                </div>
                                <div className='w-11/12 h-20  flex justify-between items-center my-2 p-1 rounded-md bg-gray-100'>
                                    <img className='h-10' src={newChat} alt="" />
                                    <div className='px-1'>
                                        <h1 className='text-sm font-semibold pb-3'>New Chat from Customer Srinvas</h1>
                                        <h1 className='text-xs'>Click here to reply</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-xs font-medium'>08:15</h1>
                                    </div>
                                </div>
                                <div className='w-11/12 h-20  flex justify-between items-center my-2 p-1 rounded-md bg-gray-100'>
                                    <img className='h-10' src={growth} alt="" />
                                    <div className='px-1'>
                                        <h1 className='text-sm font-semibold pb-3'>Revenue got increased 8%</h1>
                                        <h1 className='text-xs'>Click here to check</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-xs font-medium'>2hrs ago</h1>
                                    </div>
                                </div>
                                <div className='w-11/12 h-20  flex justify-between items-center my-2 p-1 rounded-md bg-gray-100'>
                                    <img className='h-10' src={analysis} alt="" />
                                    <div className='px-1'>
                                        <h1 className='text-sm font-semibold pb-3'>New Month-New Analytics</h1>
                                        <h1 className='text-xs'>Click here to check</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-xs font-medium'>2hrs ago</h1>
                                    </div>
                                </div>
                                <div className='w-11/12'>
                                    <h1 className='font-semibold'>YESTERDAY</h1>
                                </div>
                                <div className='w-11/12 h-20  flex justify-between items-center my-2 p-1 rounded-md bg-gray-100'>
                                    <img className='h-10' src={orderBox} alt="" />
                                    <div className='px-1'>
                                        <h1 className='text-sm font-semibold pb-3'>New orders are increasing</h1>
                                        <h1 className='text-xs'>Click here to check</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-xs font-medium'>2hrs ago</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='flex gap-1 w-1/5 items-center'>
                        <h1>hello,</h1>
                        <h1>{currentAdmin.name}</h1>
                        <img
                        className='h-10 rounded-full'
                        src={currentAdmin.avatar || "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                        alt="Admin Avatar"
                    />
                    </div>
                </div>

                <div className="relative">
                    
                    <Outlet/>
                    <div className={`absolute inset-0 ${open ? 'bg-gray-500 opacity-50' : 'hidden'}` } ></div>
                </div>
                
            </div>
        </div>
    )
}
export default Admin;
import './navbar.css';
import logo from '../../assets/navbar/logo.png'
import arrowdown from '../../assets/navbar/arrowdown.png'
import {useState, useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { FaFigma } from "react-icons/fa";
export default function Navbar(){
    const {currentUser} = useSelector(state=> state.user);
    const {currentAdmin} = useSelector(state=> state.admin);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    let menuRef= useRef();
    useEffect(()=>{
        let handler=(e)=>{
            if(!menuRef.current.contains(e.target)){
                setClick(false);
            }
        };
        document.addEventListener('mousedown',handler);
        return()=>{
            document.removeEventListener('mousedown',handler);
        }
    })
    
    return(
        <div className="navContainer">
            <div className="navContent" ref={menuRef}>
                <div className="flex items-center justify-center">
                    <NavLink to='/'>
                    <div className='flex items-center'>
                        <h1 className='flex items-center font-semibold text-lg'>
                            <span>MyFast</span>
                            <span className='text-deep-green'>X</span>
                            <img src={logo} alt="" />
                        </h1>
                    </div>
                    </NavLink>
                </div>
            
                <div className='flex w-full items-center justify-end'>
                    <div className="navMiddle">
                        <ul className={click?"nav-menu active":"nav-menu"}>
                            <h1 className='flex p-1 w-full pl-8 font-semibold text-lg bg-white md:hidden'>
                                <span>MyFast</span>
                                <span className='text-deep-green'>X</span>
                                <img src={logo} alt="" />
                            </h1>
                            <li onClick={()=>{setClick(false)}}><NavLink to="/home">Home</NavLink></li>
                            <div className='border-t-[1px] border-gray-200 w-full block md:hidden'></div>
                            <li onClick={()=>{setClick(false)}}><NavLink to="/about">About Us</NavLink></li>
                            <div className='border-t-[1px] border-gray-200 w-full block md:hidden'></div>
                            <li onClick={()=>{setClick(false)}}><NavLink to="/help">Help</NavLink></li>
                            <div className='border-t-[1px] border-gray-200 w-full block md:hidden'></div>
                            <li onClick={() => { setClick(false) }}> <NavLink to={!currentAdmin ? "/admin/login" : "/fastx/admin/dashboard"}>Admin</NavLink></li>
                            <div className='border-t-[1px] border-gray-200 w-full block md:hidden'></div>
                            {currentUser ?(
                                <div className='w-full block md:hidden'>
                                <li onClick={()=>{setClick(false)}}><NavLink to="/profile/myprofile">My Profile</NavLink></li>
                                {/* <li onClick={()=>{setClick(false)}}><NavLink to='/profile/wallet'>Wallet</NavLink></li> */}
                                {/* <li onClick={()=>{setClick(false)}}><NavLink to="/profile/order">Orders</NavLink></li> */}
                                </div>
                            ):(
                                <NavLink to="/login"><button className='ml-[20%] mt-6 font-inter h-8 w-36 md:h-10 md:w-40 text-base text-black border-[1px] border-black md:hidden'>Log In</button></NavLink>
                            )}
                            
                            {!currentUser ?(
                            <div className='hidden md:block'>
                                {/* <NavLink to="/signup"><button className='bg-black mr-2 font-inter h-8 w-36 md:h-10 md:w-40 rounded-lg text-sm text-white '>Sign Up</button></NavLink> */}
                                <NavLink to="/login"><button className='bg-black font-inter h-8 w-36 md:h-10 md:w-40 rounded-lg text-sm text-white '>Log In</button></NavLink>
                            </div>
                            ):(
                            <div className='navDropDown  hidden md:block'>  
                            <ul>
                                <li className='relative'>
                                    <div className='flex items-center gap-1'>
                                       <h1 className='text-[16px] py-4 px-1 text-[#133829] md:text-sm font-medium font-inter'>{currentUser.username}</h1>
                                       <img className='h-8  w-8 rounded-full' src={currentUser.avatar} alt="" />
                                       <img className='h-2' src={arrowdown} alt="" />
                                    </div>
                                    <div className='dropdown'>
                                        <ul className=''>
                                            <li onClick={()=>{setClick(false)}}><NavLink to="/profile/myprofile">My Profile</NavLink></li>
                                            <li onClick={()=>{setClick(false)}}><NavLink to='/profile/wallet'>Wallet</NavLink></li>
                                            <li onClick={()=>{setClick(false)}}><NavLink to="/profile/order">Orders</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                             </div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <NavLink to='/1'><FaFigma className='hidden md:block text-xl text-red-500 cursor-pointer'/></NavLink>
                    <NavLink to='/2'><FaFigma className='hidden md:block text-xl text-blue-500 cursor-pointer'/></NavLink>
                </div>
                <div className='humburger' onClick={handleClick}>
                    {click ?(<FaTimes size={18} style={{color:"black"}}/>):(<FaBars size={18} style={{color:"black"}}/>)}
                </div>
            </div>
        </div>
    )
}

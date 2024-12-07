// import {useState} from 'react';
// import { Link,Outlet } from 'react-router-dom';
// import profile1 from '../../assets/profile/profile1.png';
// import plb1 from '../../assets/profile/plb1.png'
// import plb2 from '../../assets/profile/plb2.png'
// import plb3 from '../../assets/profile/plb3.png'
// import plb4 from '../../assets/profile/plb4.png'
// import plb5 from '../../assets/profile/plb5.png'
// import plb6 from '../../assets/profile/plb6.png'
// import plb7 from '../../assets/profile/plb7.png'
// import plb8 from '../../assets/profile/plb8.png'

// const Sidebar =()=>{
//     const [open, setOpen] = useState(true);
//     const toggleSidebar = () => {
//         setOpen(!open);
//     }
//     return(
//         <div className="h-screen flex items-center">
//             <button className="fixed md:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300"
//                 onClick={toggleSidebar}>
//                 <span className="text-white">
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 m-auto" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
//                   </svg>
//                 </span>
//             </button>
//             <div className={`${open ? 'w-48' : 'w-0'} md:w-72 bg-teal-800 h-screen relative duration-500`}>
//             <div className="myProfileContainer bg-green-100 w-full h-fit flex pb-8">
//                 <div className={`duration-200 ${!open && 'invisible'}`}>
//                     <div className="myProfileLeft w-6/12 md:w-2/6 flex h-full flex-col items-baseline mt-20 ml-2 md:ml-8">
//                         <div className="myProfileLeftTop w-full h-16 bg-white flex items-center justify-baseline mb-2 rounded-xl shadow-gray-900">
//                             <div className="profileImg ml-2 h-full flex items-center">
//                                 <img className='flex w-11/12 h-4/6' src={profile1} alt="" />
//                             </div>
//                             <div className="profileText ml-2 md:ml-8 h-3/4 flex flex-col justify-center">
//                                 <div className="profileText1">
//                                     <p className='text-xs md:text-base'>Hello,</p>
//                                 </div>
//                                 <div className="profileText1">
//                                     <p className='text-xs md:text-lg'>Nick Turner</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="myProfileLeftBottom w-full h-full bg-white flex text-center justify-center rounded-xl shadow-gray-900">
//                             <div className="myprofileBottomConten h-fit w-full mt-2">
//                                 <Link to="/profile/myprofile">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb1} alt="" />
//                                     </div>
//                                         <div className="bottomType pl-1">
//                                             <p className='text-xs md:text-xl'>My Profile</p>
//                                         </div>
//                                 </div>
//                                 </Link>
//                                 <Link to="/profile/order">
//                                     <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                         <div className="BottomIcon pl-1 md:pl-6">
//                                             <img className='w-11/12 h-4/5' src={plb2} alt="" />
//                                         </div>
//                                         <div className="bottomType pl-2">
//                                             <p className='text-xs md:text-xl'>Order</p>
//                                         </div>
//                                     </div>
//                                 </Link>
//                                 <Link to="/profile/wallet">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb3} alt="" />
//                                     </div>
//                                     <div className="bottomType pl-2">
//                                         <p className='text-xs md:text-xl'>Wallet</p>
//                                     </div>
//                                 </div>
//                                 </Link>
//                                 <Link to="/profile/refer">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb4} alt="" />
//                                     </div>
//                                     <div className="bottomType pl-2">
//                                         <p className='text-xs md:text-xl'>Refer & Earn</p>
//                                     </div>
//                                 </div>
//                                 </Link>
//                                 <Link to="/profile/contact">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb5} alt="" />
//                                     </div>
//                                     <div className="bottomType pl-2">
//                                         <p className='text-xs md:text-xl'>Contact Us</p>
//                                     </div>
//                                 </div>
//                                 </Link>
//                                 <Link to="/profile/help">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb6} alt="" />
//                                     </div>
//                                     <div className="bottomType pl-2">
//                                         <p className='text-xs md:text-xl'>Help and FAQs</p>
//                                     </div>
//                                 </div>
//                                 </Link>
//                                 <Link to="/profile/feedback">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb7} alt="" />
//                                     </div>
//                                     <div className="bottomType pl-2">
//                                         <p className='text-xs md:text-xl'>Feedback</p>
//                                     </div>
//                                 </div>
//                                 </Link>
//                                 <Link to="/profile/pricing">
//                                 <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
//                                     <div className="BottomIcon pl-1 md:pl-6">
//                                         <img className='w-11/12 h-4/5' src={plb8} alt="" />
//                                     </div>
//                                     <div className="bottomType pl-2">
//                                         <p className='text-xs md:text-xl'>Pricing</p>
//                                     </div>
//                                 </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//             <Outlet/>
//         </div>
//             </div>
//         </div>
//     )
// }

// export default Sidebar;




import { NavLink,Outlet, useLocation, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import plb1 from '../../../assets/profile/plb1.png'
import plb2 from '../../../assets/profile/plb2.png'
// import plb3 from '../../../assets/profile/plb3.png'
import plb4 from '../../../assets/profile/plb4.png'
// import plb5 from '../../../assets/profile/plb5.png'
import plb6 from '../../../assets/profile/plb6.png'
// import plb7 from '../../../assets/profile/plb7.png'
import plb8 from '../../../assets/profile/plb8.png'
import logout from '../../../assets/profile/switch.png'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOutUserStart,  deleteUserFailure, deleteUserSuccess} from '../../../redux/user/userSlice';
const Myprofile=()=>{
    const navigate = useNavigate();
    const {currentUser} = useSelector(state=> state.user);
    const { pathname } = useLocation();
    const [open, setOpen] = useState(true);
    const [orderTabActive, setOrderTabActive] = useState(true);
    const dispatch=useDispatch();
    const toggleSidebar = () => {
        setOpen(!open);
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const updateView = () => {
      setIsMobile(window.innerWidth < 768);
    };
    useEffect(() => {
      window.addEventListener('resize', updateView);
      return () => {
        window.removeEventListener('resize', updateView);
      };
    }, []);

    useEffect(() => {
        if (pathname === '/profile/order_details') {
            setOrderTabActive(true);
        } else {
            setOrderTabActive(false)
        }
    }, [pathname])

    const activeLink='bg-green-200 text-deep-green'
    const normalLink=''

    const handleSignOut = async () => {
        try {
          dispatch(signOutUserStart());
          localStorage.removeItem('access_token');
          navigate('/');
          const message = 'user has been logged out!';
          await new Promise(resolve => setTimeout(resolve, 1000));
          dispatch(deleteUserSuccess(message));
        } catch (error) {
          dispatch(deleteUserFailure(error.message));
        }
      };


    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex pb-8">
            <button className="fixed md:hidden z-90 bottom-20 right-8 bg-teal-800 w-8 h-8 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800 duration-300"
                onClick={toggleSidebar}>
                <span className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 m-auto" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
                  </svg>
                </span>
            </button>
            <div className={`${open ? 'w-80' : 'w-0'} md:w-2/6 flex h-full flex-col items-baseline mt-12 ml-2 md:ml-8 duration-100`}>
                <div className={`duration-200 ${!open && 'invisible'}  w-full h-16 bg-white flex items-center justify-baseline mb-2 rounded-xl shadow-gray-900`}>
                    <div className="profileImg ml-2 h-full flex items-center">
                        <img className='flex w-10 h-10 rounded-full' src={currentUser.avatar} alt="" />
                    </div>
                    <div className="profileText ml-2 md:ml-8 h-3/4 flex flex-col justify-center">
                        <div className="profileText1">
                            <p className='text-xs md:text-sm'>Hello,</p>
                        </div>
                        <div className="profileText1">
                            <p className='text-xs md:text-base font-normal'>{currentUser.username}</p>
                        </div>
                    </div>
                </div>
                <div className={`duration-200 ${!open && 'invisible'} w-full h-full bg-white flex text-center justify-center rounded-xl shadow-gray-900`}>
                    <div className="myprofileBottomConten h-fit w-full mt-2">
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} onClick={isMobile ? toggleSidebar : undefined} to="/profile/myprofile">
                        <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
                            <div className="BottomIcon pl-1 md:pl-6">
                                <img className='w-11/12 h-4/5' src={plb1} alt="" />
                            </div>
                                <div className="bottomType pl-1">
                                    <p className='text-xs md:text-lg'>My Profile</p>
                                </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>(isActive || orderTabActive)?activeLink:normalLink} onClick={isMobile ? toggleSidebar : undefined} to="/profile/order">
                            <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
                                <div className="BottomIcon pl-1 md:pl-6">
                                    <img className='w-11/12 h-4/5' src={plb2} alt="" />
                                </div>
                                <div className="bottomType pl-2">
                                    <p className='text-xs md:text-lg'>Order</p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} onClick={isMobile ? toggleSidebar : undefined} to="/profile/refer">
                        <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
                            <div className="BottomIcon pl-1 md:pl-6">
                                <img className='w-11/12 h-4/5' src={plb4} alt="" />
                            </div>
                            <div className="bottomType pl-2">
                                <p className='text-xs md:text-lg'>Refer & Earn</p>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} onClick={isMobile ? toggleSidebar : undefined} to="/profile/help">
                        <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
                            <div className="BottomIcon pl-1 md:pl-6">
                                <img className='w-11/12 h-4/5' src={plb6} alt="" />
                            </div>
                            <div className="bottomType pl-2">
                                <p className='text-xs md:text-lg'>Help and FAQs</p>
                            </div>
                        </div>
                        </NavLink>
                        <NavLink className={({isActive})=>isActive?activeLink:normalLink} onClick={isMobile ? toggleSidebar : undefined} to="/profile/pricing">
                        <div className="Bottom w-full h-6 md:h-10 hover:bg-green-100 flex items-center justify-left mt-2">
                            <div className="BottomIcon pl-1 md:pl-6">
                                <img className='w-11/12 h-4/5' src={plb8} alt="" />
                            </div>
                            <div className="bottomType pl-2">
                                <p className='text-xs md:text-lg'>Pricing</p>
                            </div>
                        </div>
                        </NavLink>
                        <div className=" w-full h-6 md:h-10 flex items-center justify-left pl-4 md:pl-8 mt-16 pb-4">
                            <button onClick={handleSignOut} className='bg bg-blue-950 flex h-6 md:h-8 rounded-2xl w-24 justify-center items-center'>
                                <img className='pr-1' src={logout} alt="" />
                                <h1 className='text-white text-xs md:text-sm'>Logout</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`duration-200 ${(!open || !isMobile) ? 'display-initial' : 'hidden'} w-full`}>
            <Outlet/>
            </div>
        </div>
    )
}

export default Myprofile





import order1 from '../../../assets/profile/order1.png'
import orderBtn from '../../../assets/profile/orderBtn.png'
import { useNavigate } from 'react-router-dom'
const Orders=()=>{
    const navigate = useNavigate();
    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex items-center">
            <div className="myProfile w-11/12 flex h-full flex-col items-baseline justify-center mt-12 ml-2 md:ml-8 ">
                <div className="myprofileContainer w-full bg-white h-4/5 rounded-xl">
                    <div className="myprofileInnerConatainer h-full px-2 md:px-8 py-4 flex flex-col items-baseline justify-evely">
                        <div className="orderHeading">
                            <h1 className='text-black font-medium md:text-2xl px-2 py-4 mb-4'>My Orders</h1>
                        </div>
                        <div className="orderCards w-full">
                            <div className="orderCard my-2 md:w-9/12 flex items-center justify-between bg-dark-blue h-16 md:h-16 rounded-t-2xl ">
                                <div className="orderImg pl-2 md:pl-4">
                                    <img src={order1} alt="" className='h-8 w-8 md:h-10 md:w-10'/>
                                </div>
                                <div className="orderId">
                                    <h1 className='text-white font-normal text-sm md:text-base'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs'>Order in search</p>
                                </div>
                                <button onClick={()=>navigate("/profile/order_details")}>
                                <div className="orderDetailsBtn pr-2 md:pr-4">
                                    <img className='h-4' src={orderBtn} alt="" />
                                </div>
                                </button>
                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex items-center justify-between bg-dark-blue h-16 md:h-16 rounded-b-2xl ">
                                <div className="orderImg pl-2 md:pl-4">
                                    <img src={order1} alt="" className='h-8 w-8 md:h-10 md:w-10'/>
                                </div>
                                <div className="orderId">
                                    <h1 className='text-white font-normal text-sm md:text-base'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs'>Delivered</p>
                                </div>
                                <div className="orderDetailsBtn pr-2 md:pr-4">
                                    <img className='h-4' src={orderBtn} alt="" />
                                </div>
                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex items-center justify-between bg-dark-blue h-16 md:h-16 rounded-t-2xl ">
                                <div className="orderImg pl-2 md:pl-4">
                                    <img src={order1} alt="" className='h-8 w-8 md:h-10 md:w-10'/>
                                </div>
                                <div className="orderId">
                                    <h1 className='text-white font-normal text-sm md:text-base'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs'>Delivered</p>
                                </div>
                                <div className="orderDetailsBtn pr-2 md:pr-4">
                                    <img className='h-4' src={orderBtn} alt="" />
                                </div>
                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex items-center justify-between bg-dark-blue h-16 md:h-16 rounded-b-2xl ">
                                <div className="orderImg pl-2 md:pl-4">
                                    <img src={order1} alt="" className='h-8 w-8 md:h-10 md:w-10'/>
                                </div>
                                <div className="orderId">
                                    <h1 className='text-white font-normal text-sm md:text-base'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs'>Delivered</p>
                                </div>
                                <div className="orderDetailsBtn pr-2 md:pr-4">
                                    <img className='h-4' src={orderBtn} alt="" />
                                </div>
                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex items-center justify-between bg-dark-blue h-16 md:h-16 rounded-t-2xl ">
                                <div className="orderImg pl-1 md:pl-4">
                                    <img src={order1} alt="" className='h-8 w-8 md:h-10 md:w-10'/>
                                </div>
                                <div className="orderId">
                                    <h1 className='text-white font-normal text-sm md:text-base'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs'>Delivered</p>
                                </div>
                                <div className="orderDetailsBtn pr-2 md:pr-4">
                                    <img className='h-4' src={orderBtn} alt="" />
                                </div>
                            </div>
                            <div className="orderCard my-2 md:w-9/12 flex items-center justify-between bg-dark-blue h-16 md:h-16 rounded-b-2xl ">
                                <div className="orderImg pl-2 md:pl-4">
                                    <img src={order1} alt="" className='h-8 w-8 md:h-10 md:w-10'/>
                                </div>
                                <div className="orderId">
                                    <h1 className='text-white font-normal text-sm md:text-base'>FASTx1902394890</h1>
                                    <p className='text-white font-light text-xxs md:text-xs'>Delivered</p>
                                </div>
                                <div className="orderDetailsBtn pr-2 md:pr-4">
                                    <img className='h-4' src={orderBtn} alt="" />
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;

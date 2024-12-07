import { useNavigate } from "react-router-dom";
import addCouponImg from '../../assets/admin/addCouponImg.png'
import calander from '../../assets/admin/calendar1.png'
const AddCoupon =()=>{
    const navigate = useNavigate();
    return(
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-11/12 pt-12 flex flex-col mb-6 justify-center'>
                <div className="mb-4">
                    <h1 className="text-xl font-medium">Add New Coupon Code</h1>
                </div>
                <div className="flex w-full">
                    <div className="w w-8/12">
                        <div className="mb-6">
                            <h1 className="text-base font-medium">Code Title</h1>
                            <input className="w-11/12 focus:outline-none border border-gray-500 rounded text-sm py-2.5 pl-4" type="text" placeholder="Enter Here"/>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-base font-medium">Voucher Code</h1>
                            <input className="w-11/12 focus:outline-none border border-gray-500 rounded text-sm py-2.5 pl-4" type="text" placeholder="Enter here.."/>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-base font-medium">Discount Percent</h1>
                            <input className="w-11/12 focus:outline-none border border-gray-500 rounded text-sm py-2.5 pl-4" type="text" placeholder="Enter here.."/>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-base font-medium">Minimum Purchase Amount</h1>
                            <input className="w-11/12 focus:outline-none border border-gray-500 rounded text-sm py-2.5 pl-4" type="text" placeholder="Enter here.."/>
                        </div>
                        <div className="mb-6 flex w-11/12 justify-between">
                            <div className="w-6/12">
                                <h1 className="text-base font-medium">Start Date</h1>
                                <div className="flex items-center border border-gray-500 rounded">
                                    <input className="w-11/12 rounded focus:outline-none text-sm py-2.5 pl-4" type="text" placeholder="Select start date"/>
                                    <img src={calander} alt="" />
                                </div>
                            </div>
                            <div className="ml-2 w-6/12">
                                <h1 className="text-base font-medium">End Date</h1>
                                <div className="flex items-center border border-gray-500 rounded">
                                    <input className="w-11/12 rounded focus:outline-none text-sm py-2.5 pl-4" type="text" placeholder="Select end date"/>
                                    <img src={calander} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <h1 className="text-base font-medium">Description</h1>
                            <textarea className="w-11/12 focus:outline-none border border-gray-500 rounded text-sm py-2.5 pl-4" name="" placeholder="Enter here.." id="" cols="30" rows="5"></textarea>
                        </div>
                        <div className="flex">
                            <button className="t text-blue-800 border rounded flex items-center justify-center border-blue-800 h-8 w-24" onClick={()=>navigate(-1)}>Cancel</button>
                            <button className="text-white font-semibold rounded bg-blue-800 flex items-center justify-center h-8 w-24 ml-6 " onClick={()=>navigate(-1)}>Save</button>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <img src={addCouponImg} alt="" />
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default AddCoupon;

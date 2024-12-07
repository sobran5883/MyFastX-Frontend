import userImg from '../../assets/admin/useProfile1.png'
import exports from '../../assets/admin/ExportIcon.png'


const Customerdetails =()=>{
    return(
        <div className='w-full flex flex-col'>
                <div className='w-11/12 pt-12 flex items-center flex-col mb-6'>
                    <div className='w-11/12 flex items-center justify-between'>
                        <div className='w-1/4'>
                            <img className='h-72 full' src={userImg} alt="" />
                        </div>
                        <div className='w-4/6 flex flex-col pl-4'>
                            <div className='pb-6'>
                                <h1 className='text-3xl'>Edward Stark</h1>
                                <h1 className='text-base text-gray-800'>Id: <span>59031456</span></h1>
                            </div>
                            <div className='flex justify-between py-1.5'>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Mobile No.</h1>
                                    <h1 className='text-base text-gray-800'>+91 9893082345</h1>
                                </div>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Alternate Mobile No.</h1>
                                    <h1 className='text-base text-gray-800'>NA</h1>
                                </div>
                            </div>
                            <div className='flex justify-between py-1.5'>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Email</h1>
                                    <h1 className='text-base text-gray-800'>davidwarner31@gmail.com</h1>
                                </div>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Gender</h1>
                                    <h1 className='text-base text-gray-800'>Male</h1>
                                </div>
                            </div>
                            <div className='flex justify-between py-1.5'>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Joined on</h1>
                                    <h1 className='text-base text-gray-800'>01/12/2023</h1>
                                </div>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Last Active</h1>
                                    <h1 className='text-base text-gray-800'><span>10/11/2023</span> <span>3:38 Pm</span></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-11/12'>
                        <div className='py-3 mt-8 w-full flex justify-between'>
                            <div>
                                <h1 className='text-3xl font-medium'>Recent Orders</h1>
                            </div>
                            <div className='flex'>
                                <button className='mx-2 border h-8 w-24 border-blue-800 text-blue-950 font-semibold rounded-lg flex items-center'><img className='h-4 px-2' src={exports} alt="" /><h1>Export</h1></button>
                                <button className='mx-2 border h-8 w-24 border-blue-800 text-blue-950 font-semibold rounded-lg'>Show All</button>
                            </div>
                        </div>
                        <div>
                        <table className="table-auto w-full">
                          <thead>
                            <tr className='py-4'>
                              <td className='border-b-2 text-gray-500'>Sno.</td>
                              <td className='border-b-2 text-gray-500'>Order ID</td>
                              <td className='border-b-2 text-gray-500'>Order Date</td>
                              <td className='border-b-2 text-gray-500'>Vehicle Type</td>
                              <td className='border-b-2 text-gray-500'>Weight</td>
                              <td className='border-b-2 text-gray-500'>Payment Mode</td>
                              <td className='border-b-2 text-gray-500'>Price</td>
                              <td className='border-b-2 text-gray-500'>Status</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className='py-6'>
                              <td className='text-sm py-3 border-b-2 font-medium'>01</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>#897632</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>2379000010101</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>3 Wheeler</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>56kg</td>
                              <td className='text-sm py-3 border-b-2 font-medium text-green-700'>UPI</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>$20</td>
                              <td className='text-sm py-3 border-b-2 font-medium text-blue-700'>On going</td>
                            </tr>
                            <tr className='py-6'>
                              <td className='text-sm py-3 border-b-2 font-medium'>02</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>#897632</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>2379000010101</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>3 Wheeler</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>56kg</td>
                              <td className='text-sm py-3 border-b-2 font-medium text-yellow-700'>VISA</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>$20</td>
                              <td className='text-sm py-3 border-b-2 font-medium text-green-600'>Completed</td>
                            </tr>
                            <tr className='py-6'>
                              <td className='text-sm py-3 border-b-2 font-medium'>03</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>#897632</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>2379000010101</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>3 Wheeler</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>56kg</td>
                              <td className='text-sm py-3 border-b-2 font-medium text-green-700'>UPI</td>
                              <td className='text-sm py-3 border-b-2 font-medium'>$20</td>
                              <td className='text-sm py-3 border-b-2 font-medium text-red-600'>Cancelled</td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                    </div>
                </div>
         </div>
    )
}

export default Customerdetails
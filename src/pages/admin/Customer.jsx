import { Link } from 'react-router-dom'
import arrowDown1 from '../../assets/admin/arrowDown1.png'
import customer1 from '../../assets/admin/customer1.png'
import customer2 from '../../assets/admin/customer2.png'
import customer3 from '../../assets/admin/customer3.png'
import threeDots from '../../assets/admin/threeDots2.png'
const OrderList=()=>{
    return(
        <div className='w-full flex flex-col'>
                <div className='w-11/12 pt-12 flex flex-col mb-6'>
                    <div className="flex w-full justify-between my-4">
                        <div className="border-r w-1/5 pr-20 flex flex-col items-center">
                            <h1 className="font-medium text-5xl">23k</h1>
                            <h1 className="text-sm text-gray-600">Total Users</h1>
                        </div>
                        <div className="border-r w-1/5 pr-20 flex flex-col items-center">
                            <h1 className="font-medium text-5xl">200</h1>
                            <h1 className="text-sm text-gray-600">New Users</h1>
                        </div>
                        <div className="border-r w-1/5 pr-20 flex flex-col items-center">
                            <h1 className="font-medium text-5xl">50</h1>
                            <h1 className="text-sm text-gray-600">Active Users</h1>
                        </div>
                        <div className="pr-20 flex flex-col items-center">
                            <h1 className="font-medium text-5xl">3</h1>
                            <h1 className="text-sm text-gray-600">Guests</h1>
                        </div>
                    </div>
                    <div className='flex justify-between mt-8'>
                        <div className='flex'>
                            <div className='flex items-center'>
                                <h1 className='px-1'>All</h1>
                                <img className='px-1' src={arrowDown1} alt="" />
                            </div>
                            <div className='flex items-center pl-6'>
                                <h1 className='px-1'>Active</h1>
                                <img className='px-1' src={arrowDown1} alt="" />
                            </div>
                        </div>
                    </div>
                    <table className="table-auto w-full">
                          <thead>
                            <tr className='py-4'>
                              <td className='border-b-2 py-2'><input type="checkbox" /></td>
                              <td className='border-b-2 py-2'>User</td>
                              <td className='border-b-2 py-2'>Status</td>
                              <td className='border-b-2 py-2'>Phone number</td>
                              <td className='border-b-2 py-2'>Gender</td>
                              <td className='border-b-2 py-2'>Age</td>
                              <td className='border-b-2 py-2'>Activity</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className='py-4'>
                              <td className='text-sm py-2 text-gray-500'><input type="checkbox" /></td>
                              <Link to='/fastx/admin/customer_details'><td className='text-base py-2 font-medium flex items-center'><img className='h-8' src={customer1} alt="" /><h1 className='pl-4'>Harsha</h1></td></Link>
                              <td className='text-sm py-2 text-gray-500'>Active</td>
                              <td className='text-sm py-2 text-gray-500'>+79000010101</td>
                              <td className='text-sm py-2 text-gray-500'>Male</td>
                              <td className='text-sm py-2 text-gray-500'>24</td>
                              <td className='text-sm py-2 text-gray-500'>2 days ago</td>
                              <td className='text-sm py-2 text-gray-500'><img src={threeDots} alt="" /></td>
                            </tr>
                            <tr className='py-4'>
                              <td className='text-sm py-2 text-gray-500'><input type="checkbox" /></td>
                              <Link to='/fastx/admin/customer_details'><td className='text-base py-2 font-medium flex items-center'><img className='h-8' src={customer2} alt="" /><h1 className='pl-4'>Andrew Tate</h1></td></Link>
                              <td className='text-sm py-2 text-gray-500'>Active</td>
                              <td className='text-sm py-2 text-gray-500'>+79000010101</td>
                              <td className='text-sm py-2 text-gray-500'>Male</td>
                              <td className='text-sm py-2 text-gray-500'>24</td>
                              <td className='text-sm py-2 text-gray-500'>2 days ago</td>
                              <td className='text-sm py-2 text-gray-500'><img src={threeDots} alt="" /></td>
                            </tr>
                            <tr className='py-4'>
                              <td className='text-sm py-2 text-gray-500'><input type="checkbox" /></td>
                              <Link to='/fastx/admin/customer_details'><td className='text-base py-2 font-medium flex items-center'><img className='h-8' src={customer3} alt="" /><h1 className='pl-4'>Balayya</h1></td></Link>
                              <td className='text-sm py-2 text-gray-500'>Active</td>
                              <td className='text-sm py-2 text-gray-500'>+79000010101</td>
                              <td className='text-sm py-2 text-gray-500'>Male</td>
                              <td className='text-sm py-2 text-gray-500'>24</td>
                              <td className='text-sm py-2 text-gray-500'>2 days ago</td>
                              <td className='text-sm py-2 text-gray-500'><img src={threeDots} alt="" /></td>
                            </tr>
                          </tbody>
                        </table>
                </div>
         </div>
    )
}
export default OrderList;
import download from '../../assets/admin/download.png'
import invoiceLogo from '../../assets/admin/invoice  logo.png'
import sign from '../../assets/admin/sign.png'
const Invoice=()=>{
    return(
        <div className='w-full flex flex-col'>
            <div className='w-10/12 pt-12 flex flex-col mb-6'>
                <div className='flex w-full justify-between my-4'>
                    <h1 className='text-lg font-semibold text-gray-600'>Invoice</h1>
                    <button className='bg-green-400 flex items-center rounded-md p-2'>
                        <h1 className='text-white text-sm'>Download</h1>
                        <img className='h-4 pl-2' src={download} alt="" />
                    </button>
                </div>
                <div className='w-full flex flex-col justify-center items-center my-8'>
                    <div className='relative w-10/12 items-center flex'> 
                        <div className='absolute h-3 w-4/6 bg-green-400 rounded-br-full'></div>
                        <div className='h-3 w-full bg-gray-400'></div>
                    </div>
                    <div className='w-9/12 flex flex-col'>
                        <div className='w-full  flex justify-end mt-2'>
                            <h1>Invoice #20</h1>
                        </div>
                        <div>
                            <img src={invoiceLogo} alt="" />
                        </div>
                        <div className='w-full flex items-end justify-end'>
                            <div className='w- w-2/5'>
                                <div className='flex w-full justify-between'>
                                    <h1 className='text-sm text-gray-500'>Invoice Number:</h1>
                                    <h1 className='text-sm text-gray-600'>XXXXX</h1>
                                </div>
                                <div className='flex w-full justify-between'>
                                    <h1 className='text-sm text-gray-500'>Date Release:</h1>
                                    <h1 className='text-sm text-gray-600'>MM/DD/YYYY</h1>
                                </div>
                                <div className='flex w-full justify-between'>
                                    <h1 className='text-sm text-gray-500'>Due Date:</h1>
                                    <h1 className='text-sm text-gray-600'>MM/DD/YYYY</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex my-12'>
                            <div className='flex'>
                                <div>
                                    <h1 className='text-sm text-gray-500'>Billed from:</h1>
                                </div>
                                <div className='ml-3'>
                                    <h1 className='text-sm font-medium'>John Doe, Inc.</h1>
                                    <h1 className='text-sm'>826 Devil Road</h1>
                                    <h1 className='text-sm'>New York, NY 10018 USA</h1>
                                </div>
                            </div>
                            <div className='flex'>
                                <div>
                                    <h1 className='text-sm text-gray-500'>Billed to:</h1>
                                </div>
                                <div className='ml-3'>
                                    <h1 className='text-sm font-medium'>Sample, Inc.</h1>
                                    <h1 className='text-sm'>826 Godfrey Road</h1>
                                    <h1 className='text-sm'>New York, NY 10018 USA</h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-center mb-4'>
                            <table className="table-auto w-full justify-between ">
                                 <tbody className='border'>
                                   <tr className='bg-gray-300'>
                                     <td className='font-semibold text-sm h-8 pl-8'>Item</td>
                                     <td className='font-semibold text-sm h-8 pl-8'>Type</td>
                                     <td className='font-semibold text-sm h-8 pl-8'>Base Price</td>
                                     <td className='font-semibold text-sm h-8 pl-8'>Amount</td>
                                   </tr>
                                   <tr className=''>
                                     <td className='border-b text-sm h-8 pl-8'>Vehicle</td>
                                     <td className='border-b text-sm h-8 pl-8'>3-Wheeler</td>
                                     <td className='border-b text-sm h-8 pl-8'>RS. ₹230.00</td>
                                     <td className='border-b text-sm h-8 pl-8'>RS. ₹600.00</td>
                                   </tr>
                                   <tr>
                                     <td className='border-b text-sm h-8 pl-8'>Weight : 45kg</td>
                                     <td className='border-b text-sm h-8 pl-8'>45kg</td>
                                     <td className='border-b text-sm h-8 pl-8'>RS. ₹25.00</td>
                                     <td className='border-b text-sm h-8 pl-8'>RS. ₹200.00</td>
                                   </tr>
                                   <tr>
                                     <td className='border-b text-sm h-8 pl-8'>Total</td>
                                     <td className='border-b text-sm h-8 pl-8'></td>
                                     <td className='border-b text-sm h-8 pl-8'>RS. ₹255.00</td>
                                     <td className='border-b text-sm h-8 pl-8'>RS. ₹800.00</td>
                                   </tr>
                                 </tbody>
                            </table>
                            </div>
                            <div className='w-full flex justify-end my-4  '>
                                <div className='w-2/5'>
                                    <div className='flex justify-between'>
                                        <h1 className='text-gray-500 text-sm'>Subtotal:</h1>
                                        <h1 className='text-sm'>RS. ₹800.00</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='text-gray-500 text-sm'>Tax(%)</h1>
                                        <h1 className='text-sm'>RS. ₹20.00</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h1 className='text-gray-500 text-sm'>Total:</h1>
                                        <h1 className='text-sm'>RS. ₹820.00</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1>Notes:</h1>
                                    <ul className='list-disc pl-5 mb-8'>
                                        <li className='text-sm'>Additional revisions will be charged USD 10.00 per revision</li>
                                        <li className='text-sm'>Design work will begin after payment of DP / Full</li>
                                    </ul>
                                    <h1 className='text-sm'>Terms and Conditions:</h1>
                                    <h1 className='text-sm'>Bank XX: 09023429 (John Doe)</h1>
                                </div>
                            </div>
                            <div className='w-full flex justify-end mb-12'>
                                <div>
                                    <img src={sign} alt="" />
                                    <h1>Mr Rajesh</h1>
                                    <h1>Executive Director</h1>
                                </div>
                            </div>
                    </div>
                    <div className='relative w-10/12 items-center flex'> 
                        <div className='absolute h-3 w-4/6 bg-green-400 rounded-br-full'></div>
                        <div className='h-3 w-full bg-gray-400'></div>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default Invoice;
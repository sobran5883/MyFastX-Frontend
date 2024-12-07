import customerBigImg from '../../assets/admin/customerBigImg.png'
import vehicleImg1 from '../../assets/admin/vehicleImg1.png'
import vehicleImg2 from '../../assets/admin/vehicleImg2.png'
import vehicleImg3 from '../../assets/admin/vehicle3.png'
import vehicleImg4 from '../../assets/admin/vehicleImg4.png'
import { useLocation,useNavigate } from 'react-router-dom';

const Driverdetails =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const {driver} = location.state;
    const approveDriver = async (driverId) => {
        try {
          const response = await fetch('https://emonoid.com/api/v1/driver/approveDriver', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ driverId }),
          });
          const data = await response.json();
          console.log('Success:', data);
          // Add any success handling logic here
        } catch (error) {
          console.error('Error:', error);
          // Add any error handling logic here
        }
        navigate("/fastx/admin/driver_list/");
      };
    
      const handleApprove = () => {
        approveDriver(driver._id); // Assuming 'id' is a property of driver. Adjust accordingly.
      };

    return(
            <div className='w-full flex flex-col'>
                <div className='w-11/12 pt-12 flex items-center flex-col mb-6'>
                    <div className='w-11/12 flex items-center justify-between'>
                        <div className='w-1/4'>
                            <img className='h-72 w-full' src={driver.avatar} alt="Customer" />
                        </div>
                        <div className='w-4/6 flex flex-col pl-4'>
                            <div className='pb-6'>
                                <h1 className='text-3xl'>{driver.name}</h1>
                                <h1 className='text-base text-gray-800'>{driver.typeOfVehicle}</h1>
                            </div>
                            <div className='flex justify-between py-1.5'>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Mobile No.</h1>
                                    <h1 className='text-base text-gray-800'>{driver.phone}</h1>
                                </div>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>License No.</h1>
                                    <h1 className='text-base text-gray-800'>{driver.drivingLicNo}</h1>
                                </div>
                            </div>
                            <div className='flex justify-between py-1.5'>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Email</h1>
                                    <h1 className='text-base text-gray-800'>{driver.email}</h1>
                                </div>
                                
                            </div>
                            <div className='flex justify-between py-1.5'>
                                <div className='w-1/2'>
                                    <h1 className='font-semibold text-base'>Years of Experience</h1>
                                    <h1 className='text-base text-gray-800'>{driver.experience}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-11/12'>
                        <div className='py-3 mt-8'>
                            <h1 className='text-2xl font-medium'>Vehicle Details</h1>
                        </div>
                        <div className='flex py-3'>
                            <div className='w-2/6'>
                                <h1 className='font-semibold text-base'>Vehicle Type</h1>
                                <h1 className='text-base text-gray-800'>{driver.typeOfVehicle}</h1>
                            </div>
                            <div className='w-2/6'>
                                <h1 className='font-semibold text-base'>Vehicle No.</h1>
                                <h1 className='text-base text-gray-800'>{driver.vehicleRegnNo}</h1>
                            </div>
                        </div>
                        <div className='flex flex-col py-3'>
                            <div className='flex'>
                                <div className='w-4/12'>
                                    <h1 className='font-semibold text-base'>Address</h1>
                                    <h1 className='text-base text-gray-800'>{driver.addressLine1}</h1>
                                </div>
                                <div className='w-2/6'>
                                    <h1 className='font-semibold text-base'>State</h1>
                                    <h1 className='text-base text-gray-800'>{driver.state}</h1>
                                </div>
                                <div className='w-2/6'>
                                    <h1 className='font-semibold text-base'>Zip</h1>
                                    <h1 className='text-base text-gray-800'>{driver.zipCode}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <button 
                    onClick={handleApprove} 
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Approve
                </button> */}
            </div>
        );
    };
    
    export default Driverdetails;
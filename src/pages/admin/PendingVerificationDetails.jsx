import { useLocation, useNavigate } from 'react-router-dom';

const Customerdetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { driver } = location.state;

    const approveDriver = async (driverId) => {
        try {
            const response = await fetch('https://emonoid.com/api/v1/driver/approveDriver', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ driverId }),
            });
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        navigate("/fastx/admin/pending_verfication/");
    };

    const handleApprove = () => {
        approveDriver(driver._id);
    };

    return (
        <div className='w-full flex flex-col'>
            <div className='w-11/12 pt-12 flex items-center flex-col mb-6'>
                <div className='w-11/12 flex items-center justify-between'>
                    <div className='w-1/4'>
                        <img className='h-72 w-full' src={driver.avatar} alt="" />
                    </div>
                    <div className='w-4/6 flex flex-col pl-4'>
                        <div className='pb-6'>
                            <h1 className='text-3xl'>{driver.name}</h1>
                            <h1 className='text-sm font-medium text-red-600'>{driver.approved?'Verified':'Unverified'}</h1>
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
                            <div className='w-1/2'>
                                <h1 className='font-semibold text-base'>DOB</h1>
                                <h1 className='text-base text-gray-800'>{driver.dateOfBirth}</h1>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <button className='border-2 h-10 w-36 text-xs font-semibold text-red-600 border-red-600 rounded-lg '>Reject Verification</button>
                            <button onClick={handleApprove} className='border h-10 w-36 ml-4 text-xs font-semibold bg-deep-green rounded-lg text-white'>Approve Verification</button>
                        </div>
                    </div>
                </div>
                <div className='w-11/12'>
                    <div className='py-3 mt-8'>
                        <h1 className='text-2xl font-medium'>Vehicle Details</h1>
                    </div>
                    <div className='flex py-3'>
                        <div className='w-2/6'>
                            <h1 className='font-semibold text-base'>vehicle</h1>
                            <h1 className='text-base text-gray-800'>{driver.typeOfVehicle}</h1>
                        </div>
                        <div className='w-2/6'>
                            <h1 className='font-semibold text-base'>vehicle No.</h1>
                            <h1 className='text-base text-gray-800'>{driver.vehicleRegnNo}</h1>
                        </div>
                    </div>
                </div>

                <div className='w-11/12'>
                    <div className='py-3 mt-8'>
                        <h1 className='text-2xl font-medium'>Address Details</h1>
                    </div>
                    <div className='flex py-3'>
                        <div className='w-2/6'>
                            <h1 className='font-semibold text-base'>Address</h1>
                            <h1 className='text-base text-gray-800'>{driver.addressLine1}</h1>
                        </div>
                        <div className='w-2/6'>
                            <h1 className='font-semibold text-base'>state</h1>
                            <h1 className='text-base text-gray-800'>{driver.state}</h1>
                        </div>
                        <div className='w-2/6'>
                            <h1 className='font-semibold text-base'>Zip</h1>
                            <h1 className='text-base text-gray-800'>{driver.zipCode}</h1>
                        </div>
                    </div>
                </div>

                <div className='w-11/12 my-6'>
                    <div>
                        <h1 className='text-xl font-medium py-4'>Government IDs</h1>
                    </div>
                    <div className='w-10/12 flex justify-between'>
                        <div className='w-40 h-32 p-4 flex items-center justify-center bg-gray-300'>
                            <img src={'https://pub-67026bebe3ba4b1385a2e05550bea538.r2.dev/aadhar/'+driver.aadharFront} alt="Aadhaar Front" />
                        </div>
                        <div className='w-40 h-32 p-4 flex items-center justify-center bg-gray-300'>
                            <img src={'https://pub-67026bebe3ba4b1385a2e05550bea538.r2.dev/aadhar/'+driver.aadharBack} alt="Aadhaar Back" />
                        </div>
                        <div className='w-40 h-32 p-4 flex items-center justify-center bg-gray-300'>
                            <img src={'https://pub-67026bebe3ba4b1385a2e05550bea538.r2.dev/drivinglicense/'+driver.licenseFront} alt="DL Front" />
                        </div>
                        <div className='w-40 h-32 p-4 flex items-center justify-center bg-gray-300'>
                            <img src={'https://pub-67026bebe3ba4b1385a2e05550bea538.r2.dev/drivinglicense/'+driver.licenseBack} alt="DL Back" />
                        </div>
                    </div>
                    <div className='flex w-10/12 justify-between mt-4'>
                        <div className='w-6/12 flex items-center justify-center'>
                            <h1 className='text-lg font-medium'>Aadhaar</h1>
                        </div>
                        <div className='w-6/12 flex items-center justify-center'>
                            <h1 className='text-lg font-medium'>Driving License</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customerdetails;

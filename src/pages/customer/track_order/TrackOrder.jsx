import {useState} from 'react';
import forwardArrow from '../../../assets/footer/ForwardArrow.png';
import schedule from '../../../assets/track_order/schedule.gif'
import redirect from '../../../assets/track_order/redirect.gif'
import location from '../../../assets/track_order/location.gif'
import surcharge from '../../../assets/track_order/surcharge.gif'

const TrackOrder =()=>{

    const [awbNo, setAwbNo] = useState('');
    const [isValidInput, setIsValidInput] = useState(true);

    const handleInputChange = (e) => {
        setAwbNo(e.target.value);
    }

    const handleTrackOrder = () =>{
        if(awbNo === '54321'){
            console.log('Tracking order for AWB No. 12345');
            setIsValidInput(true);
        }else{
            setIsValidInput(false);
        }
    }

    return(
        <div className='w-full'>
            <div className='h-[35rem] bg-deep-green flex flex-col items-center justify-center'>
                <div className='mx-4 flex items-center text-center'>
                    <h1 className='text-3xl md:text-6xl font-medium'>Track Your Order</h1>
                </div>
                <div className='flex mb-4 mt-12 mx-6 bg-deep-green h-12 border-2 border-black rounded-2xl items-center justify-center'>
                    <input className='h-10 rounded-2xl placeholder-slate-700 pl-2 md:px-4 outline-none bg-deep-green'
                    type="text"
                    placeholder="Enter AWB No."
                    value={awbNo}
                    onChange={handleInputChange}
                    />
                    <div className='flex cursor-pointer' onClick={handleTrackOrder}>
                    <h1 className='hidden md:block'>Track Order</h1>
                    <img className='h-6 pr-2 md:pr-1' src={forwardArrow} alt="" />
                    </div>
                </div>
                {!isValidInput && (
                        <p className='text-red-700'>Please enter a valid AWB No.</p>
                )}
            </div>
            <div>
                <div className='w-full flex flex-col items-center justify-center my-20'>
                    <h1 className='w-11/12  text-center text-3xl md:text-6xl text-deep-green mb-4'>Manage your shipments</h1>
                    <div className='my-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-10'>
                        <div className='p-2 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                            <div className='w-full h-40 flex items-center justify-center'>
                                <img src={schedule} alt="" />
                            </div>
                            <h1 className='text-lg text-black font-semibold py-2'>SCHEDULE PICKUP</h1>
                        </div>
                        <div className='p-2 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                            <div className='w-full h-40 flex items-center justify-center'>
                                <img src={redirect} alt="" />
                            </div>
                            <h1 className='text-lg text-black font-semibold py-2'>REDIRECT YOUR PACKAGE</h1>
                        </div>
                        <div className='p-2 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                            <div className='w-full h-40 flex items-center justify-center'>
                                <img src={location} alt="" />
                            </div>
                            <h1 className='text-lg text-black font-semibold py-2'>FIND LOCATION</h1>
                        </div>
                        <div className='p-2 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                            <div className='w-full h-40 flex items-center justify-center'>
                                <img src={surcharge} alt="" />
                            </div>
                            <h1 className='text-lg text-black font-semibold py-2'>FUEL SURCHARGE</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrackOrder;
import './WhatWeDo.css'
import { Fade, Slide } from "react-awesome-reveal";
import img1 from '../../../assets/home/homeImg1.jpg'
import img2 from '../../../assets/home/homeImg2.jpg'
import img3 from '../../../assets/home/homeImg3.jpg'
import img4 from '../../../assets/home/homeImg4.jpg'
function WhatWeDo() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className="relative w-full flex items-center justify-center">
            <div className='w-full h-[150px] md:h-[300px] bg-black'>
            </div>
            <div className='absolute'>
                <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>What We Do?</h1>
            </div>
        </div>
        <div className='w-11/12 md:w-10/12 flex items-center my-4 md:my-8'>
            <div className='w-full md:w-fit'>
                <div>
                    <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                        <h1 className='font-rubik text-sm font-normal px-2'>Our Services</h1>
                    </div>
                    <div className='relative my-2 w-fit'>
                       <div>
                            <h1 className='font-rubik text-xl md:text-2xl font-semibold'>What we do?</h1>
                       </div>
                       <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col mb-8 lg:mb-2 lg:flex-row w-11/12 md:w-10/12 items-center justify-between'>
            <div className='lg:w-1/2 flex flex-col items-center text-center  md:text-start'>
                <Slide direction='up' className='lg:w-full'>
                   <h1 className='font-semibold text-gray-700 font-inter text-2xl lg:text-[30px]'>Door-To-Door Delivery</h1>
                </Slide>
                <div className='w-7/12 md:w-5/12 block lg:hidden'>
                    <img className='whatwedo' src={img1} alt="" />
                </div>
                <Fade>
                    <p className='font-medium text-sm lg:text-base text-slate-600'>Experience the convenience of our door-to-door delivery service. MyFastX provides efficient and reliable delivery across Delhi-NCR, handling every package with care. Trust us to deliver convenience right to your doorstep, ensuring timely and secure deliveries.</p>
                </Fade>
            </div>
            <div className='w-2/5 hidden lg:block'>
                <img className='whatwedo' src={img1} alt="" />
            </div>
        </div>
        <div className='flex flex-col mb-8 lg:mb-2 lg:flex-row-reverse w-11/12 md:w-10/12 items-center justify-between'>
            <div className='lg:w-1/2 flex flex-col items-center text-center md:text-left'>
                <Slide direction='up' className='lg:w-full'>
                    <h1 className='w-full font-semibold text-gray-700 font-inter text-2xl lg:text-[30px]'>Home Relocation</h1>
                </Slide>
                <div className='w-7/12 md:w-5/12 block lg:hidden'>
                    <img className='whatwedo' src={img2} alt="" />
                </div>
                <Fade>
                    <p className='font-medium text-sm lg:text-base text-slate-600'>Relocating doesn't have to be stressful with MyFastX. Our home relocation services make your move smooth and hassle-free. From packing to transporting, we handle everything with care. Whether you're moving within Delhi-NCR or nearby, MyFastX is your reliable partner for secure home relocation.</p>
                </Fade>
                
            </div>
            <div className='w-2/5 hidden lg:block'>
                <img className='whatwedo' src={img2} alt="" />
            </div>
        </div>
        <div className='flex flex-col mb-8 lg:mb-2 lg:flex-row w-11/12 md:w-10/12 items-center justify-between'>
            <div className='lg:w-1/2 flex flex-col items-center text-center md:text-left'>
                <Slide direction='up' className='lg:w-full'>
                    <h1 className='w-full font-semibold text-gray-700 font-inter text-2xl lg:text-[30px]'>Full Truck Load</h1>
                </Slide>
                <div className='w-7/12 md:w-5/12 block lg:hidden'>
                    <img className='whatwedo' src={img3} alt="" />
                </div>
                <Fade>
                    <p className='font-medium text-sm lg:text-base text-slate-600'>For large or bulky items, MyFastX's full truck load services are the perfect solution. We offer reliable transportation for all your heavy load needs, ensuring safe and timely deliveries. Trust MyFastX for your full truck load requirements and experience peace of mind with every shipment.</p>
                </Fade>
            </div>
            <div className='w-2/5 hidden lg:block'>
                <img className='whatwedo' src={img3} alt="" />
            </div>
        </div>
        <div className='flex flex-col mb-8 lg:mb-2 lg:flex-row-reverse w-11/12 md:w-10/12 items-center justify-between'>
            <div className='lg:w-1/2 flex flex-col items-center text-center md:text-left'>
                <Slide direction='up' className='lg:w-full'>
                    <h1 className='w-full font-semibold text-gray-700 font-inter text-2xl lg:text-[30px]'>Last Mile Delivery</h1>
                </Slide>
                <div className='w-7/12 md:w-5/12 block lg:hidden'>
                    <img className='whatwedo' src={img4} alt="" />
                </div>
                <Fade>
                    <p className='font-medium text-sm lg:text-base text-slate-600'>MyFastX excels in last mile delivery, ensuring your parcels reach their final destination promptly and accurately. We understand the importance of the final leg of the journey and are committed to making it as smooth as possible. Depend on MyFastX for precise and timely last mile delivery.</p>
                </Fade>
            </div>
            <div className='w-2/5 hidden lg:block'>
                <img className='whatwedo' src={img4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo
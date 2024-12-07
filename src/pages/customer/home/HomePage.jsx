import {useNavigate } from 'react-router-dom'
import homeImg1 from '../../../assets/home/homeImg1.jpg'
import homeImg2 from '../../../assets/home/homeImg2.jpg'
import homeImg3 from '../../../assets/home/homeImg3.jpg'
import homeImg4 from '../../../assets/home/homeImg4.jpg'
import home0 from '../../../assets/home/home0.png'
import home1 from '../../../assets/home/home1.png'
import home2 from '../../../assets/home/home2.png'
import home3 from '../../../assets/home/home3.png'
import home4 from '../../../assets/home/home4.png'
import arrowRight from '../../../assets/home/arrowRight.png'
import box from '../../../assets/home/box.png'
import plus from '../../../assets/home/plus1.png'
import ping1 from '../../../assets/home/pin1.png'
import ping2 from '../../../assets/home/pin2.png'
import swap from '../../../assets/home/swap.png'
import logo from '../../../assets/home/logo.png'
import Modal from '../../../components/awareness_popup/Popup'
import { useState } from 'react'
import { Slide } from 'react-awesome-reveal'

export default function Home(){
    const Navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="w-full h-auto flex flex-col items-center justify-center">

            {showModal && <Modal onClose={()=>setShowModal(false)}/>}

            {/* pick-up and drop-off location */}
            <div className="flex pb-4 w-full flex-col md:flex-row items-center justify-evenly bg-pale-mint">
                <div className="w-3/5 md:w-2/5 py-8">
                    <img src={home0} alt="" />
                </div>
                <div className="p-4 m-4 md:m-8 w-11/12 md:w-6/12 bg-white shadow-md rounded-xl flex flex-col items-center">
                    <h1 className='w-[86%] text-deep-green font-semibold'>Pick-up location</h1>
                    <div className="w-full flex">
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center'>
                                <img className='h-4 pr-4' src={ping1} alt="" />
                                <input className="w-full py-4 text-xs md:text-sm focus:outline-none" type="text" placeholder='Pick-up location'/>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full flex items-center justify-end'>
                        <div className='border-b-2 w-11/12 mr-2 md:my-10'>
                        </div>   
                        <div> 
                            <button>
                            <img className='h-10 w-10' src={swap} alt="" />
                            </button>
                        </div>    
                    </div>
                    <h1 className='w-[86%] text-deep-green font-semibold'>Drop-off location</h1>
                    <div className="w-full items-center flex">
                        <img className='h-7 pr-4' src={ping2} alt="" />
                        <input className='w-full py-4 text-xs md:text-sm focus:outline-none' type="text" placeholder='Drop-off loction' />
                    </div>
                    <div className="w-full">
                        <hr />
                    </div>
                    <div className="px-4 py-4 mt-4">
                        <button className='text-xs md:text-s flex items-center focus:outline-none'>
                            <img className='h-6 mx-3' src={plus} alt="" />
                            <h1 className='text-sm font-medium'>Add Stop</h1>
                        </button>
                    </div>
                </div>
            </div>

            {/* What we do? */}
            <div className='w-full flex flex-col items-center mt-4'>
                <div className='w-11/12 flex items-center mb-8 md:my-10'>
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
                <div className='flex overflow-auto '>
                    <img src={homeImg1} alt="" className='md:h-[20rem] h-[10rem] rounded-md mx-1 md:mx-2'/>
                    <img src={homeImg2} alt="" className='md:h-[20rem] h-[10rem] rounded-md mx-1 md:mx-2'/>
                    <img src={homeImg3} alt="" className='md:h-[20rem] h-[10rem] rounded-md mx-1 md:mx-2'/>
                    <img src={homeImg4} alt="" className='md:h-[20rem] h-[10rem] rounded-md mx-1 md:mx-2'/>
                </div>
            </div>

            {/* calculate shipping rates */}
            <div className='w-full bg-pale-mint flex items-center justify-center'>
                <div className='bg-white rounded-xl w-11/12 px-4 py-4 mt-2 md:py-12 flex flex-col items-center justify-center'>
                    <h1 className='text-xl text-center md:text-5xl font-semibold text-gray-800'>Calculate <span className='text-deep-green'>MyFastX shipping rates</span> on the go</h1>
                    <p className='text-gray-800 text-base my-2 md:py-6 text-center'>Get shipping costs with free MyFastX courier rate calculator</p>
                    <button onClick={()=>Navigate('/shipping_rate')} className='w-11/12 md:w-6/12 bg-deep-green rounded-3xl text-white py-2 text-base md:text-lg'>Calulate now</button>
                </div>
            </div>

            {/* available vehicles */}
            <div className='w-full flex flex-col items-center justify-evenly pt-8 pb-2 bg-pale-mint'>
                <div>
                    <p  className='text-2xl md:text-4xl my-2 font-medium'>Available</p>
                </div>
                <div className='flex flex-col lg:flex-row w-11/12 items-center justify-center'>
                    <div className='w-full flex flex-col md:flex-row items-center md:justify-around'>
                        <div className='max-w-[360px] lg:w-5/12 flex flex-col items-center justify-evenly py-6 my-2 rounded-lg bg-white'>
                            <div className="HomeCardHeading">
                                <p>MotorCycle</p>
                            </div>
                            <div className='flex justify-center'>
                                <Slide><img className='w-7/10 p-4' src={home1} alt="" /></Slide>
                            </div>
                            <div className='flex text-center w-11/12'>
                                <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering documents & daily essentials</p>
                            </div>
                            <div className='flex items-start w-11/12 justify-center mt-4'>
                                <img className='px-1' src={box} alt="" />
                                <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                            </div>
                        </div>
                        <div className='max-w-[360px] lg:w-5/12 flex flex-col items-center justify-evenly py-6 my-2 rounded-lg bg-white'>
                            <div className="HomeCardHeading">
                                <p>3 Wheeler</p>
                            </div>
                            <div className='flex justify-center'>
                                <Slide><img className='w-7/10 p-4' src={home2} alt="" /></Slide>
                            </div>
                            <div className='flex text-center w-11/12'>
                                <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering bulk fruit & vegetable essentials</p>
                            </div>
                            <div className='flex items-start w-11/12 justify-center mt-4'>
                                <img className='px-1' src={box} alt="" />
                                <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row items-center md:justify-around'>
                        <div className='max-w-[360px] lg:w-5/12 flex flex-col items-center justify-evenly py-6 my-2 rounded-lg bg-white'>
                            <div className="HomeCardHeading">
                                <p>7ft</p>
                            </div>
                            <div className='flex justify-center'>
                                <Slide><img className='w-7/10 p-4' src={home3} alt="" /></Slide>
                            </div>
                            <div className='flex text-center w-11/12'>
                                <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering furniture & commercial goods</p>
                            </div>
                            <div className='flex items-start w-11/12 justify-center mt-4'>
                                <img className='px-1' src={box} alt="" />
                                <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                            </div>
                        </div>
                        <div className='max-w-[360px] lg:w-5/12 flex flex-col items-center justify-evenly py-6 my-2 rounded-lg bg-white'>
                            <div className="HomeCardHeading">
                                <p>8ft</p>
                            </div>
                            <div className='flex justify-center'>
                                <Slide><img className='w-7/10 p-4' src={home4} alt="" /></Slide>
                            </div>
                            <div className='flex text-center w-11/12'>
                                <p className='text-base items-center flex justify-center font-medium text-black text-opacity-50 font-inter'>Best for delivering office furniture & heavy machinery</p>
                            </div>
                            <div className='flex items-start mt-4'>
                                <img className='px-1' src={box} alt="" />
                                <p className='text-xs lg:text-xs md:text-xxs text-gray-400 font-medium'>0.4 x 0.4 x 0.4 Meter . Up to 20 kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full pb-10 bg-pale-mint'>
                <div className='flex items-center justify-center'>
                    <button onClick={()=>Navigate('/pricing-details')} className='bg-deep-green w-11/12 md:w-4/12 rounded-md text-white px-6 py-1 md:py-3 text-base md:text-lg font-medium flex items-center justify-center gap-2'>View Pricing <Slide><img className='h-6' src={logo} alt="" /></Slide></button>
                </div>
            </div>
            
            {/* proceed button */}
            <div className='w-11/12 justify-center md:justify-end flex mb-12 mt-4'> 
                    <button onClick={()=>setShowModal(true)} className='bg-deep-green flex items-center justify-center rounded-md h-8 md:h-10 w-28'>
                        <h1 className='text-white text-sm md:text-base'>Proceed</h1>
                        <img className='h-3 pl-2 md:px-1' src={arrowRight} alt="" />
                    </button>
            </div>
        </div>
    )
}

import introImg from '../../../assets/landing_page1/Frame.png'
import verifyImg from '../../../assets/landing_page1/image 730.png'
import one from '../../../assets/landing_page1/8.png'
import two from '../../../assets/landing_page1/6.png'
import three from '../../../assets/landing_page1/4.png'
import price from '../../../assets/landing_page1/image 729.png'
import delivery from '../../../assets/landing_page1/image 727.png'
import working1 from '../../../assets/landing_page1/Select Pick up.png'
import working2 from '../../../assets/landing_page1/select Drop off.png'
import working3 from '../../../assets/landing_page1/Checking boxes-cuate.png'
import working4 from '../../../assets/landing_page1/Choose vehicle.png'
import working5 from '../../../assets/landing_page1/Parcel Delivery.png'
import boy from '../../../assets/landing_page1/freepik--Character--inject-8.png'
import girl from '../../../assets/landing_page1/freepik--Character--inject-9.png'
import user from '../../../assets/landing_page1/Ellipse 447.png'
import left from '../../../assets/landing_page1/image 733.png'
import right from '../../../assets/landing_page1/image 734.png'

import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import Testimonial from './components/Testimonial'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LandingPage=()=>{
    const {currentUser} = useSelector(state=> state.user);
    const navigate = useNavigate();
    const slider = React.useRef(null);
    const settings= {
        dots: true,
        infinite: true,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        hover:false,
      };


    return(
        <div className='w-full flex flex-col items-center justify-center'>
            <ScrollToTop
            smooth 
            top="1000"
            color="#007200"
            width="37px"
            />

            {/* Landing Intro page */}
            <div className='landingPageIntro relative w-full flex items-center justify-center my-10 md:my-16'>
                <div className='flex w-10/12 flex-col-reverse md:flex-row items-center justify-between md:justify-between'>
                    <div className='md:w-5/12'>
                        <h1 className='text-xl md:text-4xl lg:text-5xl font-medium font-inter mt-4'>
                            <span>Welcome</span><br />
                            <span className='text-[#545DBF]'> Quick & Reliable</span>
                            <span> Delivery and</span>
                            <span className='text-[#545DBF]'> Logistics</span>
                            <span> Solution</span>
                        </h1>
                        <p className='font-lato mt-4 mb-4 lg:mt-6 lg:mb-7 text-[#4F4F4F] text-sm lg:text-base font-medium'>Welcome to Fast X, your trusted partner in swift and dependable delivery and logistics solutions. </p>
                        <button onClick={currentUser ? () => navigate('/home') : () => navigate('/login')} className='bg-[#545DBF] font-inter h-8 w-36 md:h-10 md:w-40 rounded-lg text-sm md:text-lg text-white'>Get Started</button>
                    </div>
                    <div className='flex justify-end md:w-6/12 mb-4 md:mb-0'>
                        <img src={introImg} alt="" />
                    </div>
                </div>
            </div>
            {/* Why Choose Us? */}
            <div className='w-full flex flex-col items-center justify-center mt-16'>
                <div className='w-10/12'>
                    <h1 className='font-inter font-semibold text-xl pb-1'>Wondering Why choose us</h1>
                    <p>Here are some points of why we are the best in Business</p>
                </div>
                <div className='w-10/12 grid grid-col-1 md:grid-cols-3 gap-2 items-center justify-between'>
                    <div className='bg-[#e3eaf8] rounded-lg my-6'>
                        <div className='flex w-full justify-between'>
                            <div className='bg-white h-20 w-20 mt-10 ml-6 rounded-lg flex items-center justify-center'>
                                <img className='h-9' src={verifyImg} alt="" />
                            </div>
                            <div className='mr-4 mt-1'>
                                <img src={one} alt="" />
                            </div>
                        </div>
                        <div className=' px-6 py-4'>
                            <h1 className='text-lg font-medium '>Affordable price</h1>
                            <p className='text-sm py-2'>Our Steadfast commitment ensures your parcels are handled with care and precision, guaranteeing secure and timely deliveries</p>
                        </div>
                    </div>
                    <div className='bg-[#e3eaf8] rounded-lg my-6'>
                        <div className='flex w-full justify-between'>
                            <div className='bg-white h-20 w-20 mt-10 ml-6 rounded-lg flex items-center justify-center'>
                                <img className='h-9' src={price} alt="" />
                            </div>
                            <div className='mr-4 mt-1'>
                                <img src={two} alt="" />
                            </div>
                        </div>
                        <div className=' px-6 py-4'>
                            <h1 className='text-lg font-medium '>Verified and Reliable</h1>
                            <p className='text-sm py-2'>Opt for our services for unbeatable affordability. We pride ourselves on offering cost effective solutions without compromising on quality</p>
                        </div>
                    </div>
                    <div className='bg-[#e3eaf8] rounded-lg my-6'>
                        <div className='flex w-full justify-between'>
                            <div className='bg-white h-20 w-20 mt-10 ml-6 rounded-lg flex items-center justify-center'>
                                <img className='h-9' src={delivery} alt="" />
                            </div>
                            <div className='mr-4 mt-1'>
                                <img src={three} alt="" />
                            </div>
                        </div>
                        <div className=' px-6 py-4'>
                            <h1 className='text-lg font-medium '>Swift Deliveries</h1>
                            <p className='text-sm py-2'>Fastest delivery that exceeds expectations. Our Commitment to Prompt services ensures your parcels reach their destination swiftly and securely</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-10/12 py-16'>
                <div className='w-full'>
                    <h1 className='font-inter font-semibold text-xl pb-1'>How does this work?</h1>
                    <p>Here are some points of why we are the best in Business</p>
                </div>
                <div className='flex items-center  my-4'>
                    <div>
                        <img src={working1} alt="" />
                    </div>
                    <div className='w-6/12 pl-20'>
                        <h1 className='font-bold text-xl font-inter pb-2'>Select Pick up</h1>
                        <p className='text-[#1D1B1B]'>Whether its your home, office, or another convenient spot, take control and customize the pick-up point that best suits your needs</p>
                    </div>
                </div>
                <div className='flex items-center justify-end my-4'>
                    <div className='w-6/12 pr-20'>
                        <h1 className='text-right font-bold text-xl font-inter pb-2'>Select Drop point</h1>
                        <p className='text-right text-[#1D1B1B]'>Specify the exact destination for your parcels, be it your residence, workplace, or any preferred spot</p>
                    </div>
                    <div>
                        <img src={working2} alt="" />
                    </div>
                </div>
                <div className='flex items-center  my-4'>
                    <div>
                        <img src={working3} alt="" />
                    </div>
                    <div className='w-6/12 pl-20'>
                        <h1 className='font-bold text-xl font-inter pb-2'>Packed with Care</h1>
                        <p className='text-[#1D1B1B]'>Each of your Products are packed with care and love. We use high-quality, durable packaging materials to safeguard your items during transit. From sturdy boxes to protective cushioning, our materials are selected to withstand the rigors of the shipping process.</p>
                    </div>
                </div>
                <div className='flex items-center justify-end my-4'>
                    <div className='w-6/12 pr-20'>
                        <h1 className='text-right font-bold text-xl font-inter pb-2'>Choose your Vehicle</h1>
                        <p className='text-right text-[#1D1B1B]'>Customize your delivery experience by selecting the ideal vehicle for your shipment. Whether its a bike for quick urban deliveries, a truck for larger shipments</p>
                    </div>
                    <div>
                        <img src={working4} alt="" />
                    </div>
                </div>
                <div className='flex items-center  my-4'>
                    <div>
                        <img src={working5} alt="" />
                    </div>
                    <div className='w-6/12 pl-20'>
                        <h1 className='font-bold text-xl font-inter pb-2'>Parcle Delivery</h1>
                        <p className='text-[#1D1B1B]'>Experience seamless and efficient parcel delivery services designed to cater to your specific needs.</p>
                    </div>
                </div>
            </div>
            <div className='w-full my-28'>
                <div className='bg-[#545DBF] relative w-full py-8 md:py-16 flex flex-col items-center justify-center'>
                    <h1 className='text-white text-3xl pb-2 font-bold'>Ta-Da</h1>
                    <p className='text-white'>The Package will be yours!</p>
                    <img className='absolute h-48 md:h-auto left-0 md:left-28 lg:left-40' src={boy} alt="" />
                    <img className='absolute h-48 md:h-auto right-0 md:right-28 lg:right-40' src={girl} alt="" />
                </div>
            </div>
            <div className='w-10/12 my-12'>
                <div className='w-full flex items-center justify-between my-6'>
                    <div >
                        <h1 className='font-inter font-semibold text-xl pb-1'>Customer testimonials</h1>
                        <p>You dont have to take our word for it</p>
                    </div>
                    <div className=''>
                        <div className='w-full my-4 flex items-center justify-center'>
                            <div className=''>
                                <button onClick={() => slider?.current?.slickPrev()}><img className='prev h-10 px-2 py-2 bg-[#ebf4fa] rounded-sm mx-12' src={left}  alt="" /></button> 
                                <button onClick={() => slider?.current?.slickNext()}><img className='next h-10 px-2 py-2 bg-[#ebf4fa] rounded-sm mr-2' src={right} alt="" /></button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <Slider ref={slider} {...settings}>
                    <Testimonial username="Rohan Sharma" userImg={user} company='Chennai India'/>
                    <Testimonial username="Rohan Sharma" userImg={user} company='Chennai India'/>
                    <Testimonial username="Rohan Sharma" userImg={user} company='Chennai India'/>
                    <Testimonial username="Rohan Sharma" userImg={user} company='Chennai India'/>
                </Slider>    
                </div>
            </div>
        </div>
    )
}
export default LandingPage;

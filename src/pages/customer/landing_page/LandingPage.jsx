import './LandingPage.css'
import introBg from '../../../assets/landing_page/introBg.png'
import introImg from '../../../assets/landing_page/introImg.png'
import shipIcon from '../../../assets/landing_page/shipIcon.png'
import wallet from '../../../assets/landing_page/wallet.png'
import truck from '../../../assets/landing_page/truck.png'
import verified from '../../../assets/landing_page/verified.png'
import arrowleft from '../../../assets/landing_page/arrowleft.png'
import arrowright from '../../../assets/landing_page/arrowright.png'
import arrowdown from '../../../assets/landing_page/updownArrows.png'
import processImg1 from '../../../assets/landing_page/processImg1.png'
import processImg2 from '../../../assets/landing_page/processImg2.png'
import processImg3 from '../../../assets/landing_page/processImg3.png'
import processImg4 from '../../../assets/landing_page/processImg4.png'
import pathImg from '../../../assets/landing_page/mobilePath.png'
import left from '../../../assets/landing_page/left.png'
import right from '../../../assets/landing_page/right.png'
import user from '../../../assets/landing_page/user1.png'
import user2 from '../../../assets/landing_page/user2.png'
import user3 from '../../../assets/landing_page/user3.png'
import commas from '../../../assets/landing_page/commaIcon.png'
import star from '../../../assets/landing_page/star.png'
import layer1 from '../../../assets/landing_page/Layer1.png'
import layer2 from '../../../assets/landing_page/Layer2.png'
import appstore from '../../../assets/landing_page/App Store.png'
import googleplay from '../../../assets/landing_page/Google Play.png'
import mobile from '../../../assets/landing_page/mobile.png'
import qr from '../../../assets/landing_page/qr.png'
import animation from '../../../assets/landing_page/animation.gif'
import CustomerCare from '../../../assets/landing_page/customerCare.gif'
import ReceiveOrder from '../../../assets/landing_page/receiveOrder.gif'
import Delivery1 from '../../../assets/landing_page/delivery.gif'
import PlaceOrder from '../../../assets/landing_page/placeOrder.gif'
import Delivery from './Components/our_progress/delivery/Delivery'
import Destination from './Components/our_progress/destination/Destination'
import Dispatch from './Components/our_progress/dispatch/Dispatch'
import LastMile from './Components/our_progress/last_mile/LastMile'
import Pickup from './Components/our_progress/pickup/Pickup'
import Loyalists from './Components/our_progress/layalists/Loyalists'
import ServiceCard from './Components/services/Services'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, {useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from "aos"
import "aos/dist/aos.css"
import Testimonial from './Components/testimonial/Testimonial'
import Modal from '../../../components/awareness_popup/Popup'
import ScrollToTop from "react-scroll-to-top";
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiFillGithub, AiFillMessage} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const LandingPage=()=>{
    const [showModal, setShowModal] = useState(false)
    const {currentUser} = useSelector(state=> state.user);
  const navigate = useNavigate()
    setTimeout(function() {
        AOS.init({
            once: false,
        });
    }, 100);
    useEffect(()=>{
        AOS.init({
            duration:2000,
            })
    })
    const slider = React.useRef(null);
    const slider2 = React.useRef(null);
    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 0,
        cssEase: "linear",
        hover:false,
      };
    const settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
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

            {/* social media icons */}
            <div className='hidden md:block'>
                <ul className='text-white z-50 flex flex-col justify-center h-screen fixed left-0 top-2'>
                    <li className='flex z-50 w-[160px] justify-between items-center'>
                        <a className='flex z-50 h-[40px] text-lg pl-2 justify-between items-center w-full bg-[#316FF6] ml-[-120px] hover:ml-[0px] duration-500' rel="noreferrer" href="https://www.facebook.com/profile" target='_blank'>Facebook<AiFillFacebook size="35px"/></a>
                    </li>
                    <li className='flex z-50 w-[160px] justify-between items-center'>
                        <a className='flex z-50 h-[40px] text-lg pl-2 justify-between items-center w-full bg-red-500 ml-[-120px] hover:ml-[0px] duration-500' rel="noreferrer" href="https://www.instagram.com/profile" target='_blank'>Instagram<AiFillInstagram size="35px"/></a>
                    </li>
                    <li className='flex z-50 w-[160px] justify-between items-center'>
                        <a className='flex z-50 h-[40px] text-lg pl-2 justify-between items-center w-full bg-[#1DA1F2] ml-[-120px] hover:ml-[0px] duration-500' rel="noreferrer" href="https://www.twitter.com/profile" target='_blank'>Twitter<AiFillTwitterSquare size="35px"/></a>
                    </li>
                    <li className='flex z-50 w-[160px] justify-between items-center'>
                        <a className='flex z-50 h-[40px] text-lg pl-2 justify-between items-center w-full bg-gray-600 ml-[-120px] hover:ml-[0px] duration-500' rel="noreferrer" href="https://www.github.com/profile" target='_blank'>Github<AiFillGithub size="35px"/></a>
                    </li>
                    <li className='flex z-50 w-[160px] justify-between items-center'>
                        <a className='flex z-50 h-[40px] text-lg pl-2 justify-between items-center w-full bg-[#0077b5] ml-[-120px] hover:ml-[0px] duration-500' rel="noreferrer" href="https://www.linkedin.com/profile" target='_blank'>Linkdin<AiFillLinkedin size="35px"/></a>
                    </li>
                    <li className='flex z-50 w-[160px] justify-between items-center'>
                        <a className='flex z-50 h-[40px] text-lg pl-2 justify-between items-center w-full bg-deep-green ml-[-120px] hover:ml-[0px] duration-500' rel="noreferrer" href="https://www.messenger.com/profile" target='_blank'>Messenger<AiFillMessage size="30px"/></a>
                    </li>
                </ul>
            </div>

            {/* Landing Intro page */}
            <div className='landingPageIntro relative w-full'>
                <div className='landingPageIntroBg absolute -top-20 -z-10 left-0 w-[40%] hidden md:block'>
                    <img src={introBg} alt="" />
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full'>
                    <div className='w-10/12 md:w-[30%] md:ml-16'>
                        <h1 className='text-lg md:text-3xl font-medium mt-6 hidden md:block'>
                            We provide{' '}
                            <span style={{ color: 'rgba(98, 177, 121, 1)', fontWeight: 'medium' }}>
                              <Typewriter
                                words={['Quick & Reliable Delivery and Logistics Solution.','On-Demand logistics services for your business.']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={3000}
                              />
                            </span>
                        </h1>
                        <h1 className='block md:hidden text-xl md:text-2xl lg:text-3xl font-medium font-lato mt-4'>Quick & Reliable <span className='text-deep-green'>Delivery and Logistics</span> Solution.</h1>
                        <p className='font-lato mt-4 mb-4 lg:mt-8 lg:mb-9 text-[#4F4F4F] text-sm lg:text-base font-medium'>Unlock the freedom of hassle-free package delivery—wherever you are, whenever you need it. With our reliable service, your parcels find their way to your doorstep, transcending boundaries and time constraints.</p>
                    </div>
                    <div className='md:w-[58%] flex justify-end'>
                        <img src={introImg} alt="" />
                    </div>
                </div>
            </div>

            {/* Why Choose Us? */}
            <div className='w-full flex flex-col items-center justify-center mt-16'>
                <div className='w-10/12 md:w-9/12 flex items-center justify-between mb-8 md:my-10'>
                    <div className='relative w-full md:w-fit'>
                        <div><h1 className='text-xl md:text-4xl font-bold md:font-bold font-rubik hidden md:block'>Why Choose Us?</h1></div>
                        <div className="relative flex justify-center md:hidden">
                             <div><p className='font-semibold text-2xl'>WE ARE GROWING DAILY</p></div>
                             <div className='absolute w-[50%] h-[3px] bg-deep-green -bottom-1'></div>
                        </div>
                        <div className='absolute w-[75%] h-[3px] bg-deep-green md:-bottom-2 left-0 hidden md:block'></div>
                    </div>
                    <div>
                        <img className='h-14 md:h-28 hidden md:block' src={shipIcon} alt="" />
                    </div>
                </div>
                <div className='w-9/12 flex flex-col md:flex-row items-center justify-between'>
                    <div data-aos="slide-up" className='relative mb-8 md:w-1/4 flex flex-col items-center'>
                        <img className='h-24 md:h-20 absolute top-0 md:-left-4' src={wallet} alt="" />
                        <h1 className='text-lg md:w-full  md:text-xl font-lato font-semibold text-deep-green mb-2 pt-[5rem] md:pt-[4.5rem]'>Affordable Price</h1>
                        <p className='text-sm text-center md:text-left font-lato font-semibold text-dark-gray'>Opt for our services for unbeatable affordability. We pride ourselves on offering cost-effective solutions without compromising on quality.</p>
                    </div>
                    <div data-aos="slide-up" className='relative mb-8 md:w-1/4 flex flex-col items-center'>
                        <img className='h-24 md:h-20 absolute top-0 md:-left-4' src={truck} alt="" />
                        <h1 className='text-lg md:w-full md:text-xl font-lato font-semibold text-deep-green mb-2 pt-[5rem] md:pt-[4.5rem]'>Swift Delivery</h1>
                        <p className='text-sm text-center md:text-left font-lato font-semibold text-dark-gray'>Fastest delivery that exceeds expectations. Our commitment to prompt service ensures your parcels reach their destination swiftly and securely.</p>
                    </div>
                    <div data-aos="slide-up" className='relative mb-8 md:w-1/4 flex flex-col items-center'>
                        <img className='h-24 md:h-20 absolute top-0 md:-left-4' src={verified} alt="" />
                        <h1 className='text-lg md:w-full  md:text-xl font-lato font-semibold text-deep-green mb-2 pt-[5rem] md:pt-[4.5rem]'>Reliable Service</h1>
                        <p className='text-sm text-center md:text-left font-lato font-semibold text-dark-gray'>Our steadfast commitment ensures your parcels are handled with care and precision, guaranteeing secure and timely deliveries.</p>
                    </div>
                </div>
                <div  onClick={currentUser ? () => navigate('/home') : () => navigate('/login')} data-aos="slide-up"  className='buttonbox rounded-3xl bg-deep-green mb-20 mt-6 md:mt-20'>
                    <button onClick={currentUser ? () => navigate('/home') : () => navigate('/login')} className='chooseUsBtn h-10 md:h-12 bg-deep-green text-white w-52 text-sm md:text-base rounded-3xl'>Get Started</button>
                </div>
                {showModal && <Modal onClose={()=>setShowModal(false)}/>}
            </div>

            {/* How Does it Work? Desktop */}
            <div className='hidden md:block'>
            <div className='w-full flex flex-col items-center justify-center mb-10'>
                <div className='flex w-9/12 items-center justify-between mb-12'>
                    <div>
                        <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                            <h1 className='font-rubik text-sm font-normal px-2'>What We Do</h1>
                        </div>
                        <div className='relative my-2'>
                           <div>
                                <h1 className='font-rubik text-xl md:text-4xl font-bold'>How Does It Work?</h1>
                           </div>
                           <div className='absolute w-[68%] h-[3px] bg-deep-green -bottom-2 left-0'></div>
                        </div>
                    </div>
                    <div>
                        <div className='mb-4'><img className='pr-8' src={arrowright} alt="" /></div>
                        <div className='mt-4'><img className='pl-8' src={arrowleft} alt="" /></div>
                    </div>
                </div>
                <div className='flex w-9/12 flex-col items-center justify-center'>
                    <div className='w-full flex items-center justify-between mb-12 md:my-0'>
                        <div data-aos="fade-up" className='w-[40%]'>
                            <div className='flex items-center'>
                                <div className='bg-[#230B34] w-7 h-7 flex items-center justify-center rounded-full'>
                                    <h1 className='text-white'>1</h1>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Select Pick Up</h1>
                                </div>
                            </div>
                            <div className='my-4'>
                                <p className='text-dark-gray text-base'>Whether its your home, office, or another convenient spot, take control and customize the pick-up point that best suits your needs</p>
                            </div>
                        </div>
                        <div className='w-[40%] hidden md:block'>
                            <img src={processImg1} alt="" />
                        </div>
                    </div>
                    <div className='relative w-full flex items-center justify-between md:h-[20rem] mb-12 md:my-0'>
                        <div className='w-[40%] hidden md:block'>
                            <img src={processImg2} alt="" />
                        </div>
                        <div data-aos="fade-up" className='w-[40%]'>
                            <div className='flex items-center'>
                                <div className='bg-[#230B34] w-7 h-7 flex items-center justify-center rounded-full'>
                                    <h1 className='text-white'>2</h1>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Select Drop Off</h1>
                                </div>
                            </div>
                            <div className='my-4'>
                                <p className='text-dark-gray text-base'>Specify the exact destination for your parcels, be it your residence, workplace, or any preferred spot.</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full flex items-center justify-between md:h-[20rem] mb-12 md:my-0'>
                        <div data-aos="fade-up" className='w-full md:w-[40%]'>
                            <div className='flex items-center'>
                                <div className='bg-[#230B34] w-7 h-7 flex items-center justify-center rounded-full'>
                                    <h1 className='text-white'>3</h1>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Choose Vehicle</h1>
                                </div>
                            </div>
                            <div className='my-4'>
                                <p className='text-dark-gray text-base'>Customize your delivery experience by selecting the ideal vehicle for your shipment. Whether its a bike for quick urban deliveries, a truck for larger shipments</p>
                            </div>
                        </div>
                        <div className='w-[40%]'>
                            <img src={processImg3} alt="" />
                        </div>
                    </div>
                    <div className='relative w-full flex items-center justify-between md:h-[20rem] mb-12 md:my-0'>
                        <div className='w-[40%]'>
                            <img src={processImg4} alt="" />
                        </div>
                        <div data-aos="fade-up" className='w-[40%] '>
                            <div className='flex items-center'>
                                <div className='bg-[#230B34] w-7 h-7 flex items-center justify-center rounded-full'>
                                    <h1 className='text-white'>4</h1>
                                </div>
                                <div className='flex items-center justify-center '>
                                    <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Parcel Delivery</h1>
                                </div>
                            </div>
                            <div className='my-4'>
                                <p className='text-dark-gray text-base'>Experience seamless and efficient parcel delivery services designed to cater to your specific needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* How Does it Work? Mobile */}
            <div className='block md:hidden w-full'>
            <div className='w-full flex flex-col items-center justify-center mb-10'>
                <div className='flex w-10/12 items-center justify-between mb-12'>
                    <div>
                        <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                            <h1 className='font-rubik text-sm font-normal px-2'>What We Do</h1>
                        </div>
                        <div className='relative my-2'>
                           <div>
                                <h1 className='font-rubik text-xl md:text-4xl font-bold'>How Does It Work?</h1>
                           </div>
                           <div className='absolute w-[68%] h-[3px] bg-deep-green -bottom-2 left-0'></div>
                        </div>
                    </div>
                    <div>
                        <img className='h-16 md:h-32' src={arrowdown} alt="" />
                    </div>
                </div>
            </div>
            </div>
            <div className='w-full my-8 block md:hidden'>
            <Slider {...settings3}>
            <div className='w-'>
            <div className='mx-4 w-11/12 flex flex-col items-center justify-center'>
                <div className='flex items-center w-10/12'>
                    <div className='bg-[#230B34] w-12 h-12 flex items-center justify-center rounded-full'>
                        <h1 className='text-white text-xl'>1</h1>
                    </div>
                    <div className='flex items-center justify-center '>
                        <h1 className='text-deep-green font-semibold font-lato text-2xl mx-6'>Select Pick Up</h1>
                    </div>
                </div>
                <div className='my-4 w-10/12'>
                    <p className='font-lato text-dark-gray text-lg'>Whether its your home, office, or another convenient spot, take control and customize the pick-up point that best suits your needs</p>
                </div>
            </div>
            </div>
            <div className='w-'>
            <div className='mx-4 w-11/12 flex flex-col items-center justify-center'>
                <div className='flex items-center w-10/12'>
                    <div className='bg-[#230B34] w-12 h-12 flex items-center justify-center rounded-full'>
                        <h1 className='text-white text-xl'>2</h1>
                    </div>
                    <div className='flex items-center justify-center '>
                        <h1 className='text-deep-green font-semibold font-lato text-2xl mx-6'>Select Drop Off</h1>
                    </div>
                </div>
                <div className='my-4 w-10/12'>
                    <p className='font-lato text-dark-gray text-lg'>Specify the exact destination for your parcels, be it your residence, workplace, or any preferred spot.</p>
                </div>
            </div>
            </div>
            <div className='w-'>
            <div className='mx-4 w-11/12 flex flex-col items-center justify-center'>
                <div className='flex items-center w-10/12'>
                    <div className='bg-[#230B34] w-12 h-12 flex items-center justify-center rounded-full'>
                        <h1 className='text-white text-xl'>3</h1>
                    </div>
                    <div className='flex items-center justify-center '>
                        <h1 className='text-deep-green font-semibold font-lato text-2xl mx-6'>Choose Vehicle</h1>
                    </div>
                </div>
                <div className='my-4 w-10/12'>
                    <p className='font-lato text-dark-gray text-lg'>Customize your delivery experience by selecting the ideal vehicle for your shipment. Whether its a bike for quick urban deliveries, a truck for larger shipments</p>
                </div>
            </div>
            </div>
            <div className='w-'>
            <div className='mx-4 w-11/12 flex flex-col items-center justify-center'>
                <div className='flex items-center w-10/12'>
                    <div className='bg-[#230B34] w-12 h-12 flex items-center justify-center rounded-full'>
                        <h1 className='text-white text-xl'>4</h1>
                    </div>
                    <div className='flex items-center justify-center '>
                        <h1 className='text-deep-green font-semibold font-lato text-2xl mx-6'>Parcel Delivery</h1>
                    </div>
                </div>
                <div className='my-4 w-10/12'>
                    <p className='font-lato text-dark-gray text-lg'>Experience seamless and efficient parcel delivery services designed to cater to your specific needs.</p>
                </div>
            </div>
            </div>
            </Slider>
            </div>
            <div className='block md:hidden'>
            <div className='w-full my-10'>
                <img src={pathImg} alt="" />
            </div>
            </div>

            {/*What we offers*/}
            <div className='w-9/12 mt-4 mb-8'>
                <div className='w-full flex items-center justify-center my-4 md:my-12'>
                    <div className='flex w-full'>
                        <div className=''>
                            <div  className='bg-[#F4F4F4] w-fit border-l-[4px] h-7 mb-2 flex items-center justify-center border-deep-green'>
                                <h1 className='px-2 text-sm md:text-base'>Services</h1>
                            </div>
                            <div className='relative'>
                                <div>
                                    <h1  className='font-rubik text-lg md:text-4xl font-bold'>What We Offers</h1>
                                </div>
                                <div className='absolute w-[68%] h-[3px] bg-deep-green -bottom-2 left-0'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <ServiceCard/>
                </div>
                <div className='w-full mx-auto pt-[30px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                    <div data-aos="fade-up" className='shadow-lg p-2 flex flex-col items-center justify-center text-center hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <img src={PlaceOrder} alt="" />
                        </div>
                        <h1 className='text-lg text-black font-semibold py-2'>Effortless Booking</h1>
                        <ul className='text-left text-sm h-40 list-disc px-4'>
                            <li>Intuitive Interface</li>
                            <li>Streamlined Form Submission</li>
                            <li>Instant Confirmation and Updates</li>
                            <li>Accessible Support and Assistance</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className='shadow-lg p-2 flex flex-col items-center justify-center text-center hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <img src={Delivery1} alt="" />
                        </div>
                        <h1 className='text-lg text-black text-start font-semibold py-2'>Parcel Tracking</h1>
                        <ul className='text-left text-sm h-40 list-disc px-4'>
                            <li>Real-time tracking</li>
                            <li>Shipment tracking</li>
                            <li>Package status updates</li>
                            <li>Track and trace</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className='shadow-lg p-2 flex flex-col items-center justify-center text-center hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                        <div className='w-full h-40 flex items-center justify-center'>
                            <img src={ReceiveOrder} alt="" />
                        </div>
                        <h1 className='text-lg text-black font-semibold py-2'>Door-to-Door Delivery</h1>
                        <ul className='text-left text-sm h-40 list-disc px-4'>
                            <li>Home delivery</li>
                            <li>Residential delivery</li>
                            <li>Business-to-consumer (B2C) services</li>
                            <li>Last-mile delivery</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" className='shadow-lg p-2 flex flex-col items-center justify-center text-center hover:bg-deep-green hover:text-white duration-500 rounded-md'>
                        <div className='w-full h-40 flex items-center justify-center'>
                        <img src={CustomerCare} alt="" />
                        </div>
                        <h1 className='text-lg text-black font-semibold py-2'>Customer Support</h1>
                        <ul className='text-left text-sm h-40 list-disc px-4'>
                            <li>24/7 customer service</li>
                            <li>Dedicated support team</li>
                            <li>Customer assistance</li>
                            <li>Helpdesk for inquiries</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Our Progress */}
            <div className='w-9/12 mt-4 mb-28'>
                <div className='w-full flex items-center justify-center my-4 md:my-12'>
                    <div className='flex w-full'>
                        <div className=''>
                            <div  className='bg-[#F4F4F4] w-fit border-l-[4px] h-7 mb-2 flex items-center justify-center border-deep-green'>
                                <h1 className='px-2 text-sm md:text-base'>Growth</h1>
                            </div>
                            <div className='relative'>
                                <div>
                                    <h1  className='font-rubik text-lg md:text-4xl font-bold'>Our Progress</h1>
                                </div>
                                <div className='absolute w-[68%] h-[3px] bg-deep-green -bottom-2 left-0'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='md:w-5/12 my-6 md:my-0'>
                        <img src={animation} alt="" />
                    </div>
                    <div className='md:w-6/12 grid grid-cols-2 md:grid-cols-3 gap-5'>
                        <Pickup/>
                        <Dispatch/>
                        <Destination/>
                        <LastMile/>
                        <Delivery/>
                        <Loyalists/>
                    </div>
                </div>
            </div>

            {/* We are growing daily */}
            <div className=" w-10/12 flex flex-col items-center md:hidden mb-8">
                    <div className="relative flex justify-center">
                        <div><p className='font-semibold text-[20px]'>WE ARE GROWING DAILY</p></div>
                        <div className='absolute w-[50%] h-[3px] bg-deep-green -bottom-1'></div>
                    </div>
                    <div className="w-11/12 flex flex-col lg:flex-row items-center justify-evenly">
                        <div className="flex flex-col items-center justify-center h-36 max-w-xs w-11/12 rounded-3xl bg-white ">
                            <span className='text-2xl font-medium text-deep-green'>4</span>
                            <p className=' font-medium text-xl'>Number of Cities</p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-36 max-w-xs w-11/12 rounded-3xl bg-white ">
                            <span className='text-2xl font-medium text-deep-green'>7000+</span>
                            <p className=' font-medium text-xl'>Drivers Earning</p>
                            <p className=' font-medium text-xl'>Incentives(Monthly)</p>
                        </div>
                        <div className="flex flex-col items-center justify-center h-36 max-w-xs w-11/12 rounded-3xl bg-white ">
                            <span className='text-2xl font-medium text-deep-green'>5000+</span>
                            <p className=' font-medium text-xl'>Users Utilizing</p>
                            <p className=' font-medium text-xl'>Offers(Monthly)</p>
                        </div>
                    </div>
            </div>

            {/* Testimonial Heading*/}
            <div className='w-full flex items-center justify-center my-6 md:my-12'>
                <div className='flex w-9/12 items-center justify-between'>
                    <div>
                        <div  className='bg-[#F4F4F4] w-fit border-l-[4px] h-7 mb-2 flex items-center justify-center border-deep-green'>
                            <h1 className='px-2 text-sm md:text-base'>Testimonial</h1>
                        </div>
                        <div className='relative'>
                            <div>
                                <h1  className='font-rubik text-lg md:text-4xl font-bold'>What Our Customer Says</h1>
                            </div>
                            <div className='absolute w-[68%] h-[3px] bg-deep-green -bottom-2 left-0'></div>
                        </div>
                    </div>
                    {/* <div className='hidden md:block'>
                        <button onClick={() => slider?.current?.slickNext()}><img className='prev h-16 mx-4' src={left} alt="" /></button> 
                        <button onClick={() => slider?.current?.slickPrev()}><img className='next h-16' src={right} alt="" /></button> 
                    </div> */}
                </div>
            </div>

            {/* What our customer says Desktop*/}
            <Swiper
                ref={slider}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                scroll={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 300,
                  modifier: 1,
                  slideShadows: false,
                }}
                loop={true}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper hidden lg:block">  
                <SwiperSlide className='swiper-slide w-8/12 md:w-4/12'>
                    <Testimonial username="Shivam" userImg={user2}/>
                </SwiperSlide>                                                           
                <SwiperSlide className='swiper-slide w-8/12 md:w-4/12'>
                    <Testimonial username="Rahul" userImg={user}/>
                </SwiperSlide>                                                           
                <SwiperSlide className='swiper-slide w-8/12 md:w-4/12'>
                    <Testimonial username="Mahi" userImg={user3}/>
                </SwiperSlide>                                                           
                <SwiperSlide className='swiper-slide w-8/12 md:w-4/12'>
                    <Testimonial username="Honey" userImg={user}/>
                </SwiperSlide>                                                           
                <SwiperSlide className='swiper-slide w-8/12 md:w-4/12'>
                    <Testimonial username="Rohan" userImg={user3}/>
                </SwiperSlide>                                                           
                <SwiperSlide className='swiper-slide w-8/12 md:w-4/12'>
                    <Testimonial username="Bunny" userImg={user2}/>
                </SwiperSlide>                                                           
            </Swiper>

            {/* What our customer says Mobile*/}
            <div className='w-full my-8 block lg:hidden'>
                <Slider ref={slider2} {...settings2}>
                <div className=''>
                <div className='bg flex flex-col items-center justify-center py-6 '>
                    <div className=' w-10/12 flex items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <div>
                                <img className='h-16' src={user} alt="" />
                            </div>
                            <div className='mx-2'>
                                <h1 className='text-black font-rubik text-lg font-bold'>John Martin</h1>
                                <h1 className='text-black font-krub text-medium font-semibold'>Logistics Company</h1>
                            </div>
                        </div>
                        <div>
                            <img className='h-12' src={commas} alt="" />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <p className=' text-black font-lato text-sm md:text-base font-medium my-4'>Absolutely impressed with the FastX service provided! From the moment I entrusted my parcels to them, the entire process was seamless. They handled my packages with care and ensured timely delivery to the exact location I specified. Their attention to detail and commitment to customer satisfaction exceeded my expectations. I highly recommend their service for anyone seeking reliability, efficiency, and professionalism in parcel delivery.</p>
                    </div>
                    <div className='w-10/12 flex items-center justify-center'>
                        <div className='flex'>
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className=' bg-deep-green flex flex-col items-center justify-center py-6 '>
                    <div className=' w-10/12 flex items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <div>
                                <img className='h-16' src={user} alt="" />
                            </div>
                            <div className='mx-2'>
                                <h1 className='text-white font-rubik text-lg'>John Martin</h1>
                                <h1 className='text-white font-krub text-medium font-semibold'>Logistics Company</h1>
                            </div>
                        </div>
                        <div>
                            <img className='h-12' src={commas} alt="" />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <p className=' text-white font-lato text-sm md:text-base font-medium my-4'>Absolutely impressed with the FastX service provided! From the moment I entrusted my parcels to them, the entire process was seamless. They handled my packages with care and ensured timely delivery to the exact location I specified. Their attention to detail and commitment to customer satisfaction exceeded my expectations. I highly recommend their service for anyone seeking reliability, efficiency, and professionalism in parcel delivery.</p>
                    </div>
                    <div className='w-10/12 flex items-center justify-center'>
                        <div className='flex '>
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='bg-[#F4F4F4] flex flex-col items-center justify-center py-6 '>
                    <div className=' w-10/12 flex items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <div>
                                <img className='h-16' src={user} alt="" />
                            </div>
                            <div className='mx-2'>
                                <h1 className='text-black font-rubik text-lg'>John Martin</h1>
                                <h1 className='text-black font-krub text-medium font-semibold'>Logistics Company</h1>
                            </div>
                        </div>
                        <div>
                            <img className='h-12' src={commas} alt="" />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <p className=' text-black font-lato text-sm md:text-base font-medium my-4'>Absolutely impressed with the FastX service provided! From the moment I entrusted my parcels to them, the entire process was seamless. They handled my packages with care and ensured timely delivery to the exact location I specified. Their attention to detail and commitment to customer satisfaction exceeded my expectations. I highly recommend their service for anyone seeking reliability, efficiency, and professionalism in parcel delivery.</p>
                    </div>
                    <div className='w-10/12 flex items-center justify-center'>
                        <div className='flex'>
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className=' bg-deep-green flex flex-col items-center justify-center py-6 '>
                    <div className=' w-10/12 flex items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <div>
                                <img className='h-16' src={user} alt="" />
                            </div>
                            <div className='mx-2'>
                                <h1 className='text-white font-rubik text-lg'>John Martin</h1>
                                <h1 className='text-white font-krub text-medium font-semibold'>Logistics Company</h1>
                            </div>
                        </div>
                        <div>
                            <img className='h-12' src={commas} alt="" />
                        </div>
                    </div>
                    <div className='w-10/12'>
                        <p className=' text-white font-lato text-sm md:text-base font-medium my-4'>Absolutely impressed with the FastX service provided! From the moment I entrusted my parcels to them, the entire process was seamless. They handled my packages with care and ensured timely delivery to the exact location I specified. Their attention to detail and commitment to customer satisfaction exceeded my expectations. I highly recommend their service for anyone seeking reliability, efficiency, and professionalism in parcel delivery.</p>
                    </div>
                    <div className='w-10/12 flex items-center justify-center'>
                        <div className='flex'>
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                            <img className='h-4 md:h-5 mr-1' src={star} alt="" />
                        </div>
                    </div>
                </div>
                </div>
                </Slider>
            </div>
            <div className='block lg:hidden'>
            <div className='w-full my-4 flex items-center justify-center'>
                <div className=''>
                    <button onClick={() => slider2?.current?.slickPrev()}><img className='prev h-14 mx-4' src={left} alt="" /></button> 
                    <button onClick={() => slider2?.current?.slickNext()}><img className='next h-14' src={right} alt="" /></button> 
                </div>
            </div>
            </div>

            {/* Ready to go? */}
            <div className='w-full relative flex flex-col items-center justify-center my-8'>
                <div className='w-full absolute left-0 right-0 -z-20 hidden md:block'>
                    <img className='w-full' src={layer1} alt="" />
                </div>
                <div className='w-full absolute left-0 right-0 -z-10 mt-[14rem] block md:hidden'>
                    <img className='w-full' src={layer2} alt="" />
                </div>
                <div className='relative w-10/12  block md:hidden my-8'>
                    <h1 className=' w-full font-rubik text-2xl md:text-4xl font-bold'>READY TO GO?</h1>
                    <div className='absolute w-[40%] h-[3px] bg-deep-green top-9 left-1'></div>
                    <p className=' font-lato text-sm font-semibold my-6'>Download the app and enjoy hassle-free delivery services with just a few taps!</p>
                </div>
                <div className='flex w-10/12 md:w-9/12 md:my-32 items-center justify-between'>
                    <div className='w-[50%] d:w-[40%]'>
                        <h1 className='hidden md:block font-rubik text-4xl font-bold'>READY TO GO?</h1>
                        <p className='hidden md:block font-lato text-sm md:text-base font-medium my-6'>Download the app and enjoy hassle-free delivery services with just a few taps!</p>
                        <img className='h-6 md:h-10 mt-2' src={appstore} alt="" />
                        <img className='h-6 md:h-10 mt-2' src={googleplay} alt="" />
                    </div>
                    <div className='w-[50%] md:w-[60%] flex items-center md:justify-end'>
                        <img className='h-[260px] w-[130px] md:h-[511px] md:w-[250px]' src={mobile} alt="" />
                    </div>
                </div>
            </div>

            {/* qr to download app */}
            <div className='md:bg-gradient-to-br from-deep-green to-pale-mint w-full md:w-9/12 my-8 py-8 rounded-xl flex justify-center items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-center px-2 my-4 md:text-xl font-medium'>Get the FastX mobile app to start booking your orders!</h1>
                    <img className='h-36 md:h-48 my-4' src={qr} alt="" />
                    <h1 className='text-center my-4'>Scan to download our app!</h1>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;
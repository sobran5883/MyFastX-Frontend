import  React, { useState } from 'react'
import './LandingPage2.css'
import { Slide } from 'react-awesome-reveal'
import ScrollToTop from "react-scroll-to-top";
import frame from '../../../assets/landing_page2/Frame.png'
import mobile from '../../../assets/landing_page2/Group 12687.png'
import arrow from '../../../assets/landing_page2/Vector (1).png'
import employees from '../../../assets/landing_page2/Group 12688.png'
import pickup from '../../../assets/landing_page2/Select Pick up.png'
import left from '../../../assets/landing_page2/image 740.png'
import right from '../../../assets/landing_page2/image 741.png'
import heart from '../../../assets/landing_page2/image 742.png'
import Testimonial1 from '../../../assets/landing_page2/testimonial1.jpeg'
import Testimonial2 from '../../../assets/landing_page2/testimonial2.jpg'
import Testimonial3 from '../../../assets/landing_page2/testimonial3.jpg'
import Testimonial4 from '../../../assets/landing_page2/testimonial4.jpg'
import google from '../../../assets/landing_page2/Google.png'
import facebook from '../../../assets/landing_page2/Facebook.png'
import linedIn from '../../../assets/landing_page2/in.png'
import whatsapp from '../../../assets/landing_page2/WhatsApp.png'
import insta from '../../../assets/landing_page2/Instagram.png'
import x from '../../../assets/landing_page2/X (formerly Twitter).png'
import googlePlay from '../../../assets/landing_page2/image 409.png'
import appleStore from '../../../assets/landing_page2/image 410.png'
import scan from '../../../assets/landing_page2/Health passport-cuate 1.png'
import Modal from '../../../components/awareness_popup/Popup'
import Achievement from './components/Achievement'
import Testimonial from './components/Testimonial'
import WhyChooseFastX from './components/WhyChooseFastX'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const LandingPage=()=>{
  const {currentUser} = useSelector(state=> state.user);
  const navigate = useNavigate()
  const redirectToPlayStore = () => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.fastx.customer";
  };

  const [showModal, setShowModal] = useState(false)
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);
  const settings0= {
      dots: false,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      hover:false,
      arrows: false, 
    };
  const settings1= {
      dots: true,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 4000,
      cssEase: "linear",
      hover:false,
      arrows: false, 
    };
  const settings2= {
      dots: false,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 4000,
      cssEase: "linear",
      hover:false,
      arrows: false, 
    };
    const settings3= {
      dots: false,
      infinite: true,
      slidesToShow:3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 2000,
      cssEase: "linear",
      hover:false,
      arrows: false, 
    };
    const settings4= {
      dots: true,
      infinite: true,
      slidesToShow:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 2000,
      cssEase: "linear",
      hover:false,
      arrows: false, 
    };
    return(
        <div className='w-full bg-white flex flex-col items-center justify-center'>
            <ScrollToTop
            smooth 
            top="1000"
            color="#007200"
            width="40px"
            height='25px'
            />
            {showModal && <Modal onClose={()=>setShowModal(false)}/>}
            {/* Landing Intro page */}
            <div className="w-11/12 lg:w-10/12 flex gap-3 mt-4 lg:mt-12 flex-col lg:flex-row">
              <div className="lg:bg-[#F8F8F8] lg:w-[60%] rounded-lg flex flex-col items-center justify-center">
                <div className="w-full mt:8 lg:mt-12 flex items-center justify-center">
                  <img className="" src={frame} alt="" />
                </div>
                <div className="lg:w-10/12 mt-4 lg:mt-10 lg:mb-6 flex text-center flex-col items-center justify-center">
                  <h1 className='text-xl md:text-2xl lg:text-3xl font-medium font-inter'>
                    <span>Welcome</span><br/>
                    <span className='text-[#739072]'> Quick & Reliable</span>
                    <span> Delivery and</span>
                    <span className='text-[#739072]'> Logistics</span>
                    <span> Solution</span>
                  </h1>
                  <h1 className='text-xl md:text-2xl lg:text-3xl font-medium font-inter mt-3'>
                    Deliver <span className='text-[#739072]'>Anything</span>, <span className='text-[#739072]'>Anytime</span>, <span className='text-[#739072]'>Anyhow</span> and <span className='text-[#739072]'>Anywhere</span> in Delhi-NCR
                  </h1>
                  <p className='text-[#1D1B1B] text-base my-4'>Welcome to MyFastX, your trusted partner in swift and dependable delivery and logistics solutions. </p>
                  <button onClick={currentUser ? () => navigate('/home') : () => navigate('/login')} className='bg-black font-inter h-8 w-full md:h-10 sm:w-40 rounded-lg text-sm text-white '>Get Started</button>
                </div>
              </div>
              <div className="lg:w-[40%] flex flex-col justify-between">
                <div className=' hidden lg:block'>
                  <div className="lg:bg-[#F8F8F8] px-6 lg:pt-8 rounded-lg flex flex-col items-center">
                    <div className='w-full flex flex-col items-center lg:items-start'>
                      <h1 className='text-[#739072] text-2xl md:text-3xl font-semibold'>Get Our Application</h1>
                      <p className='text-[#1D1B1B] text-base my-2'>The future fo logistics at your fingertips!</p>
                    </div>
                    <div>
                      <img src={mobile} alt="" />
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly lg:justify-between mt-4">
                    <button onClick={()=>setShowModal(true)} className='bg-black font-inter h-8 w-36 md:h-10 md:w-40 rounded-lg text-sm text-white '>For IOS</button>
                    <button onClick={redirectToPlayStore} className='bg-black font-inter h-8 w-36 md:h-10 md:w-40 rounded-lg text-sm text-white '>For Andriod</button>
                  </div>
                </div>
                <div className='mt-4 lg:mt-0 hidden lg:block'>
                  <Slider {...settings0}>
                      <Achievement achievement="Delivered over Millions of Orders" para="We have Orders delivered to users with love, Care and Trust." rating="4.5"/> 
                      <Achievement achievement="Delivered over Millions of Orders" para="We have Orders delivered to users with love, Care and Trust." rating="4.5"/> 
                  </Slider> 
                </div>  
              </div>
            </div>

            {/* Why Choose MyFastX? */}
            <div className='w-full flex flex-col items-center justify-center mt-16'>
                <div className='w-11/12 md:w-10/12 flex items-center justify-between mb-8 md:my-10'>
                    <div className='w-full md:w-fit'>
                        <div>
                            <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                                <h1 className='font-rubik text-sm font-normal px-2'>People recommend us because</h1>
                            </div>
                            <div className='relative my-2 w-fit'>
                               <div>
                                    <h1 className='font-rubik text-xl md:text-2xl font-semibold'>Why Choose MyFastX?</h1>
                               </div>
                               <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-10/12 hidden md:block'>
                  <Slider {...settings3}>
                    <WhyChooseFastX chooseIcon={FaRupeeSign} chooseHeading="Affordable Price" chooseText="Opt for our services for unbeatable affordability. We pride ourselves on offering cost-effective solutions without compromising on quality."/>
                    <WhyChooseFastX chooseIcon={FaTruckFast} chooseHeading="Real-Time Tracking" chooseText="You can track your shipment in real-time by choosing our shipping option. We keep you informed on the location of your package."/>
                    <WhyChooseFastX chooseIcon={MdVerifiedUser} chooseHeading="Versatile Services" chooseText="MyFastX offers a wide range of delivery solutions, from local porting to global shipping, catering to every delivery need."/>
                    <WhyChooseFastX chooseIcon={BsPersonLinesFill} chooseHeading="Customer-centric Approach" chooseText="Customer satisfaction is our top priority, with dedicated support available throughout your delivery journey."/>
                    <WhyChooseFastX chooseIcon={FaDoorOpen} chooseHeading="Door-to-Door Delivery" chooseText="Enjoy doorstep courier pick-up & delivery in Delhi-NCR without stepping out."/>
                  </Slider>
                </div>
                <div className=' w-11/12 md:w-10/12 block md:hidden mb-12'>
                  <Slider {...settings4}>
                    <WhyChooseFastX chooseIcon={FaRupeeSign} chooseHeading="Affordable Price" chooseText="Opt for our services for unbeatable affordability. We pride ourselves on offering cost-effective solutions without compromising on quality."/>
                    <WhyChooseFastX chooseIcon={FaTruckFast} chooseHeading="Real-Time Tracking" chooseText="You can track your shipment i real-time by choosing our shipping option. We keep you informed on the location of your package."/>
                    <WhyChooseFastX chooseIcon={MdVerifiedUser} chooseHeading="Versatile Services" chooseText="MyFastX offers a wide range of delivery solutions, from local porting to global shipping, catering to every delivery need."/>
                    <WhyChooseFastX chooseIcon={BsPersonLinesFill} chooseHeading="Customer-centric Approach" chooseText="Customer satisfaction is our top priority, with dedicated support available throughout your delivery journey."/>
                  </Slider>
                </div>
            </div>

            {/* about us */}
            <div className="w-11/12 md:w-10/12 mb-10 md:my-12">
                <div className='relative my-2 w-fit'>
                   <div>
                        <h1 className='font-rubik text-xl md:text-2xl font-semibold'>About Us</h1>
                   </div>
                   <div className='absolute w-[80%] h-[4px] bg-deep-green -bottom-1 left-0'></div>
                </div>
              <div className="flex flex-col md:flex-row items-center justify-between my-2 md:my-6">
                <Slide className='w-full md:w-7/12'>
                <div className="w-full">
                  <h1>Welcome to MyFastX, your trusted partner in swift and dependable delivery and logistics solutions. At MyFastX, we understand the importance of time-sensitive deliveries in todays fast-paced world. Our mission is to streamline and accelerate your supply chain, ensuring your goods reach their destination with speed, precision, and reliability.</h1>
                </div>
                </Slide>
                <div className="flex w-full md:w-auto items-center justify-start md:justify-center my-4">
                  <Slide direction='right'>
                  <div className="flex items-center gap-2 flex-row ml-2">
                    <img src={employees} alt="" />
                    <div className='flex flex-col'>
                    <span>250+</span>
                    <span>Employees</span>
                    </div>
                  </div>
                  </Slide>
                </div>
              </div> 
              <Slide>
              <button onClick={currentUser ? () => navigate('/home') : () => navigate('/login')} className='bg-black mb-8 font-inter h-8 w-36 md:h-10 md:w-40 rounded-lg text-sm text-white '>Get Started</button>
              </Slide>
            </div>

            {/* how does it work? */}
            <div className='w-full pb-8 mg:bg-[#F8F8F8] rounded-lg flex flex-col items-center justify-center'>
              <div className='w-10/12 md:my-8 mb-2'>
                <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                    <h1 className='font-rubik text-sm font-normal px-2'>What We Do</h1>
                </div>
                <div className='relative my-2 w-fit'>
                   <div>
                        <h1 className='font-rubik text-xl md:text-2xl font-semibold'>How does this work?</h1>
                   </div>
                   <div className='absolute w-[80%] h-[4px] bg-deep-green -bottom-1 left-0'></div>
                </div>
                <Slide><p className='mt-4'>Here are some points of why we are the best in Business</p></Slide>
              </div>
              <div className='w-11/12 flex items-center justify-end mb-2 md:mb-4 block md:hidden'>
                  <button onClick={() => slider1?.current?.slickPrev()}><img className='prev h-6 pr-8' src={right} alt="" /></button> 
                  <button onClick={() => slider1?.current?.slickNext()}><img className='next h-6 pr-2' src={left} alt="" /></button> 
                </div>
              <div className='w-10/12 flex items-center justify-between'>
                  <div className='hidden md:block'>
                    <button onClick={() => slider1?.current?.slickPrev()}><img className='prev' src={right}  alt="" /></button>
                  </div>
                  <div className='w-full md:w-9/12 my-2'>
                    <Slider ref={slider1} {...settings1}>
                      <div className=''>
                        <div className='flex flex-col md:flex-row items-center justify-between px-2'>
                          <div>
                            <img className='' src={pickup} alt="" />
                          </div>
                          <div className='md:my-8 w-full md:w-7/12'>
                            <div className='flex items-center md:my-4'>
                              <div className='bg-[#230B34] w-8 h-8 flex items-center justify-center rounded-full'>
                                <h1 className='text-white'>1</h1>
                              </div>
                              <div className='flex items-center justify-center '>
                                 <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Select Pick Up</h1>
                              </div>
                              <img className='h-4' src={arrow} alt="" />
                            </div>
                            <div>
                              <p>Whether its your home, office, or another convenient spot, take control and customize the pick-up point that best suits your needs.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex flex-col md:flex-row items-center justify-between px-2'>
                          <div>
                            <img className='' src={pickup} alt="" />
                          </div>
                          <div className='md:my-8 w-full md:w-7/12'>
                            <div className='flex items-center md:my-4'>
                              <div className='bg-[#230B34] w-8 h-8 flex items-center justify-center rounded-full'>
                                <h1 className='text-white'>2</h1>
                              </div>
                              <div className='flex items-center justify-center '>
                                 <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Select Drop Off</h1>
                              </div>
                              <img className='h-4' src={arrow} alt="" />
                            </div>
                            <div>
                              <p>Specify the exact destination for your parcels, be it your residence, workplace, or any preferred spot.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex flex-col md:flex-row items-center justify-between px-2'>
                          <div>
                            <img className='' src={pickup} alt="" />
                          </div>
                          <div className='md:my-8 w-full md:w-7/12'>
                            <div className='flex items-center md:my-4'>
                              <div className='bg-[#230B34] w-8 h-8 flex items-center justify-center rounded-full'>
                                <h1 className='text-white'>3</h1>
                              </div>
                              <div className='flex items-center justify-center '>
                                 <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Choose Vehicle</h1>
                              </div>
                              <img className='h-4' src={arrow} alt="" />
                            </div>
                            <div>
                              <p>Customize your delivery experience by selecting the ideal vehicle for your shipment. Whether its a bike for quick urban deliveries, a truck for larger shipments.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <div className='flex flex-col md:flex-row items-center justify-between px-2'>
                          <div>
                            <img className='' src={pickup} alt="" />
                          </div>
                          <div className='md:my-8 w-full md:w-7/12'>
                            <div className='flex items-center md:my-4'>
                              <div className='bg-[#230B34] w-8 h-8 flex items-center justify-center rounded-full'>
                                <h1 className='text-white'>4</h1>
                              </div>
                              <div className='flex items-center justify-center '>
                                 <h1 className='text-deep-green font-semibold font-lato text-xl mx-3'>Parcel Delivery</h1>
                              </div>
                              <img className='h-4' src={arrow} alt="" />
                            </div>
                            <div>
                              <p>Experience seamless and efficient parcel delivery services designed to cater to your specific needs.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>   
                  </div>
                  <div className='hidden md:block'>
                    <button onClick={() => slider1?.current?.slickNext()}><img className='next' src={left} alt="" /></button> 
                  </div>
              </div>
            </div>
            <div className='w-10/12 my-2 flex justify-end'>
                <h1 className='text-[#1D1B1B] hidden md:block text-sm text-center'>Click to view next of the process</h1>
            </div>

            {/* We are growing daily */}
            <div className=" w-full flex flex-col items-center pt-12 pb-20 bg-pale-mint">
              <div className="w-10/12 relative flex justify-center md:justify-start mb-4">
                  <div><p className='font-semibold text-2xl'>WE ARE GROWING DAILY</p></div>
              </div>
              <div className="w-10/12 flex flex-col md:flex-row gap-4 items-center justify-evenly">
                <Slide className='w-11/12'>
                  <div className="flex flex-col items-center justify-center border-deep-green p-2 border-2 h-36 max-w-xs w-full rounded-3xl bg-white ">
                      <span className='text-2xl font-medium text-deep-green'>6</span>
                      <p className=' font-medium md:text-xl'>Number of Cities</p>
                  </div>
                </Slide> 
                <Slide direction='up' className='w-11/12'> 
                  <div className="flex flex-col items-center justify-center border-deep-green p-2 border-2 h-36 max-w-xs w-full rounded-3xl bg-white ">
                      <span className='text-2xl font-medium text-deep-green'>7000+</span>
                      <p className=' font-medium md:text-xl'>Drivers Earning</p>
                      <p className=' font-medium md:text-xl'>Incentives(Monthly)</p>
                  </div>
                </Slide>  
                <Slide direction='right' className='w-11/12'>
                  <div className="flex flex-col items-center justify-center border-deep-green p-2 border-2 h-36 max-w-xs w-full rounded-3xl bg-white ">
                      <span className='text-2xl font-medium text-deep-green'>5000+</span>
                      <p className=' font-medium md:text-xl'>Users Utilizing</p>
                      <p className=' font-medium md:text-xl'>Offers(Monthly)</p>
                  </div>
                </Slide>  
              </div>
            </div>

            <div className='bg-[#739072] w-full py-12 md:my-16 flex flex-col md:flex-row items-center justify-center'>
              <h1 className='text-xl text-center  text-[#ECE3CE]'>Every Package is Packed with Care</h1>
              <img className='h-8 pl-2' src={heart} alt="" />
            </div>

            {/* Our Testimonials */}
            <div className='w-11/12 md:w-10/12 flex flex-col lg:flex-row mt-12 md:my-10 justify-between'>
              <div className='w-full lg:w-6/12'>
                <div className='my-4'>
                    <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                        <h1 className='font-rubik text-sm font-normal px-2'>Testimonials</h1>
                    </div>
                    <div className='relative my-2 w-fit'>
                       <div>
                            <h1 className='font-rubik text-xl md:text-2xl font-semibold'>What Our Customer Say</h1>
                       </div>
                       <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                    </div>
                </div>
                <Slide><p className='text-[#1D1B1B] text-base'>At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Heres what they have to say about their experiences with our quick and reliable delivery and logistics services</p></Slide>
              </div>
              <div className='w-full lg:w-5/12 my-6 md:my-0'>
                <div className='w-full flex items-center justify-end mb-4'>
                  <button onClick={() => slider2?.current?.slickPrev()}><img className='prev h-6 pr-8' src={right} alt="" /></button> 
                  <button onClick={() => slider2?.current?.slickNext()}><img className='next h-6 pr-2' src={left} alt="" /></button> 
                </div>
                <div className=''>
                  <Slider ref={slider2} {...settings2} >
                  <Testimonial username="Ramesh Gautam" bgColor={'bg-[#739072]'} rating={5}  profession="Logistics Company" userImg={Testimonial1} comment='&quot;Great customer service and very timely delivery. The driver was great and worked very hard to make it to the destination on time. I very much appreciate the hard work and communication!&quot;'/>
                  <Testimonial username="Akshat Kapoor" bgColor={'bg-pale-mint'} rating={5}  profession="Logistics Company" userImg={Testimonial3} comment='&quot;MyFastX impresses us with its promptness, responsiveness, and excellent organization. They are safe and keep our shipment on time, to a Delhi-NCR location with so much ease!! The team truly pulled together!&quot;'/>
                  <Testimonial username="Rahul Mishra" bgColor={'bg-gray-200'} rating={3}  profession="Wholesale Business" userImg={Testimonial4} comment='&quot;MyFastX has revolutionized our shipping process. The app&apos;s simplicity makes scheduling deliveries a breeze, and the real-time tracking ensures we&apos;re always in the know.&quot;'/>
                  </Slider> 
                </div>   
              </div>
            </div> 

            {/* connect with fastX */}
            <div className='w-11/12 md:w-10/12 flex justify-between my-6'>
              <div className='lg:w-6/12 flex flex-col justify-evenly'>
                <div>
                  <div>
                      <div className='bg-[#F4F4F4] w-fit border-l-[4px] h-6 flex items-center justify-center border-deep-green'>
                          <h1 className='font-rubik text-sm font-normal px-2'>Ready to go?</h1>
                      </div>
                      <div className='relative my-2 w-fit'>
                         <div>
                              <h1 className='font-rubik text-xl md:text-2xl font-semibold'>Connect with MyFastX</h1>
                         </div>
                         <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                      </div>
                  </div>
                  <Slide><p className='text-[#1D1B1B] text-base my-6'>MyFast X is more than a logistics provider; its a partner in your success. Join the MyFastX experience today and discover the convenience, reliability, and innovation that define modern logistics.</p></Slide>
                </div>
                <div className='block lg:hidden '>
                   <div className='w-full justify-center flex'>
                     <img src={scan} alt="" />
                   </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-between gap-2'>
                  <Slide>
                  <div className='mb-4'>
                    <h1 className='text-[#1D1B1B] text-base mb-2'>Follow us on</h1>
                    <div className='flex gap-2'>
                      <a href="https://www.youtube.com/@myfastxofficial ">
                        <img className='h-7' src={google} alt="" />
                      </a>
                      <a href="https://www.facebook.com/myfastxofficial?mibextid=YMEMSu">
                        <img className='h-7' src={facebook} alt="" />
                      </a>
                      <a href="https://www.linkedin.com/company/myfastx/">
                        <img className='h-7' src={linedIn} alt="" />
                      </a>
                      <a href="https://wa.me/+918961310988" rel="noreferrer"  target="_blank">
                          <img className='h-7' src={whatsapp} alt="" />
                      </a>
                      <a href="https://www.instagram.com/myfastxofficial/">
                        <img className='h-7' src={insta} alt="" />
                      </a>
                      <a href="https://twitter.com/fast_x13181">
                        <img className='h-7' src={x} alt="" />
                      </a>
                    </div>
                  </div>
                  </Slide>
                  <Slide direction='right'>
                  <div className='mb-4'>
                    <h1 className='text-[#1D1B1B] text-base mb-2'>Download MyFastX</h1>
                    <div className='flex gap-2'>
                      <button onClick={redirectToPlayStore}><img className='h-9' src={googlePlay} alt="" /></button>
                      <button><img className='h-9' src={appleStore} alt="" /></button>
                    </div>
                  </div>
                  </Slide>
                </div>
              </div>
              <div className='w-5/12 hidden lg:block'>
                <img src={scan} alt="" />
              </div>
            </div>

        </div>
    )
}
export default LandingPage;

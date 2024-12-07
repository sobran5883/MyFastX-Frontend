import logo from '../../assets/footer/logo.png'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import Modal from '../../components/awareness_popup/Popup'
import { IoHomeOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { LuCopyright } from "react-icons/lu";
const footer = () => {
  const [showModal, setShowModal] = useState(false)
  const [isUlVisible1, setIsUlVisible1] = useState(false);
  const [isUlVisible2, setIsUlVisible2] = useState(false);
  const [isUlVisible3, setIsUlVisible3] = useState(false);
  const [isUlVisible4, setIsUlVisible4] = useState(false);
  const [isUlVisible5, setIsUlVisible5] = useState(false);

  const toggleUlVisibility1 = () => {
    setIsUlVisible1(!isUlVisible1);
  };
  const toggleUlVisibility2 = () => {
    setIsUlVisible2(!isUlVisible2);
  };
  const toggleUlVisibility3 = () => {
    setIsUlVisible3(!isUlVisible3);
  };
  const toggleUlVisibility4 = () => {
    setIsUlVisible4(!isUlVisible4);
  };
  const toggleUlVisibility5 = () => {
    setIsUlVisible5(!isUlVisible5);
  };
  return (
    <div className='w-full flex items-center justify-center bg-[#1D1B1B] pt-10 pb-4'>
      <div className='w-11/12 md:w-10/12'>
        <div className='flex flex-col-reverse md:flex-row w-full'>
          <div className='flex items-center mb-4 mt-2 md:mb-4 md:mt-0'>
            <h1 className='text-white text-2xl font-medium mr-2'>MyFast<span className='text-deep-green'>X</span></h1>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-start justify-between'>
          <div className='md:w-[30%]'>
            <div>
              <p className='text-white font-roboto font-light text-sm'>MyFastX is a leading logistics platform that provides hyper-local, on-demand delivery solutions for individuals and businesses. Whether you need a delivery boy for your shop or to ship items items within city, MyFastX is your trusted partner, making delivery affortless and convenient. With a mission to revolutionize logistics through innovation and technology, MyFastX is committed to providing seamless, end-to-end delivery solutions that exceed customer expectations.</p>
            </div>
            <div className='md:mt-12 mt-4 md:mb-6 mb-4 flex items-start'>
              <IoHomeOutline className='text-deep-green text-lg'/>
              <p className='text-white font-roboto font-light text-sm pl-2'>Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
            </div>
            <div className='flex items-start'>
              <IoMailOutline className='text-deep-green text-lg'/>
              <div className='flex flex-col items-start pl-2'>
                <a href='mailto:care@myfastx.com' className='text-white hover:text-deep-green font-roboto font-light text-sm pb-1'>care@myfastx.com</a>
                <h1 className='text-white font-roboto font-light text-sm md:pb-1 mb-4'>+91 8961310988</h1>
              </div>

            </div>
          </div>
          <div className='w-full md:w-[65%] flex flex-col'>
            <div className='w-full flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-white font-normal text-base mb-3 hidden md:block'>Company</h1>
                  <div onClick={toggleUlVisibility1} className='flex items-center justify-between cursor-poroboto md:hidden'>
                    <h1 className='text-white font-light text-sm mb-1'>Company</h1>   
                    {isUlVisible1 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility1} />
                    ) : (
                      <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility1} />
                    )}             
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible1 && (
                  <ul className=''>
                    <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='about'>About Us</NavLink></li>
                    <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='what-we-do?'>What We Do?</NavLink></li>
                    <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='investors'>Investors</NavLink></li>
                    <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='about'>Press Release</NavLink></li>
                    <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='careers'>Careers</NavLink></li>
                    <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='pricing-details'>Pricing Details</NavLink></li>
                  </ul>
                  )}
                  <ul className=' hidden md:block'>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='about'>About Us</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='what-we-do?'>What We Do?</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='investors'>Investors</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='about'>Press Release</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='careers'>Careers</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='pricing-details'>Pricing Details</NavLink></li>                    
                  </ul>
                  {showModal && <Modal onClose={()=>setShowModal(false)}/>}
                </div>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-white font-normal text-base mb-3 hidden md:block'>Policies</h1>
                  <div onClick={toggleUlVisibility3} className='flex items-center justify-between cursor-poroboto md:hidden'>
                      <h1 className='text-white font-light text-sm mb-1'>Policies</h1>
                      {isUlVisible3 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility3} />
                      ) : (
                        <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility3} />
                      )}
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible3 && (
                    <ul className=''>
                      <li className='text-white font-roboto font-light text-sm pb-1 cursor-pointer'><NavLink to='term-of-use'>Terms And Conditions</NavLink></li>
                      <li className='text-white font-roboto font-light text-sm pb-1 cursor-pointer'><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                      <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='#'>Cookie Policy</NavLink></li>
                      <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to='#'>Fraud Disclaimer</NavLink></li>
                    </ul> 
                  )}  
                  <ul className=' hidden md:block'>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4 cursor-pointer'><NavLink to='term-of-use'>Terms And Conditions</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4 cursor-pointer'><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='#'>Cookie Policy</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to='#'>Fraud Disclaimer</NavLink></li>
                  </ul> 
                </div>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-white font-normal text-base mb-3 hidden md:block'>Help</h1>
                  <div onClick={toggleUlVisibility4} className='flex items-center justify-between cursor-poroboto md:hidden'>
                      <h1 className='text-white font-light text-sm mb-1'>Help</h1>
                      {isUlVisible4 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility4} />
                      ) : (
                        <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility4} />
                      )} 
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible4 && (
                    <ul className=''>
                      <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to="/prohibited-items">Restricted Items</NavLink></li>
                      <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to="/parcel-guide">Parcel size and weight guide</NavLink></li>
                      <li className='text-white font-roboto font-light text-sm pb-1'><NavLink to="/packaging-guide">Packaging guide</NavLink></li>
                    </ul> 
                  )}  
                  <ul className=' hidden md:block'>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/prohibited-items">Restricted Items</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/parcel-guide">Parcel size and weight guide</NavLink></li>
                    <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/packaging-guide">Packaging guide</NavLink></li>
                  </ul> 
                </div>
                <div className='w-full md:w-[25%]'>
                  <h1 className='text-white  font-normal text-base mb-3 hidden md:block'>Support</h1>
                  <div onClick={toggleUlVisibility5} className='flex items-center justify-between cursor-poroboto md:hidden'>
                      <h1 className='text-white font-light text-sm
                       mb-1'>Support</h1>
                      {isUlVisible5 ? (
                      <IoIosArrowUp className='text-white text-2xl' onClick={toggleUlVisibility5} />
                      ) : (
                        <IoIosArrowDown className='text-white text-2xl' onClick={toggleUlVisibility5} />
                      )} 
                  </div>
                  <div className='mb-1 md:hidden'>
                    <hr className='border-b-1 border-gray-500'/>
                  </div>
                  {isUlVisible5 && (
                    <ul className=''>
                      <li className='text-white font-roboto font-light text-xs w-full pb-1'><NavLink to="/faq">FAQ</NavLink></li>
                      <li className='text-white font-roboto font-light text-xs w-full pb-1'><NavLink to="/help">Customer Care</NavLink></li>
                      <li className='text-white font-roboto font-light text-xs w-full pb-1'><NavLink to="https://drive.google.com/file/d/1o7KuYJVaAOxszNO2-U3LhudOjV1uX-w4/view">Driver Term and Condition</NavLink></li>
                      <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/packaging-instruction">Packaging Instruction</NavLink></li>
                    </ul> 
                  )}
                    <ul className=' hidden md:block'>
                      <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/faq">FAQ</NavLink></li>
                      <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/help">Customer Care</NavLink></li>
                      <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="https://drive.google.com/file/d/1o7KuYJVaAOxszNO2-U3LhudOjV1uX-w4/view">Driver Term and Condition</NavLink></li>
                      <li className='text-white hover:text-deep-green font-roboto font-light text-sm pb-4'><NavLink to="/packaging-instruction">Packaging Instruction</NavLink></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className='mb-4 mt-10 hidden md:block'>
          <hr className='border-b-1 border-white md:border-b'/>
        </div>
        <div className='mt-6'>
          <div>
            <h1 className='text-white font-roboto font-light text-lg md:pb-1 mb-2'>Our Presence</h1>
          </div>
          <div className='flex gap-4 gap-y-2 flex-wrap'>
            <p className='text-white font-roboto font-light text-sm'>Delhi</p>
            <p className='text-white font-roboto font-light text-sm'>Noida</p>
            <p className='text-white font-roboto font-light text-sm'>Greater Noida</p>
            <p className='text-white font-roboto font-light text-sm'>Ghaziabad</p>
            <p className='text-white font-roboto font-light text-sm'>Gurugram</p>
            <p className='text-white font-roboto font-light text-sm'>Faridabad</p>
            <p className='text-white font-roboto font-light text-sm'>Bahadurgarh</p>
            <p className='text-white font-roboto font-light text-sm'>Kolkata</p>
          </div>
        </div>
        <div className='mb-4 mt-10'>
          <hr className='border-b-1 border-white md:border-b'/>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center md:gap-8'>
          <div className='flex text-white items-center justify-center text-xs md:text-sm'>
          <LuCopyright/>
          <h1 className='pl-1'>2024 MYFASTEX TECHNOLOGIES PVT LTD. All Rights Reserved</h1>
          </div>
          <div className='flex items-center justify-center text-white text-xs md:text-sm'>
            <h1>CIN: U52219UP2023PTC192260</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

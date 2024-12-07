import icon1 from '../../../assets/ChatWithDeliveryPatner/instadp_thedanielrivas_full_size 2.png'
import icon2 from '../../../assets/ChatWithDeliveryPatner/Group 17.png'
import icon3 from '../../../assets/ChatWithDeliveryPatner/Group 17 (1).png'
import icon4 from '../../../assets/ChatWithDeliveryPatner/Group 17 (2).png'
import icon5 from '../../../assets/ChatWithDeliveryPatner/image 20.png'
import icon6 from '../../../assets/ChatWithDeliveryPatner/Group 20.png'
import icon7 from '../../../assets/ChatWithDeliveryPatner/image 23.png'
import { useNavigate } from 'react-router-dom'
const Feedback = () => {
  const navigate= useNavigate()
  return (
    <>
      <div className="flex lg:flex-row flex-col font-Inter bg-[#F2FBF4] p-4 lg:p-16 gap-16 overflow-hidden">
        {/* 1st row */}
        <div className="flex flex-col gap-3 lg:w-2/5">
          <div className="bg-white  flex flex-row p-4 gap-5 w-full rounded-2xl shadow-2xl items-center">
            <img className=" lg:w-[73px] lg:h-[71px] w-[45px] h-[45px]"
              src={icon1}
              alt=""
            />
            <div className=" font-poppins">
              <p className="font-[500] lg;text-[20px]">Hello,</p>
              <p className="font-[400] lg:text-[22px]">Nick Turner</p>
            </div>
          </div>
          <div className=" bg-white  flex flex-col p-5 gap-5 w-full font-Inter  rounded-2xl shadow-2xl">
            <div className=" flex flex-row  gap-7 items-center">
              <img className="lg:w-[59px] lg:h-[59px] w-[45px] h-[45px]"
                src={icon2}
                alt=""
              />
              <div>
                <p className="font-[600] lg:font-[700]">25-30 min</p>
                <p className="font-[200] lg:font-[400]">Delivery time</p>
              </div>
            </div>
            <button onClick={()=>navigate('/tracking')}>
            <div className=" flex flex-row  gap-7 items-center">
              <img className="lg:w-[59px] lg:h-[59px] w-[45px] h-[45px]"
                src={icon3}
                alt=""
              />
              <div>
                <p className="font-[700]">Masjid E kulsum</p>
                <p className="font-[400]">Delivery address</p>
              </div>
            </div>
            </button>
            <button onClick={()=>navigate('/chat_with_delivary_partner')}>
            <div className=" flex flex-row  gap-7 items-center">
              <img className="lg:w-[59px] lg:h-[59px] w-[45px] h-[45px]"
                src={icon4}
                alt=""
              />
              <div className='flex flex-col items-start'>
                <p className="font-[700] text-start">Chat With Delivery partner</p>
                <p className="font-[400]">Chat Support</p>
              </div>
            </div>
            </button>
            <div className="flex  md:flex-row  justify-between gap-5 w-full items-center">
              <div className=" flex flex-row  gap-7 lg:gap-5 items-center">
                <img className="lg:w-[67px] lg:h-[64px] w-[45px] h-[45px]"
                  src={icon5}
                  alt=""
                />
                <div>
                  <p className="font-[700]">Rahul </p>
                  <p className="font-[500]">Courier</p>
                </div>
              </div>
              <img className=" lg:w-[66px] lg:h-[63px] w-[45px] h-[45px]"
                src={icon6}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 2nd col */}
        <div className=" flex flex-col gap-10 lg:w-full  w-11/12">
          <div className="flex flex-row items-center gap-10">
          <button onClick={()=>navigate(-1)}>
            <div className="bg-[#DEDEDE] w-[40px] h-[36px] rounded-full relative">
            <img  className="absolute top-2 left-2 "  src={icon7}  alt=""/>
            </div>
          </button>
            <span className=" font-Urbanist  font-[400px]">
              Feedback & Suggestions - Fast<span>X</span>
            </span>
            
          </div>
          <p>Whether it is about our service or our app or you just have some ideas . we would love to hear your feedback and suggestions</p>
          <div className=" border-solid border-2  border-[#797E7A] w-full h-[360px]  rounded-2xl">
            <input type="text" className=" w-full h-full bg-[#F2FBF4] rounded-2xl" />
          </div>
          <div className='flex justify-center mt-10'>
            <button type="submit" class="bg-[#62b179]  hover:bg-[#29693b] mb-10 text-white font-semibold  rounded-md py-2 px-4  mt-3 lg:w-3/5 w-full h-fit ">SUBMIT FEEDBACK</button>
            </div>
            <div className="flex flex-row justify-between items-center">
                    <p className='text-sm md:text-base'>We know the World is full of choices. Thank you for choosing us!</p>
                    <p className='text-sm md:text-base text-end'>-Team FastX</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;

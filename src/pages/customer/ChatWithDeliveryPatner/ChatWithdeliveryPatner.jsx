import { useNavigate } from "react-router-dom";
import icon1 from '../../../assets/ChatWithDeliveryPatner/instadp_thedanielrivas_full_size 2.png'
import icon2 from '../../../assets/ChatWithDeliveryPatner/Group 17.png'
import icon3 from '../../../assets/ChatWithDeliveryPatner/Group 17 (1).png'
import icon4 from '../../../assets/ChatWithDeliveryPatner/Group 17 (2).png'
import icon5 from '../../../assets/ChatWithDeliveryPatner/image 20.png'
import icon6 from '../../../assets/ChatWithDeliveryPatner/Group 20.png'
import icon7 from '../../../assets/ChatWithDeliveryPatner/image 23.png'
import icon8 from '../../../assets/ChatWithDeliveryPatner/img.png'
import icon9 from '../../../assets/ChatWithDeliveryPatner/gallery 1.png'
import icon10 from '../../../assets/ChatWithDeliveryPatner/gallery 2.png'
import icon11 from '../../../assets/ChatWithDeliveryPatner/gallery 3.png'
import icon12 from '../../../assets/ChatWithDeliveryPatner/gallery 4.png'
import icon13 from '../../../assets/ChatWithDeliveryPatner/gallery 5.png'

const ChatWithdeliveryPatner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex lg:flex-row flex-col  font-Inter bg-[#F2FBF4] p-2 lg:p-10 gap-10 overflow-hidden">
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
            <div className=" flex flex-row  gap-7 items-center">
              <img className="lg:w-[59px] lg:h-[59px] w-[45px] h-[45px]"
                src={icon4}
                alt=""
              />
              <div>
                <p className="font-[700]">Chat With Delivery partner</p>
                <p className="font-[400]">Chat Support</p>
              </div>
            </div>
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
        <div className=" flex flex-col gap-10 w-full  lg:w-8/12">
            <div className="flex flex-row items-center gap-10">
               <button onClick={()=>navigate(-1)}>
                <div className="bg-[#DEDEDE] w-[40px] h-[36px] rounded-full relative">
                    <img className="absolute top-2 left-2 " src={icon7} alt="" />
                </div>
                </button>
                <p className=" font-Urbanist  font-[400px]">Chat With Delivery Partner</p>
            </div>
            <div className=" flex flex-col gap-10 w-full">
                <div className="flex  flex-row items-center rounded-3xl gap-6">
                    <img className="w-[30px] h-[30px]" src={icon8} alt="" />
                    <div className="bg-[#F6F6F6] p-3">
                        <p>Hello Sir</p>
                    </div>
                </div>
                <div className="flex flex-row items-center rounded-3xl gap-6">
                    <img className="w-[30px] h-[30px]" src={icon8} alt="" />
                    <div className="bg-[#F6F6F6] p-3">
                        <p>I have picked up the order successfully</p>
                    </div>
                </div>
                <div className="flex  flex-row-reverse items-center rounded-3xl gap-6">
                    
                    <div className="bg-[#F6F6F6] p-3">
                        <p>Where can I track my order?</p>
                    </div>
                </div>
                <div className="flex flex-row items-center rounded-3xl gap-6">
                    <img className="w-[30px] h-[30px]" src={icon8} alt="" />
                    <div className="bg-[#F6F6F6] p-3">
                        <span>You can check the status of your order by clicking <a href="" className="text-[#62B179]">Orders</a> on the home page </span>
                    </div>
                </div>
                <div className="flex  flex-row-reverse items-center rounded-3xl gap-6">
                    
                    <div className="bg-[#F6F6F6] p-3">
                        <p>Thank You!</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full bg-[#F6F6F6] gap-1 h-fit p-5 items-center">
                    <img className="w-[27px] h-[25px]" src={icon9} alt="" />
                    <input type="text" className="w-full" placeholder="Type Your message" />
                    <img className="w-[19px] h-[18px]" src={icon10} alt="" />
                    <img className="w-[21px] h-[18px]" src={icon11} alt="" />
                    <img className="w-[19px] h-[18px]" src={icon12} alt="" />
                    <img className="w-[19px] h-[18px]" src={icon13} alt="" />
            </div>

        </div>
      </div>
    </>
  );
};

export default ChatWithdeliveryPatner;
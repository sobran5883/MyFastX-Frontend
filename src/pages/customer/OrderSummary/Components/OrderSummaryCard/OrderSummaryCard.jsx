import { RiArrowDropDownLine } from "react-icons/ri";
import img5 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/image 5.png'
import line111 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/Line 111.png'
import pin5 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/pin 5.png'
import group6 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/Group 6.png'
import pin4 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/pin 4.png'
import img1 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/image 1.png'
import line6 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/Line 6.png'
import logistics5 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/logistics 5.png'
import img24 from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/image 24.png'
import mic from '../../../../../assets/OrderSummary/Components/OrderSummaryGpay/Mic - Active.png'
import { useNavigate } from "react-router-dom";
const OrderSummaryGpay = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex bg-[#F2FBF4] w-full font-Inter  justify-between gap-10  xl:flex-row  md:flex md:p-10  flex-col overflow-hidden">
        <div className=" border-solid border-2 rounded-lg bg-white box-border  md:m-10  lg:w-[740px] w-full   ">
          <div className=" md:p-10 lg:w-[80%] w-full  p-10">
            <h1 className=" font-Inter font-[400] md:text-[30px] ">
              ORDER SUMMARY
            </h1>
            <div className="flex flex-row gap-3 my-5">
              <img
                className="h-[27px] w-[27px]"
                src={img5}
                alt=""
              />
              <h1 className=" font-poppins font-[400] md:text-[25px]">
                Add Instructions to Driver
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"

                className="w-64 border   w rounded-md py-2 px-3  focus:border-blue-500 "
                placeholder="Optional"

              />
              <div className="flex flex-row gap-3">
                <img
                  className="h-[26px]"
                  src={line111}
                  alt=""
                />
                <img
                  className="h-[27px] w-[25px]"
                  src={mic}
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 w-fit items-center">
              <img
                className="  w-full "
                src={line6}
                alt=""
              />
            </div>
            <div className="relative">
              <div className="flex  mt-7 gap-3">
                <div className="flex-none">
                  <img className="h-[27px] w-[27px]"
                    src={img5}
                    alt=""
                  />
                </div>
                <div className="flex-initial">
                  <h1 className="font-poppins font-[400] md:text-[25px] ">Location Details</h1>
                </div>
              </div>
              <div className="flex mt- ml-7 gap-6 ">
                <div className="flex-none">
                  <img
                    src={pin5}
                    alt=""
                  />
                </div>
                <div className="flex-initial">
                  <h1 className="font-poppins font-[400] md:text-[23px] ">MGBS Bus Stand</h1>
                </div>
                <div className="flex flex-row lg:w-[89px] w-fit h-fit relative lg:h-[44px] border-solid rounded-b-xl   shadow-2xl border-2 border-gray-100">
                  <p className=" font-poppins font-[500] md:text-[12px] text-[#808080]   lg:pl-2 lg:pb-2 lg:pt-1">

                    Pickup Time Now
                  </p>
                  <div className="lg:absolute top-6 left-10">
                    <RiArrowDropDownLine />
                  </div>
                </div>
              </div>
              <div className="absolute top-14 left-1">
                <img
                  className="ml-9"
                  src={group6}
                  alt=""
                />
              </div>
              <div className="absolute top-16 ml-7">
                <div className="flex  mt-7 gap-6">
                  <div className="flex-none">
                    <img
                      src={pin4}
                      alt=""
                    />
                  </div>
                  <div className="flex-initial">
                    <h1 className="font-poppins font-[400] md:text-[23px]">Snow World</h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex  mt-16 gap-3">
                <div className="flex-none">
                  <img className="h-[27px] w-[27px]"
                    src={img1}
                    alt=""
                  />
                </div>
                <div className="flex-initial ">
                  <h1 className="font-poppins font-[400] md:text-[25px]">Order Contact Number</h1>
                  <input
                    type="number"
                    className="w-64 border mt-4 rounded-md py-2 px-3 focus:outline-none focus:border-green-500 "
                    placeholder="+91 9154092023"
                    autocomplete="off"
                  />
                  <img
                    className="w-full  "
                    src={line6}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex  mt-5 gap-3">
              <div className="flex-none">
                <img className="h-[27px] w-[27px]"
                  src={logistics5}
                  alt=""
                />
              </div>
              <div className="flex-initial">
                <h1 className="font-poppins font-[400] md:text-[25px]">Add Coupon Code</h1>
                <div className="relative ">
                  <div className="absolute inset-y-0 right-3 flex items-center left-56 top-4 pointer-events-none">
                    <img
                      src={img24}
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    className="w-64 border mt-4 rounded-md py-2 px-3 focus:outline-none focus:border-green-500 "
                    placeholder="FIRSTFASTX30"
                    autocomplete="off"
                  />
                </div>
                <img
                  className="w-full mb-10  "
                  src={line6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-solid border-2 lg:w-[437px] w-full   items-center justify-center rounded-lg bg-white box-border  md:m-10  h-fit ">
        <h1 className=" px-3 py-3  font-Inter font-[400] md:text-[22px] ">Price Details</h1>
        <img
          className=" bg-gray-400 w-full"
          src={line6}
          alt=""
        />
        <div className="px-3 py-3 font-Inter font-[400] md:text-[22px] flex justify-between text-gray-500 ">
          <p>Base price(Motorcycle)</p>
          <p className=" font-[400] pr-5">₹50</p>
        </div>
        <div className="px-3 py-3 font-Inter font-[400] md:text-[22px] flex justify-between text-gray-500 ">
          <p>Over mileage(9km)</p>
          <p className=" font-[400] pr-5">₹50</p>
        </div>
        <div className="px-3 py-3 font-Inter font-[400] md:text-[22px] flex justify-between text-gray-500 ">
          <p>Coupon Discount</p>
          <p className=" font-[400] pr-5">- ₹30</p>
        </div>
        <img
          className=" bg-gray-400 w-full"
          src={line6}
          alt=""
        />
        <div className="px-3 py-3 font-Inter font-[500] md:text-[22px] flex justify-between text-[#000]">
          <p>Total</p>
          <p className=" font-[500] pr-5">₹70</p>
        </div>
        <div className="flex justify-center">
          <button onClick={() => navigate('/feedbacks')}
            type="submit"
            className="bg-[#62b179]  hover:bg-[#29693b] mb-10 text-white font-semibold  rounded-md py-2 px-4  mt-3 w-5/6"
          >
            PLACE ORDER
          </button>
        </div>

      </div>
      </div>
      

    </>
  );
};

export default OrderSummaryGpay;
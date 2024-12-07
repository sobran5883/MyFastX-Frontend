import wallet from '../../../assets/profile/wallet.png'
import money from '../../../assets/profile/money.png'
import coins from '../../../assets/profile/coins.png'
import views from '../../../assets/profile/view.png'
const Myprofile=()=>{
    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex items-center">
            <div className="myProfile w-11/12 flex h-full flex-col items-baseline mt-20 ml-2 md:ml-8">
                <div className="myprofileContainer w-full bg-white flex justify-center rounded-xl">
                    <div className="myprofileInnerConatainer w-11/12 h-full px-1 md:px-6 py-4 flex flex-col items-center justify-evely">
                        <div className="walletHeading w-full flex align-baseline">
                            <h1>FastX Wallet</h1>
                        </div>
                        <div className="card1 shadow-lg rounded-2xl w-full flex flex-col justify-center items-center mt-4">
                            <div className="totalBalance flex items-center justify-center">
                                <div className="balance flex items-center w-full justify-center">
                                    <div className="walletIcon pr-2">
                                        <img className='h-4 md:h-6' src={wallet} alt="" />
                                    </div>
                                    <div className="amount">
                                        <h1 className='text-black text-sm md:text-base'>Total Wallet Balance: ₹374</h1>
                                    </div>
                                </div>
                            </div>
                            <hr className='w-11/12 my-2'/>
                            <div className="flex w-11/12 md:w-9/12 justify-between my-2">
                                <div className="moneyIcon flex">
                                    <div className="pr-1">
                                        <img src={money} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='text-balck pb-0 text-md'>FastX Money</h1>
                                        <p className='text-gray-400 text-xs'>*No expiry</p>
                                    </div>
                                </div>
                                <div className="text-black">
                                    <h1 className='text-black'>₹330</h1>
                                </div>
                            </div>
                            <div className="coins flex w-11/12 md:w-9/12 justify-between my-2">
                                <div className="coinIcon flex">
                                    <div className="pr-1">
                                        <img src={coins} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='text-balck pb-'>FastX Coins</h1>
                                        <p className='text-gray-400 text-xs'>*Vaild only one year</p>
                                    </div>
                                </div>
                                <div className="">
                                    <h1>₹44</h1>
                                </div>
                            </div>
                            <hr className='w-11/12 my-2'/>
                            <div className="wd-11/12 md:w-10/12">
                               <p className='text-gray-400 text-xs text-center pb-2'>Note: For every 100 rupees you spent 4 coins will be credited</p>
                            </div>
                        </div>
                        <div className="card1 shadow-lg rounded-2xl w-full flex flex-col justify-center items-center mt-4">
                            <div className="totalBalance flex items-center justify-center w-11/12">
                                <div className="balance flex items-center w-full">
                                    <div className="flex align-baseline">
                                        <h1 className='text-black text-sm md:text-base'>Add Money to FastX Wallet</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="money w-11/12 justify-between my-2">
                                <div className="moneyIcon flex flex-col w-full">
                                    <div className="w-full pb-1">
                                        <input className='w-full border shadow-sm border-slate-600 text-sm md:text-base pl-2 rounded-md'  type="number" placeholder='₹ 1,000' />
                                    </div>
                                    <div className="flex items-center justify-between md:justify-start">
                                        <div className=" border-2 border-slate-200 rounded-full md:mr-2">
                                            <h1 className='text-xs md:text-sm'>+₹100</h1>
                                        </div>
                                        <div className=" border-2 border-slate-200 rounded-full md:mr-2">
                                            <h1 className='text-xs md:text-sm'>+₹200</h1>
                                        </div>
                                        <div className=" border-2 border-slate-200 rounded-full md:mr-2">
                                            <h1 className='text-xs md:text-sm'>+₹1000</h1>
                                        </div>
                                        <div className=" border-2 border-slate-200  rounded-full md:mr-2">
                                            <h1 className='text-xs md:text-sm'>+₹2000</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="money w-11/12 justify-between my-2">
                            <div className="moneyIcon flex flex-col w-full">
                                <div className="button h-1/5 flex items-center justify-center w-full">
                                    <button className='bg-green-500 py-1.5 text-center text-xs md:text-base font-bold w-full justify-center  rounded-md flex items-center text-white'>PROCEED TO ADD MONEY </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card1 shadow-lg rounded-2xl w-full flex flex-col justify-center items-center mt-4">
                            <div className="totalBalance flex items-center justify-center w-11/12">
                                <div className="balance flex items-center w-full">
                                    <div className="">
                                        <img src={views} alt="" />
                                    </div>
                                    <div className="flex align-baseline py-4">
                                        <h1 className='text-black pl-4 text-xs md:text-base'>View All Transactions</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card1 shadow-lg rounded-2xl w-full flex flex-col justify-baseline items-center mt-4">
                            <div className="totalBalance flex items-center justify-baseline w-11/12">
                                <div className="balance flex flex-col w-full">
                                    <div className="">
                                        <p className='text-sm'>Set as default payment method</p>
                                    </div>
                                    <div className="flex align-baseline ">
                                        <p className='text-gray-300 text-xs'>No default payments set currently</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Myprofile

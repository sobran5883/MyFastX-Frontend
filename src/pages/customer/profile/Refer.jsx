import link from '../../../assets/profile/link.png'
import copy from '../../../assets/profile/copy.png'
import share from '../../../assets/profile/share.png'
import user from '../../../assets/profile/users.png'
import arrow from '../../../assets/profile/arrow.png'
import order from '../../../assets/profile/order.png'
import reward from '../../../assets/profile/reward.png'
import whatsapp from '../../../assets/profile/whatsapp.png'
const Refer=()=>{
    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex items-center">
            <div className="myProfile w-11/12 md:w-10/12 flex h-full flex-col mt-12 ml-2 md:ml-8">
                <div className="myprofileContainer w-full bg-white h-11/12 pt-6 flex flex-col items-center justify-center rounded-xl">
                    <div className="w-11/12 md:w-9/12 flex flex-col items-center">
                         <h1 className='font-medium text-base md:text-xl'>Earn upto ₹10,000</h1>
                         <h1 className='font-normal text-xs md:text-lg'>by sharing FastX app with your friends</h1>
                    </div>
                    <div className="w-11/12 md:w-7/12 flex items-center justify-evenly py-4">
                        <div className="w-full flex items-center justify-between rounded-lg bg-orange-200 h-8">
                            <div className="flex items-center justify-center pl-0.5 md:pl-4">
                                <img src={link} alt="" />
                            </div>
                            <div className="">
                                <p className='text-xs'>https://g.fastx.com/abcdef</p>
                            </div>
                            <div className="bg-yellow-500 w-10 h-8 flex items-center justify-center rounded-e-lg">
                                <img className='color-yellow h-4' src={copy} alt="" />
                            </div>
                        </div>
                        <div className="pl-1">
                           <img className='h-7' src={share} alt="" />
                        </div>
                    </div>
                    <div className="w-11/12 md:w-7/12 h-12 flex items-center justify-between border border-orange-400 rounded-xl">
                        <div className="flex items-center justify-center pl-2 md:pl-4 h-10">
                            <img className='h-8' src={user} alt="" />
                        </div>
                        <div className="">
                            <p className='text-xs md:text-sm font-medium px-1'>Help others by <span className='text-red-400'>inviting them</span></p>
                        </div>
                        <div className='flex items-center justify-center rounded-e-lg pr-2 md:pr-4'>
                            <img className='color-yellow h-4' src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="myprofileInnerConatainer w-11/12 md:w-7/12 py-4 flex flex-col items-center justify-evely">
                        <div className="flex items-baseline w-full">
                            <h1 className='font-normal text-base'>How does it works?</h1>
                        </div>
                        <div className="card1 border-2 border-t-0 shadow-lg rounded-b-2xl w-full flex flex-col justify-center items-center mt-4 h-full">
                           <div className="flex w-full justify-evenly py-4 pl-4 md:pl-0">
                                <div className="Img w-2/12 md:w-1/12">
                                    <img className='h-7' src={share} alt="" />
                                </div>
                                <div className="Text w-11/12 md:w-10/12">
                                    <h1 className='text-sm'><span className='text-red-500'>Share</span> FastX App</h1>
                                    <h3 className='text-xxs md:text-xs w-3/5'>share the link to as many friends and family</h3>
                                </div>
                           </div>
                           <div className="flex w-full justify-evenly py-4 pl-4 md:pl-0">
                                <div className="Img w-2/12 md:w-1/12">
                                    <img className='h-7' src={order} alt="" />
                                </div>
                                <div className="Text w-11/12 md:w-10/12">
                                    <h3 className='text-sm'>Friend makes <span className='text-red-500'>First Order</span></h3>
                                    <h3 className='text-xxs md:text-xs w-3/5'>They need to make first order and complete verification using your referral link.</h3>
                                </div>
                           </div>
                           <div className="flex w-full justify-evenly py-4 pl-4 md:pl-0">
                                <div className="Img w-2/12 md:w-1/12 mb">
                                    <img className='h-7' src={reward} alt="" />
                                </div>
                                <div className="Text w-11/12 md:w-10/12">
                                    <h1 className='text-sm'>Get <span className='text-red-500'>cash reward</span></h1>
                                    <h3 className='text-xxs md:text-xs w-3/5'>You and your friend both get the cash reward in Wallet</h3>
                                </div>
                           </div>
                        </div>
                     </div>
                     <div className="button w-10/12 md:w-6/12 flex items-center justify-center mb-4">
                        <button className='bg-vivid-orange text-white text-xs md:text-sm w-full h-8 rounded-lg flex items-center justify-center'>
                            <img className='pr-4 md:pr-8' src={whatsapp} alt="" />
                            Share via whatsapp
                        </button>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Refer;

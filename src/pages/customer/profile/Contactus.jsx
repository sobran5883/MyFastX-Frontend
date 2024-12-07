import touch from '../../../assets/profile/touch.png'
const Refer=()=>{
    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex items-center">
            <div className="myProfile w-11/12 md:w-10/12 flex h-full flex-col mt-20 ml-2 md:ml-8">
                <div className="myprofileContainer w-full bg-white pb-4 pt-6 flex-col items-center justify-center rounded-xl">
                    <div className='w-full flex items-center justify-center m-4'>
                        <h1 className='font-bold text-2xl text-gray-500'>Get in Touch</h1>
                    </div>
                    <div className='flex w-11/12 items-center justify-evenly'>
                        <div className="contactForm w-10/12 md:w-5/12">
                            <input className='pb-1' type="text" placeholder="Name"/>
                            <hr className='mb-6 border-black'/>
                            <input className='pb-1' type="text" placeholder="Email"/>
                            <hr className='mb-6 border-black'/>
                            <input className='pb-1' type="text" placeholder="Phone number"/>
                            <hr className='mb-6 border-black'/>
                            <input className='pb-1' type="text" placeholder="Message"/>
                            <hr className='mb-6 border-black'/>
                            <button className='text-white bg-slate-600 rounded-xl w-20 h-7'>SUBMIT</button>
                        </div>
                        <div className="contactImg mb-16 hidden md:block">
                            <img className='h-60' src={touch} alt="" />
                        </div>
                    </div>
                </div>
                <div className="myprofileContainer w-full bg-white h-11/12 mt-4 pt-6 flex flex-col items-center justify-center rounded-xl">
                    <div className='flex w-11/12 justify-baseline pb-4'>
                        <h1 className='font-medium text-base md:text-xl text-gray-500'>Have a tracking number? find your contact</h1>
                    </div>
                    <div className='flex w-11/12 justify-between items-center border border-black rounded-md'>
                        <div className='pl-1 md:pl-4 w-full'>
                            <input className='w-full text-xs md:text-sm h-6' type="text" placeholder='Enter your tracking number(s)'/>
                        </div>
                        <div className='bg-green-400 rounded-r-md w-16 md:w-36 h-7 flex items-center justify-center'>
                            <button className='pr-2 md:pr-4 text-xs md:text-sm'>Find Contact</button>
                        </div>
                    </div>
                    <div className='w-11/12 my-4'>
                        <h1 className='text-sm'>Your tracking number lets us find the right division contact to answer your questions.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Refer;

import commas from '../../../../../assets/landing_page/commaIcon.png'
import star from '../../../../../assets/landing_page/star.png'
const Testimonial=({username, userImg})=>{
    return(
        <div className='w-full'>
        <div className='testimonial w-full  bg-gradient-to-tr from-white via-[#a4ddb400] to-white  rounded-lg   flex flex-col items-center justify-center py-8'>
            <div className=' w-10/12 flex items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img className='h-10 md:h-16' src={userImg} alt="" />
                    </div>
                    <div className='mx-2'>
                        <h1 className='text-black font-rubik text-sm md:text-lg'>{username}</h1>
                        <h1 className='text-black font-krub text-[8px] font-semibold'>Logistics Company</h1>
                    </div>
                </div>
                <div>
                    <img className='h-8 md:h-12' src={commas} alt="" />
                </div>
            </div>
            <div className='w-10/12 min-h-[18rem]'>
                <p className=' text-black font-lato text-xs md:text-base font-medium my-4'>Absolutely impressed with the FastX service provided! From the moment I entrusted my parcels to them, the entire process was seamless. They handled my packages with care and ensured timely delivery to the exact location I specified. Their attention to detail and commitment to customer satisfaction exceeded my expectations. I highly recommend their service for anyone seeking reliability, efficiency, and professionalism in parcel delivery.</p>
            </div>
            <div className='w-10/12'>
                <div className='flex'>
                    <img className=' h-3 md:h-5 mr-1' src={star} alt="" />
                    <img className=' h-3 md:h-5 mr-1' src={star} alt="" />
                    <img className=' h-3 md:h-5 mr-1' src={star} alt="" />
                    <img className=' h-3 md:h-5 mr-1' src={star} alt="" />
                    <img className=' h-3 md:h-5 mr-1' src={star} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Testimonial;
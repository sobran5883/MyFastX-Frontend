import commas from '../../../../assets/landing_page1/image 732.png'
const Testimonial=({username, userImg, company})=>{
    return(
        <div className='w-full px-2'>
        <div className='testimonial w-full   bg-[#F5F5F5]  rounded-lg   flex flex-col items-center justify-center p-8'>
            <div className=' w-full flex items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img className='h-12 md:h-20' src={userImg} alt="" />
                    </div>
                    <div className='mx-4'>
                        <h1 className='text-black font-inter font-semibold text-sm md:text-lg'>{username}</h1>
                        <h1 className='text-black  text-sm '>{company}</h1>
                    </div>
                </div>
                <div className=''>
                    <img className='h-6 md:h-8' src={commas} alt='' />
                </div>
            </div>
            <div className='w-full'>
                <p className=' text-black font-lato text-xs md:text-base font-medium my-4'>Fast X has revolutionized our supply chain! Their commitment to speed is unmatched, and we can always rely on them to deliver our products on time. Exceptional service and a true partner in our success.</p>
            </div>
        </div>
        </div>
    )
}
export default Testimonial;
import star from '../../../../assets/landing_page2/star.png'
const Testimonial=({userImg,username,profession,comment,bgColor,rating})=>{
    const stars = Array(rating).fill(0);
    return(
        <div className='w-full px-1 md:px-2'>
            <div className={`testimonial h-[20rem] md:h-[25rem] md:py-10 px-6 md:px-12 rounded-lg flex flex-col items-center justify-center ${bgColor}`}>
                <div className=' w-full flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img className='w-16 h-16 md:w-20 md:h-20 rounded-full object-cover' src={userImg} alt="" />
                        </div>
                        <div className='mx-4'>
                            <h1 className='text-black font-semibold text-lg md:text-xl'>{username}</h1>
                            <h1>{profession}</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-4 md:mt-6'>
                    <p className='text-black font-lato text-sm md:text-base font-medium my-4'>{comment}</p>
                    <div className='flex items-center gap-[2px]'>
                        {stars.map((_, index) => (
                            <img key={index} className='h-5' src={star} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonial;
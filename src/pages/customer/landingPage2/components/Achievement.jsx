import arrow from '../../../../assets/landing_page2/Vector (1).png'
const Testimonial=({achievement,para,rating})=>{
    return(
        <div className="bg-[#F8F8F8] rounded-lg p-4 mx-2 flex flex-col items-center justify-between">
          <div>
            <div className='flex items-center justify-between'>
              <h1 className=' text-2xl font-semibold'>{achievement}</h1>
              <img src={arrow} alt="" />
            </div>
            <div className='w-11/12'>
              <p className='text-[#1D1B1B] text-base my-2'>{para}</p>
            </div>
          </div>
          <div className='w-full mt-6 flex items-center justify-end'>
            <h1 className='text-5xl md:text-6xl font-semibold'>{rating}</h1>
          </div>
      </div>
    )
}
export default Testimonial;
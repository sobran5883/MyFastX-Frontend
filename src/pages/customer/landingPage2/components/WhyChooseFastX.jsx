
const WhyChooseFastX=({chooseIcon:Icon, chooseHeading, chooseText})=>{
    return(
        <div className="md:mx-2">
            <div className=' md:w-full flex flex-col h-[18rem] text-deep-green hover:text-white items-center hover:bg-deep-green transition duration-500 ease-in-out bg-pale-mint p-6'>
                <Icon className='md:h-16 md:w-16 h-12 w-12 mb-4'/>
                <h1 className='text-lg text-center  md:text-xl font-lato font-semibold text-black mb-2'>{chooseHeading}</h1>
                <p className='text-md text-center font-lato'>{chooseText}</p>
            </div>
        </div>
    )
}
export default WhyChooseFastX;
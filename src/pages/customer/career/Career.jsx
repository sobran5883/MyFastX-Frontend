import hiringImg from '../../../assets/career/WhatsApp Image 2024-06-05 at 13.46.05_7ac7db68.jpg'

const Help=()=>{

    return(
        <div className="w-screen bg-white flex flex-col justify-center items-center">
            <div className="flex flex-col-reverse items-center justify-center md:flex-row w-10/12 mt-8 md:mt-28 md:mb-16">
                <div className="md:w-8/12">
                    <div>
                        <h1 className="font-semibold text-gray-700 font-inter max-w-[700px] text-2xl md:text-6xl">We are Hiring</h1>
                        <p className="mt-5 md:text-lg font-medium">We are hiring HR Trainne, Partner Onboarding Duration 04 Months</p>
                    </div>
                    <div className="flex items-center mt-5 mb-12 md:text-lg">
                        <h1>Contact Us:</h1>    
                        <a href='mailto:care@myfastx.com' className='text-black font-roboto font-light ml-2'>Hr@myfastx.com</a>
                    </div>
                </div>
                <div className="md:w-7/12 flex flex-col justify-evenly">
                    <div>
                        <img src={hiringImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Help;

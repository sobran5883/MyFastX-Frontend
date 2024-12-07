import culture from '../../../assets/culture/culture.png'
import culture1 from '../../../assets/culture/culture1.png'
import culture2 from '../../../assets/culture/culture2.png'
import culture3 from '../../../assets/culture/culture3.png'
import culture4 from '../../../assets/culture/culture4.png'
import emp1 from '../../../assets/culture/emp1.png'
// import emp2 from '../../../assets/culture/emp2.png'
import star from '../../../assets/culture/star.png'
const PrivacyPolicy=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
                <div className='w-full'>
                    <img className='w-full' src={culture} alt="" />
                </div>
                <div className='absolute'>
                    <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>We focus on integrity</h1>
                </div>
            </div>
            <div className="w-11/12 flex items-center justify-center flex-col">
                <div className="my-6 md:my-8 w-full ">
                    <div className='w-fit relative'>
                    <h1 className="text-xl md:text-3xl font-medium text-[#000000cc] font-roboto">Our Culture</h1>
                    <div className='absolute w-full h-[2px] md:h-[3px] bg-[#888787d8] -z-10 bottom-1'></div>
                    </div>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[18px] md:text-[23px] font-bold text-black my-6">Our Values</h1>
                    <p className="font-inter text-[13px] md:text-[18px] text-black font-medium">At Makeup hub, we uphold the values of integrity, collaboration, and continuous improvement in everything we do.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Integrity:</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">At Makeup hub , we believe in conducting ourselves with the utmost integrity. We are committed to maintaining high ethical standards in our interactions with customers, suppliers, and each other. We value honesty, transparency, and trustworthiness in all aspects of our business.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Collaboration:</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">Collaboration is at the heart of our organization. We foster a collaborative work environment where everyone's ideas and contributions are valued. We encourage teamwork and open communication, recognizing that diverse perspectives lead to better outcomes. We believe that by working together, we can achieve greater success.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Continuous Improvement:</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">We are dedicated to continuous improvement in everything we do. We embrace a growth mindset and constantly seek ways to enhance our processes, products, and services. We encourage our employees to innovate, experiment, and learn from both successes and failures. We believe that continuous improvement is essential to staying competitive and providing the best possible experience for our customers.</p>
                </div>


                <div className="w-full flex">
                    <div className='mr-2'>
                        <img className='mb-4 ' src={culture1} alt="" />
                        <img className='mt-4 ' src={culture2} alt="" />
                    </div>
                    <div className='ml-2'>
                        <img className='mb-4' src={culture3} alt="" />
                        <img className='mt-4' src={culture4} alt="" />
                    </div>
                </div>


                <div className="w-full mt-20">
                    <h1 className="font-inter text-[18px] md:text-[23px] font-bold text-black">Employee Testimonials</h1>
                </div>
                <div className='flex my-12 w-full justify-center md:justify-start'>
                    <div className='bg-[#B9BFBC80] w-[90%] md:w-[33%] p-8 rounded-md flex flex-col items-center justify-center'>
                        <div className='mt-6 mb-4'><img className=' h-32' src={emp1} alt="" /></div>
                        <div className='w-10/12 my-8'>
                            <p className='text-center'>Working at Makeup hub has been an amazing  experience. The company   truly values teamwork, innovation, and growth.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1> Senior Marketing Manager</h1>
                            <h1 className='my-1 font-semibold'>Mani sharma</h1>
                            <div className='flex'>
                                <img className='h-5' src={star} alt="" />
                                <img className='h-5' src={star} alt="" />
                                <img className='h-5' src={star} alt="" />
                                <img className='h-5' src={star} alt="" />
                                <img className='h-5' src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Work-Life Balance</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">We believe in maintaining a healthy work-life balance and offer flexible schedules and wellness programs to ensure our employees thrive both personally and professionally.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Diversity and Inclusion</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">We foster an inclusive environment where diversity is celebrated, and all individuals are valued for their unique perspectives and contributions.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Career Development</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">At Makeup hub we invest in our employees' growth and offer training programs, mentorship opportunities, and clear career paths to help them achieve their professional goals.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[16px] md:text-[20px] font-semibold text-black my-5">Social Responsibility</h1>
                    <p className="font-inter text-[13px] md:text-[16px] text-black font-medium">We are dedicated to giving back to our community and regularly participate in volunteering events and support local charities.</p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
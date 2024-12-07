import aboutUs from '../../../assets/about/aboutus.png'
import ceo from '../../../assets/about/ceo.png'
import coo from '../../../assets/about/coo.jpg'
import cto from '../../../assets/about/cto.jpg'
export default function Home(){
    return(
        <div className='w-full flex flex-col items-center'>
            <div className=' w-full flex flex-col items-center justify-center'>
                <div className="relative w-full flex items-center justify-center">
                    <div className='w-full h-[150px] md:h-[300px] bg-black'>
                    </div>
                    <div className='absolute'>
                        <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>About Us</h1>
                    </div>
                </div>
                <div className='pt-10 w-11/12 flex flex-col-reverse md:flex-row'>
                    <div className='px-4 md:px-8 md:w-8/12'>
                        <h1 className='text-2xl md:text-4xl font-normal pt-4'>Our Story</h1>
                        <p className='font-medium font-inter text-sm md:text-base py-2'>Welcome to MyFastX, your reliable courier service for swift and secure package deliveries. At MyFastX, we are committed to providing you with a seamless and efficient delivery experience. </p>
                        <p className='font-medium font-inter text-sm md:text-base py-2'>Our mission is to connect businesses and individuals with a network of dedicated delivery agents who are ready to pick up and drop off packages from one location to another. With MyFastX, you can trust that your packages will be handled with care and delivered promptly, ensuring peace of mind for both senders and recipients.</p>
                    </div>
                    <div className='w-11/12 md:w-2/5 flex items-center justify-center p-4'>
                        <img className='h-64' src={aboutUs} alt="" />
                    </div>
                </div>
                <div className='w-11/12'>
                    <p className='font-medium font-inter text-sm md:text-base py-2 px-4 md:px-8' >What sets us apart is our focus on customer satisfaction. We strive to exceed your expectations by offering competitive pricing, transparent tracking systems, and excellent customer support throughout the entire delivery process. We understand the importance of your packages and aim to deliver them safely and on time, every time.</p>
                    <p className='font-medium font-inter text-sm md:text-base py-2 px-4 md:px-8' >Our team of experienced delivery agents is carefully selected and trained to handle packages of all sizes and types. From small documents to bulky parcels, we have the resources and expertise to handle various delivery needs. You can rely on our drivers professionalism, reliability, and dedication to ensuring the successful delivery of your items.</p>
                    <p className='font-medium font-inter text-sm md:text-base py-2 px-4 md:px-8' >At MyFastX, we value efficiency and convenience. Our user-friendly mobile app allows you to effortlessly schedule pickups, track your packages in real-time, and communicate with your assigned delivery agent. We believe in harnessing technology to simplify the delivery process and provide you with a hassle-free experience.</p>
                    <p className='font-medium font-inter text-sm md:text-base py-2 px-4 md:px-8' >Whether you are a business owner, an online retailer, or an individual looking to send a package, MyFastX is here to cater to your delivery needs. We are dedicated to building long-lasting relationships with our clients, built on trust, reliability, and exceptional service.</p>
                    <p className='font-medium font-inter text-sm md:text-base py-2 px-4 md:px-8' >Thank you for choosing MyFastX as your preferred courier service. We look forward to serving you and delivering your packages swiftly and securely.</p>
                </div>
            </div>
            <div className='w-10/12 mt-12'>
                <div className='my-4'>
                    <div>
                      <div className='relative my-2 w-fit'>
                         <div>
                              <h1 className='font-rubik text-xl md:text-2xl font-semibold'>Meet Our Team</h1>
                         </div>
                         <div className='absolute w-[80%] h-[3px] bg-deep-green -bottom-1 left-0'></div>
                      </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-8'>
                    <div className='flex flex-col items-center justify-center'>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7163971022646337536?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7163971022646337536%29 ">
                            <img className='h-40 my-4 rounded-full border-2 border-deep-green' src={ceo} alt="" />
                        </a>
                        <h1 className='text-deep-green text-lg md:text-xl font-semibold'>Rajesh Kumar</h1>
                        <h1 className='font-bold text-lg'>[CEO]</h1>
                        <h1 className='text-lg font-bold my-2'>6 Yrs of experience</h1>
                        <p className='text-center md:w-10/12'>Our CEO is not just a leader but a visionary who brings a distinctive perspective to the development of our apps. With a wealth of apps. With a wealth of experience and a knack for innovation, they are the driving force behind our app's success.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <a href="https://www.linkedin.com/in/deepak-sehgal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <img className='h-40 my-4 rounded-full border-2 border-deep-green' src={coo} alt="" />
                        </a>
                        <h1 className='text-deep-green text-lg md:text-xl font-semibold'>Deepak Sehgal</h1>
                        <h1 className='font-bold text-lg'>[COO]</h1>
                        <h1 className='text-lg font-bold my-2'>30 Yrs of experience</h1>
                        <p className='text-center md:w-10/12'>Brings a unique blend of operational expertise and technology acumen, having served as a Chief Operating Officer (COO). He posses a deep understanding of how to align technology with business goals and drive innovation.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='h-40 my-4 rounded-full border-2 border-deep-green' src={cto} alt="" />
                        <h1 className='text-deep-green text-lg md:text-xl font-semibold'>Kunal Das</h1>
                        <h1 className='font-bold text-lg'>[CTO]</h1>
                        <h1 className='text-lg font-bold my-2'>18 Yrs of experience</h1>
                        <p className='text-center md:w-10/12'>With years of technical leadership experience. He posses proven ability to success in leading technical teams and delivering innovative solutions.</p>
                    </div>
                </div>
            </div>
            <div className=' w-11/12 flex flex-col lg:flex-row items-center justify-center my-20'>
                <div className='w-full lg:w-6/12'>
                    <h1 className='tracking-widest text-xl md:text-3xl'>Get In <span className='font-bold'>Touch</span></h1>
                    <h1 className='text-2xl md:text-4xl font-extralight text-deep-green my-2'>Head Office</h1>
                    <h1 className='font-semibold md:text-lg'>MyFastX</h1>
                    <p className='w-11/12 md:text-xl font-light text-gray-700 '>Nayagon, Nimi Vihar, Sector 89 Noida, Uttarpradesh 201305</p>
                </div>
                <div className='w-full lg:w-6/12'>
                <div className='my-4 flex items-center justify-center'>
                <iframe
                    className='border-0 lg:rounded-full lg:w-full h-[300px] lg:h-[600px]'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207487.20128677506!2d77.15362079568368!3d28.643536004167505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5829a979765%3A0x1ff829b17ace5fac!2sGautam%20Buddha%20Nagar%2C%20Block%20D%2C%20Sector%2052%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1706100336304!5m2!1sen!2sin"
                    width="100%" 
                    frameborder="0"
                    allowfullscreen aria-hidden="false"
                    tabIndex="0"
                    style={{border:'0'}}
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    > 
                </iframe>
                </div>
                </div>
            </div>
        </div>
   )
}



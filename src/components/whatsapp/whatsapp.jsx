import whatsapp from '../../assets/landing_page2/whatsapp-icon.png'
const Whatsapp=()=>{
    return(
        <div className=' fixed bottom-10 left-5 z-[51] hidden md:block'>
            <a href="https://wa.me/+918961310988" target='_blank'>
                <img className='h-9 md:h-10 bg-[#25CF43] p-2 rounded-lg' src={whatsapp} alt="" />
            </a>
        </div>
    )
}
export default Whatsapp;

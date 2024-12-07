import {motion} from 'framer-motion';
import {useState} from 'react';

function services(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <motion.div
                transition={{layout:{duration:1, type: "spring"}}}
                Layout
                onClick={()=>setIsOpen(!isOpen)} className='card bg-gradient-to-br from-deep-green to-pale-mint cursor-pointer'>
                <motion.h2 Layout="position" className='text-lg font-semibold text-red-500'>Fraud Awareness</motion.h2>
                {isOpen && (
                <motion.div>
                    <ul className=' list-disc px-4'>
                        <li>Please do not transfer money to payment links that are not shared from MyFastX's official accounts.</li>
                        <li>MyFastX does not require OTP or credentials for address confirmation for your delivery.</li>
                        <li>Our Customer Support team is reachable only from our website or app. Login with your phone number and raise your support request with us.</li>
                    </ul>
                </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default services;



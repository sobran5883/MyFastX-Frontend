import { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
// import { Plus, Minus} from 'lucide-react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Faq=()=>{
    const [activeQuestion, setActiveQuestion] = useState(null);

    const questions = [
        {
            id: 1,
            question: "How quickly will you match me with a delivery driver?",
            answer: "We can match you with a nearby delivery driver in just a few seconds! ",
        },
        {
            id: 2,
            question: "How much does it cost?",
            answer: "The MyFastX app instantly calculates the cost of your delivery before you confirm the order, giving you a simple and transparent price every time. The distance between the pick up and drop off point as well as the type of vehicle you select all affect the cost of each delivery. Input your order details in the app to find out the cost now.",
        },
        {
            id: 3,
            question: "Are toll charges and parking charges included in the fare?",
            answer: "The charges shown on the app are only the transportation charges. All other charges i.e. Toll, Parking, Road Tax and any other incidental charges are above the fare shown.",
        },
        {
            id: 4,
            question: "Can I book a service in advance?",
            answer: "Yes, you can book service in advance and the vehicle will be allotted at the requested time based on availability.",
        },
        {
            id: 5,
            question: "What happens if a trip is canceled? What are the cancellation charges and policy?",
            answer: "There are no charges or penalties for cancellation.",
        },
        {
            id: 6,
            question: "How would I know my fare charges & bill amount?",
            answer: "Once you enter the Pickup and Drop details, you will be notified of the approximate distance, and accordingly your bill amount will be calculated. With our fare calculator, we instantaneously give you the best rate online.",
        },
        {
            id: 7,
            question: "Do you provide POD for the shipment?",
            answer: "We regret to inform you that we do not offer PODs.",
        },
        {
            id: 8,
            question: "Can I place a booking with multi-point pickup and drop?",
            answer: "Yes, you can place a booking for multiple stops. However, extra costs for the extra point of delivery or pickup will be calculated accordingly.",
        },
        {
            id: 9,
            question: "What are the restrictions on the types of products I can ship?",
            answer: "‘Prohibited Items’ means any goods or materials, the carriage of which is prohibited by Applicable Law. Example: Alcohol, Pets.",
        },
        {
            id: 10,
            question: "Does MyFastX provide labour along with pickup and drop locations?",
            answer: "MyFastX does not provide labor services. However, you may negotiate with the driver partners if they are willing to do the extra labor work.",
        },
        {
            id: 11,
            question: "What is the maximum distance that MyFastX provides services for?",
            answer: "MyFastX provides delivery services within the city limits only. As of now, outstation trips are not available.",
        },
        {
            id: 12,
            question: "Who is responsible for the generation and maintenance of E-way bills during transit?",
            answer: "It is the responsibility of the customer to generate the E-way bill and provide a copy of the same to the driver partner.",
        },
        {
            id: 13,
            question: "How do I contact the MyFastX support team?",
            answer: "You need to click on the Help Center > click on General Support.",
        },
        {
            id: 14,
            question: "Can I place a booking with multi-point pickup and drop?",
            answer: "Yes, you can place a booking for multiple stops. However, extra costs for the extra point of delivery or pickup will be calculated accordingly.",
        },
        {
            id: 15,
            question: "Can I track my vehicle status?",
            answer: "Yes. You can track the status of your vehicle via our application in real time.",
        },
    ];


    return(
        <div className="w-screen bg-white flex flex-col justify-center items-center">
            <div className="relative w-full flex items-center justify-center">
                <div className='w-full h-[150px] md:h-[300px] bg-black'>
                </div>
                <div className='absolute'>
                    <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>Frequency Asked Questions</h1>
                </div>
            </div>
            <div className="md:w-10/12 m-auto max-w-[1400px]  p-8 ">
                {questions.map((q)=>(
                    <div key={q.id}
                        className="mb-4 last:mb-0">
                            <button className="w-full text-left text-sm text-gray-600  focus:outline-none p-2 bg-pale-mint rounded-lg shadow-md flex justify-between items-center"
                            onClick={()=>setActiveQuestion(activeQuestion===q.id ? null : q.id)}>
                                {q.question}
                                {activeQuestion===q.id?<IoIosArrowUp className="min-w-[36px]"/>:<IoIosArrowDown  className="min-w-[36px]"/>}
                            </button>
                            <AnimatePresence>
                                {activeQuestion===q.id && (
                                    <motion.div
                                    initial={{opacity:0,
                                    height:0}}
                                    animate={{opacity:1,
                                    height:'auto'}}
                                    className="mt-2 ml-4 text-sm"
                                    >
                                        <p>{q.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                    </div>  
                ))}
            </div>
        </div>
    )
}
export default Faq;

import arrowDown from '../../../assets/profile/arrowDown.png'
import notes from '../../../assets/profile/notes.png'
import agent from '../../../assets/profile/agent.png'
import arrow from '../../../assets/profile/arrow.png'
const Help=()=>{
    return(
        <div className="bg-pale-mint w-full h-fit flex items-center">
            <div className="w-11/12 flex h-full flex-col items-baseline mt-12 ml-2 md:ml-8">
                <div className="w-full bg-white flex flex-col md:flex-row items-center md:items-end justify-evenly rounded-xl">
                    <div className='w-11/12  md:w-5/12'>
                        <div>
                            <h1 className='font-normal text-base md:text-xl py-4'>Feedback & Suggestions - FastX</h1>
                        </div>
                        <div>
                            <p className='text text-xs md:text-sm text-gray-400 pb-2'>Whether it is about our service or our app or you just have some ideas, we would love to hear your feedback and suggestions</p>
                        </div>
                        <div className='flex border items-center justify-between px-2 h-8'>
                            <input className='text-xs md:text-sm' type="text" placeholder="Select a category"/>
                            <i><img className='w-4 h-4' src={arrowDown} alt="" /></i>
                        </div>
                        <div className='border rounded-2xl p-2 my-4'>
                            <textarea className='w-full focus:outline-none text-xs md:text-base' placeholder="Share your feedback here" cols="30" rows="10"></textarea>
                        </div>
                        <div >
                            <button className='h-6 md:h-10 w-full bg-green-700 rounded-lg mb-2 text-white font-semibold text-xs'>SUBMIT FEEDBACK</button>
                        </div>
                    </div>
                    <div className='w-11/12 md:w-5/12'>
                        <div>
                            <img src={notes} alt="" />
                        </div>
                        <div>
                            <h1 className='text-sm md:text-base'>We know the World is full of choices. 
                                Thank you for choosing us!</h1>
                        </div>
                        <div className='w-full flex items-center justify-end'>
                            <h1 className='text-xs md:text-sm'>-Team FastX</h1>
                        </div>
                        <div className='flex border items-center justify-between h-8 my-4'>
                            <img className='h-6' src={agent} alt="" />
                            <input className='text-xs md:text-sm' type="text" placeholder='Chat With Agent'/>
                            <img className='h-4' src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help;

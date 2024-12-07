import { useRef} from 'react'
import {X} from 'lucide-react'

function Modal({onClose}){
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target){
           onClose();
        }
    }

    return(
        <div ref={modalRef} onClick={closeModal} className='fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-10/12 md:w-6/12 mt-10 flex flex-col items-center text-white'>
                <div className='flex w-full justify-end pb-2'>
                <button onClick={onClose} className='place-self-end'><X size={30}/></button>
                </div>
                <div className='bg-[#739072] rounded-xl w-full flex-col flex p-12 align-center justify-center gap-5 items-center mx-4'>
                    <h1 className='text-center text-black font-semibold'>Welcome to MyFastX</h1>
                    <p className='text-center text-black font-semibold'>Our services will start soon</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;
import { useNavigate } from "react-router-dom"

const Tracking = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='relative' >
        <img className='relative w-full' src="src/assets/Tracking/image 2.png" alt="" />
        <button onClick={()=>navigate(-1)}>
        <img className='absolute top-5 left-8' src="src/assets/Tracking/Group 16.png" alt="" />
        </button>
        <div className='absolute top-40 left-96'>
            <img className='ml-12 mt-1' src="src/assets/Tracking/Ellipse 2.png" alt="" />
            <img className=' absolute top-0 left-10 ' src="src/assets/Tracking/Group 14.png" alt="" />
        </div>
        <div className='absolute top-44 left-96  h-full'>
        <img className=' ml-24 mt-0  h-4/6' src="src/assets/Tracking/Vector 1.png" alt="" />
        
        <div className='h-16 w-16 absolute bottom-1/3  left-60 rounded-full bg-white'>
          <img className='ml-2 ' src="src/assets/Tracking/Rectangle 27.png" alt="" />
        </div>
       
        
        </div>
        <div className=' absolute right-4 bottom-4'>
              <img src="src/assets/Tracking/Group 19.png" alt="" />
              <img className='absolute bottom-5 right-6' src="src/assets/Tracking/Group 81.png" alt="" />
        </div>
        <div className='h-10 w-10 absolute top-5  right-10 rounded-full bg-white'>
          <img className='ml-1 mt-1 ' src="src/assets/Tracking/image 24.png" alt="" />
        </div>
        
    </div>
    </>
  )
}

export default Tracking
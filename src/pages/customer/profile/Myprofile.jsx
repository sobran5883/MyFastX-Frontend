import {useSelector} from 'react-redux'

const Myprofile=()=>{
    const {currentUser}= useSelector((state)=>state.user);
    return(
        <div className="myProfileContainer bg-pale-mint w-full h-fit flex items-center">
            <div className="myProfile w-11/12 md:w-10/12 flex flex-col items-baseline justify-center mt-12 ml-2 md:ml-8">
                <div  className="myprofileContainer w-full bg-white rounded-xl">
                    <div className="myprofileInnerConatainer h-full w-full px-2 md:px-6 py-4 flex flex-col items-baseline justify-evely">
                        <div className="personalInfo my-2 md:w-full"> 
                            <div className="personalInfoHeading">
                                <p className='text-sm md:text-base'>Name</p>
                            </div>
                            <div className="personalInfoDetails h-3/5 w-full md:w-11/12 flex flex-col md:flex-row md:items-center">
                                <input type="text" placeholder='username' id='username' defaultValue={currentUser.username} className="border border-gray-600 h-7 md:h-8 rounded text-sm py-1.5 px-2  focus:outline-none my-1 w-full md:w-56"/>
                                {/* <input type="text" placeholder='Turner' className="border border-gray-600 h-7 md:h-8 rounded text-sm py-1.5 px-2  focus:outline-none my-1 w-full md:w-56 md:ml-2"/> */}
                            </div>
                        </div>
                        <div className="gender my-2">
                            <div className="genderHeading">
                                <p className='text-sm md:text-base'>Gender</p>
                            </div>
                            <div className="genderDetails h-3/5 flex items-center justify-between my-1">
                                  <label className="flex items-center">
                                    <input type="radio" name="gender" value="male" className="form-radio "/>
                                    <span className="ml-1 text-xs md:text-sm">Male</span>
                                  </label>
                                  
                                  <label className="flex items-center ml-4 md:ml-6">
                                    <input type="radio" name="gender" value="female" className="form-radio"/>
                                    <span className="ml-1 text-xs md:text-sm">Female</span>
                                  </label>
                                  
                                  <label className="flex items-center ml-4 md:ml-6">
                                    <input type="radio" name="gender" value="other" className="form-radio"/>
                                    <span className="ml-1 text-xs md:text-sm">Other</span>
                                  </label>
                            </div>
                        </div>
                        <div className="email my-2">
                            <p className='text-sm md:text-base'>Email Address</p>
                            <div className="emailDetails h-3/5 flex items-center my-1 ">
                                <input type="email" placeholder='email' id='email' defaultValue={currentUser.email} className="border border-gray-600 h-7 md:h-8 rounded text-sm py-1.5 px-2  focus:outline-none my-1 w-full md:w-56"/>
                            </div>
                        </div>
                        <div className="mobile my-2">
                            <p className='text-sm md:text-base'>Mobile Number</p>
                            <div className="mobileDetails h-3/5 flex items-center my-1 ">
                                <input type="tel" placeholder='+91-' id='mobile' defaultValue={currentUser.mobile} className="border border-gray-600 h-7 md:h-8 rounded text-sm py-1.5 px-2  focus:outline-none my-1 w-full md:w-56"/>
                            </div>
                        </div>
                        <div className="dob my-2">
                            <p className='text-sm md:text-base'>Date of Birth</p>
                            <div className="dobDetails h-3/5 flex items-center my-1 ">
                                <input type="text" placeholder='dd-mm-yyyy' className="border border-gray-600 h-7 md:h-8 rounded text-sm py-1.5 px-2  focus:outline-none my-1 w-full md:w-56"/>
                            </div>
                        </div>
                        <div className="button my-2 w-full flex items-center">
                            <button className='bg-deep-green text-xs md:text-sm font-semibold h-7 w-48 md:w-56 rounded-md flex items-center justify-center text-white'>SAVE CHANGES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myprofile

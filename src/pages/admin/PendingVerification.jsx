import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import search from '../../assets/admin/search3.png';
import hamburger from '../../assets/admin/hamburger.png';
import squareBurger from '../../assets/admin/squareBurger.png';
import threedots from '../../assets/admin/threedots3.png';
import msjIcon from '../../assets/admin/msjIcon.png';
import phoneIcon from '../../assets/admin/phoneIcon.png';
import douleArrow1 from '../../assets/admin/doubleArrow1.png';
import douleArrow2 from '../../assets/admin/doubleArrow2.png';
import backArrow from '../../assets/admin/backArrow.png';
import driverImg from '../../assets/admin/driverImg.png';

const DriverList = () => {
    const navigate = useNavigate();
    const [allDrivers, setAllDrivers] = useState([]);
    const [filteredDrivers, setFilteredDrivers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 8;

    useEffect(() => {
        fetch('https://emonoid.com/api/v1/driver/getPendingDrivers')
            .then(response => response.json())
            .then(data => {
                const filteredDrivers = data.drivers.filter(driver => driver.aadharFront && driver.aadharBack && driver.licenseFront && driver.licenseBack);
                setAllDrivers(filteredDrivers);
                setFilteredDrivers(filteredDrivers);
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    useEffect(() => {
        const filtered = allDrivers.filter(driver =>
            driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            driver.typeOfVehicle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            driver.phone.includes(searchQuery) ||
            driver.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredDrivers(filtered);
        setCurrentPage(1);
    }, [searchQuery, allDrivers]);

    const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);
    const currentPageDrivers = filteredDrivers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNavigate = (driver) => {
        navigate("/fastx/admin/pending_verification_details", { state: { driver } });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='w-full flex flex-col'>
            <div className='w-11/12 pt-12 flex flex-col mb-6'>
                <div className='flex items-center justify-between'>
                    <div className='w-2/6 flex items-center'>
                        <button onClick={() => navigate(-1)}><img className='px-3' src={backArrow} alt="" /></button>
                        <h1 className='text-xl font-semibold'>Pending Verifications</h1>
                    </div>
                    <div className='w-2/6 rounded-md flex items-center shadow-sm h-9'>
                        <img className='h-4 px-4' src={search} alt="" />
                        <input
                            className='focus:outline-none'
                            type="text"
                            placeholder='search here'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className='w-1/12 flex items-center justify-between'>
                        <div className='h-9 w-9 rounded-md shadow-sm flex items-center justify-center'>
                            <img className='h-4' src={hamburger} alt="" />
                        </div>
                        <div className='h-9 w-9 rounded-md shadow-sm flex items-center justify-center'>
                            <img className='h-4' src={squareBurger} alt="" />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ml-1 w-full'>
                    {currentPageDrivers.map((driver, index) => (
                        <div onClick={() => handleNavigate(driver)} key={index} className='cursor-pointer'>
                            <div className='relative flex flex-col items-center justify-center w-52 lg:w-48 xl:w-56 shadow-sm rounded-md py-4 my-4 mb-4'>
                                <div className='top-5'>
                                    <img className='h-14 md:h-16' src={driver.avatar || driverImg} alt="" />
                                </div>
                                <div className='absolute z-30 top-4 left-44'>
                                    <img className='h-4' src={threedots} alt="" />
                                </div>
                                <div className='pt-2 flex flex-col items-center'>
                                    <h1 className='font-semibold mt-4 text-sm md:text-base'>{driver.name}</h1>
                                    <h1 className='font-semibold text-red-600 text-xxs'>Verification Pending</h1>
                                    <h1 className='text-xs md:text-sm text-gray-400 mt-2'>Drives</h1>
                                    <h1 className='text-xs md:text-sm font-medium text-blue-900 mb-3'>{driver.typeOfVehicle}</h1>
                                </div>
                                <div>
                                    <div className='flex items-center py-1'>
                                        <img className='h-5 md:h-6 mx-2' src={phoneIcon} alt="" />
                                        <h1 className='text-xs font-medium'>{driver.phone}</h1>
                                    </div>
                                    <div className='flex items-center py-2'>
                                        <img className='h-5 md:h-6 mx-2' src={msjIcon} alt="" />
                                        <h1 className='text-xs font-medium'>{driver.email}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className='w-full flex justify-between my-4'>
                    <div className='flex items-center'>
                        <h1>Showing</h1>
                        <h1 className='text-sm font-semibold px-1'>{((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredDrivers.length)}</h1>
                        <h1>from</h1>
                        <h1 className='text-sm font-semibold px-1'>{filteredDrivers.length}</h1>
                        <h1>drivers</h1>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={() => handlePageChange(Math.max(1, currentPage - 1))} className='flex items-center border rounded-md p-1 mx-1'>
                            <img className='h-4' src={douleArrow1} alt="Previous" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-3 py-1 mx-1 ${currentPage === i + 1 ? 'bg-green-600 text-white' : 'border'}`}>
                                {i + 1}
                            </button>
                        ))}
                        <button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} className='flex items-center border rounded-md p-1 mx-1'>
                            <img className='h-4' src={douleArrow2} alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverList;

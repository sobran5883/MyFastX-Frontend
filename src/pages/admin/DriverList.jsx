import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import search from '../../assets/admin/search3.png';
import hamburger from '../../assets/admin/hamburger.png';
import squareBurger from '../../assets/admin/squareBurger.png';
import driverImg from '../../assets/admin/driverImg.png';
import companyLogo from '../../assets/admin/companyLogo.png';
import threedots from '../../assets/admin/threedots3.png';
import msjIcon from '../../assets/admin/msjIcon.png';
import phoneIcon from '../../assets/admin/phoneIcon.png';
import douleArrow1 from '../../assets/admin/doubleArrow1.png';
import douleArrow2 from '../../assets/admin/doubleArrow2.png';

const DriverList = () => {
    const navigate = useNavigate();
    const [allDrivers, setAllDrivers] = useState([]);
    const [filteredDrivers, setFilteredDrivers] = useState([]);
    const [currentPageDrivers, setCurrentPageDrivers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const itemsPerPage = 8;

    useEffect(() => {
        fetch('https://emonoid.com/api/v1/driver/getAllDrivers')
            .then(response => response.json())
            .then(data => {
                const filteredDrivers = data.drivers.filter(driver =>
                    driver.aadharFront && driver.aadharBack && driver.licenseFront && driver.licenseBack
                );
                setAllDrivers(filteredDrivers);
                setFilteredDrivers(filteredDrivers);
                setCurrentPageDrivers(filteredDrivers.slice(0, itemsPerPage));
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
        setCurrentPageDrivers(filtered.slice(0, itemsPerPage));
    }, [searchQuery, allDrivers]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentPageDrivers(filteredDrivers.slice(startIndex, endIndex));
    }, [currentPage, filteredDrivers]);

    const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const startIndex = (newPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentPageDrivers(filteredDrivers.slice(startIndex, endIndex));
    };

    // Handle navigation to driver details
    const handleNavigate = (driver) => {
        navigate("/fastx/admin/driver_details", { state: { driver } });
    };

    return (
        <div className='w-full flex flex-col'>
            <div className='w-11/12 pt-12 flex flex-col mb-6'>
                <div className='flex items-center justify-between'>
                    <div className='w-2/6'>
                        <h1 className='text-xl font-semibold'>Drivers</h1>
                        <h1 className='text-xs text-gray-300'>Contacts</h1>
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
                    <div className='w-3/12 flex items-center justify-between'>
                        <div className='h-9 w-9 rounded-md shadow-sm flex items-center justify-center'>
                            <img className='h-4' src={hamburger} alt="" />
                        </div>
                        <div className='h-9 w-9 rounded-md shadow-sm flex items-center justify-center'>
                            <img className='h-4' src={squareBurger} alt="" />
                        </div>
                        <button onClick={() => navigate("/fastx/admin/pending_verfication")} className='flex bg-deep-green items-center w-36 justify-center h-11 rounded-lg'>
                            <h1 className='text-xs text-white font-medium'>Pending Verification</h1>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 ml-1 w-full'>
                    {currentPageDrivers.map((driver, index) => (
                        <div onClick={() => handleNavigate(driver)} key={index} className='cursor-pointer'>
                            <div className='relative flex flex-col items-center justify-center w-52 lg:w-48 xl:w-56 shadow-md rounded-md py-4 my-4 mb-4'>
                                <div className='top-5'>
                                    <img className='h-14 md:h-16' src={driver.avatar || driverImg} alt="" />
                                </div>
                                <div className='absolute z-20 top-12 left-32 md:left-32 lg:left-28'>
                                    <img className='h-4 md:h-7' src={companyLogo} alt="" />
                                </div>
                                <div className='absolute z-30 top-4 left-44'>
                                    <img className='h-4' src={threedots} alt="" />
                                </div>
                                <div className='pt-2 flex flex-col items-center'>
                                    <h1 className='font-semibold mt-4 text-sm md:text-base'>{driver.name}</h1>
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
                        <h1 className='text-sm font-semibold px-1'>{Math.min((currentPage - 1) * itemsPerPage + 1, filteredDrivers.length)}-{Math.min(currentPage * itemsPerPage, filteredDrivers.length)}</h1>
                        <h1>from</h1>
                        <h1 className='text-sm font-semibold px-1'>{filteredDrivers.length}</h1>
                        <h1>drivers</h1>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center border rounded-md p-1 mx-1'>
                            <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}>
                                <img className='h-4' src={douleArrow1} alt="Previous" />
                            </button>
                        </div>
                        <div className='flex items-center border rounded-md h-6'>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <div key={i} className={`px-2 ${currentPage === i + 1 ? 'bg-green-600' : ''} h-6 rounded-md`}>
                                    <button onClick={() => handlePageChange(i + 1)} className='text-sm'>{i + 1}</button>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center border rounded-md p-1 mx-1'>
                            <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}>
                                <img className='h-4' src={douleArrow2} alt="Next" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverList;

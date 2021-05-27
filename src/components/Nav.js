import React from 'react'

const Nav = () => {
    return (
        <nav className='absolute top-0 px-14 py-8 flex flex-col lg:flex-row justify-between items-center w-full'>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full lg:w-2/3 mb-4 lg:mb-0'>
                <div>
                    <div className='text-xl lg:text-3xl text-gray-800 font-bold'>CLEAN CONNECTION</div>
                    <div className='text-base text-green-600'>PROFESSIONAL CLEANING SOLUTIONS</div>
                </div>
                <a href='/#' className='text-gray-800 font-bold'>Find a job</a>
                <a href='/#' className='text-gray-800 font-bold'>Hire a Cleaner</a>
            </div>
            <div className='flex justify-center lg:justify-end items-center w-full lg:w-2/3'>
                <a href='/#' className='text-gray-800 font-bold mr-4'>Log In</a>
                <button 
                className='rounded-full bg-green-600 flex justify-center items-center py-2 px-8 ml-4 text-white font-semibold hover:bg-green-400 transition duration-500 ease-in-out'
                >
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Nav

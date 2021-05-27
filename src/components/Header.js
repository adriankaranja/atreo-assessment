import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col lg:flex-row min-h-screen overflow-hidden'>
            <div className='w-full lg:w-1/3 flex flex-col justify-center mr-0 ml-0 mt-52 lg:mt-0 pl-14 lg:pl-0 lg:-mr-14 lg:ml-14'>
                <div className='flex flex-col text-5xl w-full pl-4 mb-12'>Make Your Building or <div className='mt-4'>Home Stand Out</div></div>
                <p className='text-xl pl-4 mb-20 font-bold'>Simplify Hiring by choosing a hassle-free quality cleaner or cleaning team.</p>
                <button 
                className='rounded-full bg-green-600 flex justify-center items-center py-4 px-16 w-64 ml-4 mb-14 text-white font-semibold hover:bg-green-400 transition duration-500 ease-in-out'
                >
                    Explore Now
                </button>
                <p className='pl-4 text-gray-800 font-black'>Looking for a cleaning job? <a className='underline' href='/#'>Sign Up</a></p>
            </div>
            <div className='h-1/2 lg:h-auto w-auto lg:w-9/12 mr-0 ml-14 lg:-mr-14 lg:-ml-8'>
                <img className='h-full w-full object-contain lg:object-cover mt-0 lg:-mt-8' src='./images/hero.png' alt=''/>
            </div>
        </div>
    )
}

export default Header

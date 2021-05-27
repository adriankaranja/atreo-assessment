import React from 'react'

const Looking = () => {
    return (
        <div className='px-14 py-24 flex flex-col justify-center items-center w-full'>
            <div className='text-5xl font-bold text-gray-800 mb-12'>Looking for a job as a cleaner?</div>
            <div className='text-2xl font-bold text-gray-800 mb-12'>Sign up today to start exploring new opportunities!</div>
            <button 
                className='rounded-full bg-green-600 flex justify-center items-center py-3 px-20 ml-4 mb-14 text-white font-semibold hover:bg-green-400 transition duration-500 ease-in-out mb-20'
                >
                    Get Started
            </button>
            <div className='h-2 bg-gray-800 w-full mb-12'></div>
            <div className='w-full mb-8'>
                <ul className='list-none w-full flex flex-col lg:flex-row justify-between items-center text-gray-800 font-bold'>
                    <li><a href='/#'>Hire a professional</a></li>
                    <li><a href='/#'>Find a job</a></li>
                    <li><img src='/images/primaryLogo.png' alt='' /></li>
                    <li><a href='/#'>About</a></li>
                    <li><a href='/#'>Terms and conditions</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Looking

import React from 'react'

const WhoWeAre = () => {
    return (
        <div className='w-full px-14 flex flex-col lg:flex-row justify-center items-center py-24'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center py-8'>
                <div className='text-gray-800 text-5xl mb-12'>Who We Are</div>
                <div className='w-2/3 text-center'>
                    Description description description description description
                    description description description description description
                    description description description description description
                    description description
                </div>
                <button 
                className='rounded-full bg-gray-800 flex justify-center items-center py-3 px-20 ml-4 text-white font-semibold hover:bg-gray-600 transition duration-500 ease-in-out my-20'
                >
                    Learn More
            </button>
            </div>
            <div className='w-1/2 lg:w-1/3 h-full flex justify-center items-center ml-0 lg:ml-20'>
                <img clasName='' src='/images/submarkLogo.png' alt='' />
            </div>
        </div>
    )
}

export default WhoWeAre

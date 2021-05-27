import React from 'react'
import SquareTile from './SquareTile'

const Others = () => {
    return (
        <div className='px-14 pt-24 pb-14 flex flex-col justify-center items-center w-full bg-blue-300'>
            <div className='text-5xl font-bold text-white mb-12 text-center lg:text-left'>What Others Are Saying</div>
            <div className='w-full flex flex-col lg:flex-row justify-between px-2 lg:px-12 mt-12'>
                <SquareTile />
                <SquareTile />
                <SquareTile />
            </div>
            <button 
                className='rounded-full bg-gray-800 flex justify-center items-center py-3 px-14 lg:px-16 ml-4 text-white font-semibold hover:bg-gray-600 transition duration-500 ease-in-out my-20'
                >
                    Find a Cleaner Now
            </button>
        </div>
    )
}

export default Others

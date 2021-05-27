import React from 'react'
import Tile from './Tile'

const HowItWorks = () => {
    return (
        <div className='px-14 py-24 flex flex-col justify-center items-center  w-full'>
            <div className='text-5xl font-bold mb-12'>HOW IT WORKS</div>
            <div className='w-full flex flex-col lg:flex-row justify-between px-0 lg:px-12 mt-12'>
                <Tile imageUrl='/images/search.png' title='Browse Cleaners' index='1'/>
                <Tile imageUrl='/images/connection.png' title='Connect With Candidates' index='2'/>
                <Tile imageUrl='/images/hire.png' title='Hire Your Best Match' index='3'/>
               
            </div>
            <button 
                className='rounded-full bg-gray-800 flex justify-center items-center py-3 px-16 ml-4 mb-14 text-white font-semibold hover:bg-gray-600 transition duration-500 ease-in-out my-20'
                >
                    Begin Search
            </button>
        </div>
    )
}

export default HowItWorks

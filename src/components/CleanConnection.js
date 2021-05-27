import React from 'react'
import Tile from './Tile'

const CleanConnection = () => {
    return (
        <div className='px-14 py-24 flex flex-col justify-center items-center w-full bg-blue-300'>
            <div className='text-5xl font-bold text-white mb-12 text-center lg:text-left'>Why You Should Use Clean Connection</div>
            <div className='w-full flex flex-col lg:flex-row justify-between px-12 mt-12 mb-14'>
                <Tile imageUrl='/images/default.png' title='Title/Benefit' changeColour={true}/>
                <Tile imageUrl='/images/default.png' title='Title/Benefit' changeColour={true}/>
                <Tile imageUrl='/images/default.png' title='Title/Benefit' changeColour={true}/>
                <Tile imageUrl='/images/default.png' title='Title/Benefit' changeColour={true}/>
            </div>
        </div>
    )
}

export default CleanConnection

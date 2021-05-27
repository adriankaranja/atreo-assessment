import React from 'react'

const Tile = ({imageUrl, index, title, changeColour}) => {
    return (
        <div className='flex flex-col justify-between items-center mt-8 lg:mt-0'>
            {changeColour ? (
                <div className='w-2/3 p-1 flex justify-self-start justify-center items-center mb-8'><img className='h-full w-full object-cover'src={imageUrl} alt=''/></div>
            ): (
                <div className='w-1/2 p-2 flex justify-self-start justify-center items-center mb-8'><img className='h-full w-full object-cover'src={imageUrl} alt=''/></div>
            )}
            <div className='w-full justify-self-end flex flex-col justify-between items-center'>
                {changeColour ? (
                    <>
                        <div className='text-2xl text-white width-full font-bold mb-6'>{title}</div>
                        <div className='text-white'>Description Description</div>
                        <div className='text-white'>Description Description</div>
                    </>
                ):(
                    <>
                        <div className='text-2xl text-gray-800 width-full font-bold mb-6'>{index}. {title}</div>
                        <div className=''>Description Description</div>
                        <div className=''>Description Description</div>
                    </>
                )}
                
            </div>
           
        </div>
    )
}

export default Tile

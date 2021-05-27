import React from 'react'

const SquareTile = () => {
    return (
        <div className='mx-0 lg:mx-3 min-h-72 rounded-2xl bg-white p-4 flex flex-col justify-between mt-8 lg:mt-0'>
            <div className='text-gray-600 text-7xl font-bold h-8'>"</div>
            <div className='w-full flex items-center justify-center mt-6'>
                <div className='w-11/12 text-center'>
                    Testimonial testimonial testimonial
                    testimonial testimonial testimonial
                    testimonial testimonial testimonial
                    testimonial testimonial testimonial
                    testimonial testimonial
                </div>
            </div>
            <div className='w-full flex items-center justify-center my-6'>
                <div className='w-5/6 text-center text-gray-800 font-bold'>
                    Company Name
                </div>
            </div>
        </div>
    )
}

export default SquareTile

import React from 'react';

const CallUs = () => {
    return (
       <div className='bg-[#DC4450] '>
         <div className='container mx-auto grid grid-cols-3 py-20'>
            {/* Div number 1  */}
            <div className='text-center'>
                <p className='font-Poppins font-medium text-xl text-white'>CALL US 24/7</p>
                <h1 className='font-Oswald font-bold text-4xl text-white'>+88013242085</h1>
            </div>
            {/* Div number 2  */}
            <div className='text-center'>
                <p className='font-Poppins font-medium text-xl text-white'>SEASON STREET 45/2</p>
                <h1 className='font-Oswald font-bold text-4xl text-white'>Barishal,Bangladesh</h1>
            </div>
            {/* Div number 3  */}
            <div  className='text-center'>
                <p className='font-Poppins font-medium text-xl text-white'>WORKING HOURS</p>
                <h1 className='font-Oswald font-bold text-4xl text-white'>DAILY: 9AM - 8PM</h1>
            </div>
        </div>
       </div>
    );
};

export default CallUs;
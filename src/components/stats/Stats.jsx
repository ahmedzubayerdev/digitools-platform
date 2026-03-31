import React from 'react';

const Stats = () => {
    return (
        <div className='gradient-bg'>
            <div>
                <div className='flex flex-col gap-4 text-center justify-around md:mx-48 md:py-3 md:flex-row'>
                    <div className='border-r-2 border-white px-15'>
                        <h2 className='font-semibold text-6xl text-white'>50K+ </h2>
                        <p className='text-xl text-white my-3'>Active Users</p>
                    </div>
                    <div className='border-r-2 border-white px-15'>
                        <h2 className='font-semibold text-6xl text-white'>  200+ </h2>
                        <p className='text-xl text-white my-3'>Premium Tools</p>
                    </div>
                    <div className='px-15' >
                        <h2 className='font-semibold text-6xl text-white'>4.9 </h2>
                        <p className='text-xl text-white m-4'>Rating</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Stats;
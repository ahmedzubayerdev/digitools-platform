import React from 'react';
import user from '../../assets/image/user.png'
import packages from '../../assets/image/package.png'
import rocket from '../../assets/image/rocket.png'

const Steps = () => {
    return (
        <div>
            <div className='text-center md:mx-48 py-14 '>
                <div>
                    <div className='mb-10'>
                        <h2 className='font-bold text-4xl mb-4'>Get Started in 3 Steps</h2>
                        <p className='text-sm text-[#627382] '>Start using premium digital tools in minutes, not hours.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 text-center space-y-4  md:mt-5 md:grid-cols-3 '>
                    <div className='relative  rounded-lg p-8 text-center  '>
                        <p className=' absolute top-1 right-1 -translate-x-1/2 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full '>01</p>
                        <img src={user} alt="   "className='mx-auto mt-6  mb-3'/>
                        <p className='font-bold text-2xl mb-3 '>Create Account  </p>
                        <p className='text-sm text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='relative  rounded-lg p-8 text-center  '>
                        <p className=' absolute top-1 right-1 -translate-x-1/2 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full '>02</p>
                        <img src={packages} alt="   "className='mx-auto mt-6  mb-3'/>
                        <p className='font-bold text-2xl mb-3 '>Choose Products </p>
                        <p className='text-sm text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='relative  rounded-lg p-8 text-center  '>
                        <p className=' absolute top-1 right-1 -translate-x-1/2 bg-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full '>03</p>
                        <img src={rocket} alt="   "className='mx-auto mt-6  mb-3'/>
                        <p className='font-bold text-2xl mb-3 '> Start Creating   </p>
                        <p className='text-sm text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                    
                   
                
                </div>
           </div>
        </div>
    );
};

export default Steps;
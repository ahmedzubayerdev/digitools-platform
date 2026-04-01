import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className= 'mx-2 md:mx-48 py-5 space-y-5 '>
                <div className='text-center'>
                    <h2 className='font-bold text-5xl mb-5'>Simple, Transparent Pricing</h2>
                    <p className=' text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='card-container grid grid-cols-1 md:grid-cols-3 gap-7 md:mt-6 md:py-6 '>
                    <div className='card space-y-6 md:px-12 py-3'>
                        <div>
                            <p className='font-bold text-2xl'>Starter </p>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div className='text-[#627382]'>
                            <span className='font-bold text-4xl text-black'>$0</span>/Month
                        </div>
                        <div className='text-[#627382]'>
                            <ul>
                                <li className='flex'><Check className='text-green-400'/>Access to 10 free tools</li>
                                <li className='flex'><Check className='text-green-400'/>Basic templates</li>
                                <li className='flex'><Check className='text-green-400'/>Community support</li>
                                <li className='flex'><Check className='text-green-400'/>1 project per month</li>
                            </ul>
                        </div>
                        <div className='mt-15'>
                            <button className='gradient-bg text-white w-full rounded-full py-2'>Get Started Free </button>
                        </div>
                    </div>
                    <div className='card gradient-bg text-white space-y-6 md:space-x-5 md:px-6 py-3  '>
                        <div className='relative'>
                            <span className='absolute -top-5 right-1/2 translate-x-1/2 bg-amber-200 text-orange-400 rounded-2xl px-2'>Most Popular </span>
                            <p className='font-bold text-2xl'>Pro </p>
                            <p >Best  for professionals</p>
                        </div>
                        <div >
                            <span className='font-bold text-4xl '>$29</span>/Month
                        </div>
                        <div >
                            <ul >
                                <li className='flex'><Check />Access to all premium tools</li>
                                <li className='flex'><Check />Unlimited templates</li>
                                <li className='flex'><Check />Priority support</li>
                                <li className='flex'><Check />Unlimited projects</li>
                                <li className='flex'><Check />Cloud sync</li>
                                <li className='flex'><Check />Advanced analytics</li>
                            </ul>
                        </div>
                        <div className='bg-white rounded-full'>
                            <button className=' border-2 gradient-text w-full rounded-full py-1'>Get Started Free </button>
                        </div>
                    </div>
                    <div className='card md:px-12 py-3 space-y-6'>
                        <div>
                            <p className='font-bold text-2xl'>Starter </p>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div className='text-[#627382]'>
                            <span className='font-bold text-4xl text-black'>$0</span>/Month
                        </div>
                        <div className='text-[#627382]'>
                            <ul>
                                <li className='flex'><Check className='text-green-400'/>Everything in Pro</li>
                                <li className='flex'><Check className='text-green-400'/>Team collaboration</li>
                                <li className='flex'><Check className='text-green-400'/>Custom integrations</li>
                                <li className='flex'><Check className='text-green-400'/>Dedicated support</li>
                                <li className='flex'><Check className='text-green-400'/>SLA guarantee</li>
                                <li className='flex'><Check className='text-green-400'/>Custom branding</li>
                            </ul>
                        </div>
                        <div>
                            <button className='gradient-bg text-white w-full rounded-full py-2'>Get Started Free </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Pricing;
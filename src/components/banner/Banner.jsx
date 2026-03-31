import React from 'react';
import statusIcon from '../../assets/image/Group 5.png'
import { Play } from 'lucide-react';
import bannerImg from '../../assets/image/banner.png'

const Banner = () => {
    return (
             
        <div className=' flex justify-between items-center mx-auto md:mx-48 my-14 flex-col md:flex-row' >
            <div className='md:w-1/2 text-center'>
                <div >
                    
                    <span className='flex jsutify-center items-center w-fit gap-2 p-2 bg-[#E1E7FF] rounded-2xl'>
                        <img src={statusIcon} alt="statusIcon" />
                        <span>New: AI-Powered Tools Available</span>
                    </span> 
                    
                    <div className='font-bold text-4xl leading-normal tracking-wide mt-3 text-[#12244C] md:text-left md:text-5xl '>
                        <h1>Supercharge Your <br /> Digital Workflow</h1>
                    </div>
                    <div className='text-[#627382] mb-7 mt-5 md:text-left'>
                        <p>Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.Explore Products
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 md:flex-row'>
                        <button className=' font-semibold text-white gradient-bg px-5 py-3 rounded-3xl '>Explore Products </button>
                        <button className="btn btn-outline btn-primary font-semibold px-5 md:py-6 rounded-3xl ml-2 "> <Play />Watch Demo </button>


                </div>

            </div>
            <div>
                <img src={bannerImg} alt="" className='bg-cover w-3/4' />
            </div>

        </div>
    );
};

export default Banner;
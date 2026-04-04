import React from 'react';
import instagram from '../../assets/image/Instagram.png'
import facebook from '../../assets/image/Facebook.png'
import twitter from '../../assets/image/Twitter.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#101727] text-white/70 px-5 md:px-48 pt-20 pb-7'>
                <div >
                    <div className='grid grid-cols-2 gap-y-5 mb-10 md:grid-cols-6 '>
                        <div className='mr-4 space-y-4 col-span-2 text-center md:text-left'>
                            <p className='font-bold text-3xl text-white'>DigiTools </p>
                            <p className='text-sm'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                        </div>
                        <div className='space-y-4 '>
                            <p className='text-2xl text-white'>Product</p>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Templates</p>
                            <p>Integrations</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-2xl text-white'>Company</p>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Careers</p>
                            <p>Press</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-2xl text-white'>Resources </p>
                            <p>Documentation</p>
                            <p>Help Center</p>
                            <p>Community</p>
                            <p>Contact</p>
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <p className='text-2xl text-white'>Social Links</p>
                            </div>
                            <div className='flex gap-2 mt-3'>
                                <img src={instagram} alt="instagrm icon" />
                                <img src={facebook} alt="facebook icon" />
                                <img src={twitter} alt="twitter icon" />
                            </div>
                        </div>
                    </div>
                    
                    <div className=' border-t-2 border-white/30 flex flex-col justify-between items-center pt-7 md:flex-row '>
                        <div>
                            <p>© 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className='flex gap-5'>
                            <p>Privacy Policy</p> 
                            <p>Terms of Service</p>
                            <p>Cookies</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
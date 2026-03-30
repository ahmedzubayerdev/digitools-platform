import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-auto lg:mx-48 mt-2 p-2 '>
            <div className='gradient-text font-bold text-2xl md:text-4xl'>DigiTools</div>
            <div className='hidden md:block'>
                <ul className='flex justify-around items-center  md:gap-5 p-4'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ </li>
                </ul>
            </div>
            <div className='flex items-center gap-4 '>
                <ShoppingCart />
                <span className='font-semibold'>LogIn</span>
                <button className=' font-semibold text-white gradient-bg px-5 md: py-3 rounded-3xl '>Get Started</button>
            </div>

        </div>
    );
};

export default Navbar;
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-48 mt-2 p-2 '>
            <div className='gradient-text font-bold text-4xl'>DigiTools</div>
            <div >
                <ul className='flex justify-around items-center  gap-5 p-4'>
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
                <button className='px-5 py-3 font-semibold text-white gradient-bg rounded-3xl'>Get Started</button>
            </div>

        </div>
    );
};

export default Navbar;
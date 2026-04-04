import React, { use } from 'react';
import AvilableCards from '../avilableCards/AvilableCards';

const Cards = ({cardsPromise}) => {
    console.log(cardsPromise);
    const cards = use(cardsPromise);
    console.log(cards);
    return (
        <div className='container mx-auto px-5 md:px-32 lg:px-48'>
            <div className='mt-15'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold mb-5'>Premium Digital Tools</h2>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center gap-5 mt-5'>
                    <button className='gradient-bg text-white px-5 py-2 rounded-full'>Products </button>
                    <button>Cart <span>(0)</span> </button>
                </div>
            </div>

            <AvilableCards cards={cards}> </AvilableCards>
        </div>
    );
};

export default Cards;
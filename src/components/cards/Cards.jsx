import React, { use, useState } from 'react';
import AvilableCards from '../avilableCards/AvilableCards';
import SelectedCards from '../selectedCards/SelectedCards';

const Cards = ({cardsPromise}) => {
    // console.log(cardsPromise);
    const cards = use(cardsPromise);
    // console.log(cards);
    const [selectedBtn, setselectedBtn] = useState("Products")
    const [selectedCards, setselectedCards] = useState([])

    return (
        <div className='container mx-auto px-5 md:px-32 lg:px-48'>
            <div className='mt-15'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold mb-5'>Premium Digital Tools</h2>
                    <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center gap-5 mt-5'>
                    <button
                    onClick={()=>setselectedBtn("Products")}
                    className={` ${selectedBtn === "Products" ?"gradient-bg text-white" :""} px-5 py-2 rounded-full`}>Products </button>

                    <button
                    onClick={()=>setselectedBtn("Cart")}
                    className={` ${selectedBtn === "Cart" ?"gradient-bg text-white" :""} px-5 py-2 rounded-full`}>Cart <span >({selectedCards.length})</span> </button>
                </div>
            </div>

            {selectedBtn === "Products"
                ?  <AvilableCards
                cards={cards}
                selectedCards={selectedCards}
                setselectedCards={setselectedCards}>   
                </AvilableCards>
                :  <SelectedCards
                 selectedCards={selectedCards}
                 setselectedCards={setselectedCards}
                 >
                </SelectedCards>
            }

        </div>
    );
};

export default Cards;
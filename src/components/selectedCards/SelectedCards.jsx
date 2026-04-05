import React from 'react';
import  { useState } from 'react';
import { toast } from 'react-toastify';

const SelectedCards = ({ selectedCards, setselectedCards}) => {

    // console.log(selectedCards , "SelectedCards");
    const [isClicked, setIsClicked] = useState(false);
    // total 
    const total = selectedCards.reduce((sum, card) => {
    return sum + Number(card.price);
    }, 0);


    const handleCartItemDelete = (card)=>{
        const filterCard = selectedCards.filter((selectedCard) => selectedCard.id !== card.id)
        setselectedCards(filterCard);
        toast.error(`${card.name} is removed from cart`)

    }
    const handleProceed = () => {
    setselectedCards([]); 
    setIsClicked(true);
    toast.error("Removed items from cart")
    }
    return (
        

        <>{
            selectedCards.length === 0 ?
                    <div className='text-center space-y-5 my-40'>
                        <h2 className='font-bold text-4xl'>No itme selected Yet </h2>
                        <p>Go to <span className='font-bold '>Products</span> tab to select items</p>
                    </div>
                    
                :<div className='space-y-6'>
                
                <div className=''>
                    <h2 className='font-bold text-4xl'>Your Cart </h2>
                </div>
                <div>
                        { 
                            selectedCards.map((card, index)=>{
                                return (
                                    <div key={index} className='flex justify-between items-center border-2 border-black/30 mb-3 p-4 rounded-xl '>
                                        <div className='flex items-center gap-6 '>
                                            <div>
                                                <img src={card.icon} alt="" />
                                            </div>
                                            <div>
                                                <p>{card.name} </p>
                                                <p>${card.price}</p>
                                            </div>
                                        </div>
                                        <button 
                                        onClick={()=>handleCartItemDelete(card)}
                                        className="btn btn-outline btn-error">Remove </button>

                                    </div>
                                )
                            })
                        }
                </div>
                <div className='flex justify-between'>
                    <h2>Total </h2>
                    <span className='font-bold text-2xl'>${total.toFixed(2)}</span>
                </div>
                
                <button 
                onClick={handleProceed}
                className={`py-2 w-full rounded-full text-white 
                    ${isClicked ===true ? 'bg-green-500' : 'gradient-bg'}`}
                    >Proceed To Checkout
            </button>
            </div>
                
            }
        </>
    );
};

export default SelectedCards;
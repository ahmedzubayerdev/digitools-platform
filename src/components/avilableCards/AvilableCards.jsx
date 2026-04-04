import { Check } from 'lucide-react';
import React from 'react';
import Card from '../card/Card';

const AvilableCards = ({cards}) => {
    console.log(cards, "cards");
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 '>
                {cards.map((card)=>{
                    console.log(card, "card");
                    return (
                        <Card card={card}></Card>
                        
                    )
                })}
            </div>
        </div>



    );
};

export default AvilableCards;
import { Check } from 'lucide-react';
import React from 'react';

const Card = ({card}) => {
    return (
        <div>
            <div className='flex flex-col px-2 py-6 space-y-4 h-full'>
                                <div className='text-right'>
                                <span className={`px-3 py-1 bg-cyan-300 rounded-full
                                ${card.tag === "New" ? "bg-green-300 text-green-700" : ""}
                                ${card.tag === "Popular" ? "bg-purple-300 text-purple-700" : ""}
                                ${card.tag === "Best Seller" ? "bg-orange-300 text-orange-700" : ""}
                                `}>{card.tag}</span>
                                </div>
                                <div>
                                    <img src={card.icon} alt="" />
                                </div>
                                <h2 className='font-bold text-2xl'>{card.name}</h2>
                                <p className='text-[#627382]'>{card.description}</p>
                                <p><span className='text-3xl font-bold'>${card.price}/</span><span>{card.period}</span></p>
                                <div className='text-[#627382]'>
                                    {card.features.map((feature, index)=>{
                                        return(
                                            <ul>
                                                <li key={index} className='flex gap-2'><Check className='text-green-700'/> {feature}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                                <button className='gradient-bg text-white font-bold w-full rounded-full py-3 mt-auto'>Buy Now </button>

            </div>
        </div>
    );
};

export default Card;
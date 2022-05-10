import React from 'react';

const InfoCart = ({img, cardTittle, bgClass, cardText}) => {
    return (
        <div class= {`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-2 mt-2'><img src={img} alt="Album"/></figure>
            <div class="card-body text-white mt-2">
                <h2 class="card-title">{cardTittle}!</h2>
                <p>{cardText}</p>
                
            </div>
        </div>
    );
};

export default InfoCart;
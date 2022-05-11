import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl  m-4">
                <div class="card-body">
                    <h2 class="card-title text-primary">Client Reviews</h2>
                    <p className='my-2'>{review.review}</p>
                    <div class="flex items-center">

                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                                <img src={review.img} alt=""/>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
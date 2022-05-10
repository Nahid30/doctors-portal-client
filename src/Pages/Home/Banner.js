import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse px-12">
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold ">Your New <span className='text-primary'>Smile</span> Starts Here!</h1>
                        <p class="py-6">We are always ready to give you a better service. So don't be late to checkup your dentist if you have problem in your teeth. Just click the button below to see your Doctor!</p>
                        <button class="btn btn-primary  text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
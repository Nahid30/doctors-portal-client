import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <section style={{background:`url(${bg})`}}>
           
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} class="sm:min-w-sm lg:max-w-lg	 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold ">Your New <span className='text-primary'>Smile</span> Starts Here!</h1>
                        <p class="py-6">We are always ready to give you a better service. So don't be late to checkup your dentist if you have problem in your teeth. Just click the button below to see your Doctor!</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
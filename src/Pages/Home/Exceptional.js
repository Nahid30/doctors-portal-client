import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Exceptional = () => {
    return (
        <div>
            <div class="hero min-h-screen  ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="min-w-sm max-w-sm rounded-lg shadow-2xl mx-10"/>
                    <div>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                        <p class="py-6">Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders.</p>
                        <button class="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;
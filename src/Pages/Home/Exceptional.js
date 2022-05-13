import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Exceptional = () => {
    return (
        <div>
            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="w-52 lg:w-80 rounded-lg shadow-2xl mx-10"/>
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms!</h1>
                        <p className="py-6">Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders.</p>
                        <button className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;
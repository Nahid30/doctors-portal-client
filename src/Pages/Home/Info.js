import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const Info = () => {

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            <InfoCart cardText="9:00AM - 8:00PM" cardTittle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCart>

            <InfoCart cardText="Brooklyn, NY 10036, United States" cardTittle="Visit Our Locations" bgClass="bg-accent" img={marker}></InfoCart>

            <InfoCart cardText="+000 123 456789" cardTittle="Contact Us" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCart>
        </div>
    );
};

export default Info;
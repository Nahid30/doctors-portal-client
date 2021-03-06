import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 1,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 1,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-28 text-center'>
            <h2 className='text-xl font-bold uppercase text-primary my-2'>Our Services</h2>
            <h2 className='text-5xl'>Services We Provide</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
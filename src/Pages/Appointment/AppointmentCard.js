import React from 'react';

const AppointmentCard = ({ service }) => {
    const {name, slots} = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div class="card-body mx-auto">
                <h2 class="card-title text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try Another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div class="mt-3">
                   <button className=' btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary' disabled={slots.length===0}> Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
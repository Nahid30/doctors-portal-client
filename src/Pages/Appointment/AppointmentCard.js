import React from 'react';

const AppointmentCard = ({ service , setTreatment }) => {
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
                   <label onClick={()=>setTreatment(service)}  disabled={slots.length===0} for="booking-modal" class=" btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
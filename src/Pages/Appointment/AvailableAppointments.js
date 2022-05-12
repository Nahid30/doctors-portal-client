import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className='px-12'>
            <h4 className='text-xl text-secondary text-center my-8'>Available Appointments On: {format(date, "PP")}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentCard
                    key={service._id}
                    service={service}
                    ></AppointmentCard>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

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
                    setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    date = {date}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;
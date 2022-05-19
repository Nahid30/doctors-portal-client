import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate ], () => fetch(`https://desolate-fjord-03129.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
        
    )

    if(isLoading){
        return <Loading></Loading>
    }

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
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;
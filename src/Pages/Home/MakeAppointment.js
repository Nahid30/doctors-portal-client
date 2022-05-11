import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex justify-center items-center my-20'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-77px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                <h2 className='text-3xl my-4 text-white'>Make An Appointment Today!</h2>
                <p className='text-white mb-3'>Dr. John Doe completed his BDS Degree from Dhaka Dental College in 2003.Then he has completed 1 year post graduate training on Endodontics and Operative dentistry and  4 years post-graduate training for FCPS  on Oral and maxillofacial surgery from Dhaka Dental College and Hospital. He completed 300 credit hours Dental Implant Education from American academy of Implant Dentistry (AAID) and Surgical training from Bangalore India.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
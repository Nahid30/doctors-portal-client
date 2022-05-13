import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../..//assets/images/bg.png';



const AppointmentBanner = ({date, setDate}) => {
    return (
        <section style={{background:`url(${bg})`}}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="sm:min-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='Dentist Chair' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AppointmentBanner;
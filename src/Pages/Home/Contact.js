import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className=' my-20' style={{ background: `url(${appointment})` }}>
            <div>
                <h4 className='text-secondary text-xl text-center pt-10 '>Contact Us</h4>
                <h2 className='text-center text-white text-3xl my-2'>Stay connected with us</h2>
            </div>
            <div className='flex justify-center items-center'>
                <div className=' my-10 px-4'>

                    <input type="email" placeholder="Enter Your Email" class="input w-full max-w-sm" /> <br />

                    <input type="text" placeholder="Subject" class="input w-full max-w-sm my-4" />

                    <textarea class="textarea input w-full max-w-sm" placeholder="Bio"></textarea> <br />

                    <div className='text-center mt-2'><PrimaryButton>Submit</PrimaryButton></div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        
    } 
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {

                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}


                    </label>
                </div>

                {/* email  */}

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {

                            required: {
                                value: true,
                                message: 'Email is Required'
                            },

                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>

                {/* pass */}

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Specialty</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Specialty"
                        class="input input-bordered w-full max-w-xs"
                        {...register("specialty", {

                            required: {
                                value: true,
                                message: 'Specialty is Required'
                            },

                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                    </label>
                </div>


                <input value="Add" type="submit" className='btn w-full max-w-xs text-white' />
            </form>
        </div>
    );
};

export default AddDoctor;
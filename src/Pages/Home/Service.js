import React from 'react';

const Service = ({service}) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-20 mx-5 ">
                <figure className=" pt-10">
                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>We are always ready to give you a best service you need.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;
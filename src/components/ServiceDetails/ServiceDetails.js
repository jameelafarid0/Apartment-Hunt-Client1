import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = ({ service }) => {
    const { name, image, detail } = service;
    return (
        <div className="col-md-4 text-center mb-5 mt-3">
            <div className="service-card align-items-center">
                <img style={{ height: '75px' }} src={image} alt="" />
                <h5 className="mt-3 mb-3" style={{ color: 'black' }}>{name}</h5>
                <p className="text-secondary">{detail}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;

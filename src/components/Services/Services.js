import React, { useState } from 'react';
import "./Service.css"
import serviceInfo from '../../fakeData/serviceInfo';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [service, setService] = useState(serviceInfo);
    return (
        <div>
            <div className="background">
            <h5 className="h5">Service</h5>
            <div className="h2">
                <h2>We're an angency tailored to all client's needs that always delivers</h2>
            </div>


            <div className="d-flex  justify-content-center ">
                <div className="container-md  row   pt-3">
                    {
                        service.map(service => <ServiceDetails
                            service={service}
                            key={service.key}
                        ></ServiceDetails>)
                    }
                </div>
            </div>



        </div>
            
        </div>
    );
};

export default Services;
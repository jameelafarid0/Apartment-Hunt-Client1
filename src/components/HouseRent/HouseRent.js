
import React, { useEffect, useState } from 'react';
import Apartment from '../Apartment/Apartment';
import './HouseRent.css';

const HouseRent = () => {
    
 
    const [rent, setRent] = useState([]);

    useEffect(() => {
        fetch('https://obscure-ridge-72586.herokuapp.com/home')
            .then(res => res.json())
            .then(data => setRent(data))
    }, [setRent])

    return (
        <div className="background">
            <h5 className="h5">House rent</h5>
            <div className="h2">
                <h2>Discover the latest Rent available today</h2>
            </div>


            <div className="d-flex  justify-content-center ">
                <div className="container-md  row  mb-5 ml-5">
                    {
                        rent.map(place => <Apartment
                            place={place}
                            key={place.key}
                        ></Apartment>)
                    }
                </div>
            </div>



        </div>
    );
};

export default HouseRent;
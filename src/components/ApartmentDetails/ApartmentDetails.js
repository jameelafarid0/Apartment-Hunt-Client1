import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApartmentHeader from '../ApartmentHeader/ApartmentHeader';
import Information from '../Information/Information';
import Navbar from '../Navbar/Navbar';
import './ApartmentDetails.css'

const ApartmentDetails = () => {
    const { apartmentId, apartmentTitle, apartmentPrice } = useParams();
    const [rent, setRent] = useState([]);

    useEffect(() => {
        fetch('https://obscure-ridge-72586.herokuapp.com/home')
            .then(res => res.json())
            .then(data => setRent(data))
    }, [])

    const rentPlaces = rent.find(rentPlace => rentPlace._id === apartmentId)
    console.log(rentPlaces);

    return (
        <div>
            <Navbar></Navbar>
            <ApartmentHeader></ApartmentHeader>
            <Information></Information>

            <div style={{ width: "700px", marginLeft: "127px" }}>
                <div>
                    <div className="d-flex">
                        <h2 className="title">{apartmentTitle}</h2>
                        <span className="span">${apartmentPrice}</span>
                    </div>
                    <p className="paragraph">
                        3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.
                    </p>
                </div>
                <div style={{marginTop:"70px"}}>
                    <div>
                        <h2 className="head">Price details</h2>
                        <p className="paragraph">Rent/Month: $550 (negotiable) <br/>
                        Service Charge : 8,000/= Tk per month, subject to change <br/>
                        Security Deposit : 3 month’s rent <br/>
                        Flat Release Policy : 3 months earlier notice required</p>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <h2 className="head">Property details</h2>
                        <p className="paragraph">Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/>
                        Flat Size : 3000 Sq Feet. <br/>
                        Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/>
                        Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/>
                        Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br/>
                    Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ApartmentDetails;
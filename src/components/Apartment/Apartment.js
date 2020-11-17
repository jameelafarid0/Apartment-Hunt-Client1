import React from 'react';
import { Button } from 'react-bootstrap';
import image2 from '../../images/bath 1.png';
import image1 from '../../images/bed 1.png';
import logo from '../../images/map-marker-alt-solid 1.png';
import './Apartment.css';
import { Link } from 'react-router-dom';

const Apartment = ({ place }) => {
    const { title, image, price,address } = place;
    return (
        <div>
            <div className=" card box   mt-5  ml-5 ">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={`data:image/png;base64,${image.img}`} width="286px" alt="..." />
                    <div class="card-body" >
                        <h5 style={{ color: 'black', fontWeight: "bold" }} class="card-title">{title}</h5>
                        <div>
                            <span className="fontSize"><img src={logo} width="10px" alt="" /> {address}</span>
                        </div>
                        <div>
                            <span className="fontSize"><img src={image1} width="20px" alt="" /> 3 bedrooms</span>
                            <span className="fontSize"><img src={image2} className="left" width="20px" height="15px" alt="" /> 2 bathroom</span>
                        </div>
                        <div className="bottom" >

                            <span className="price">${price}</span>
                            <Link to={`/apartment/${place._id}/${place.title}/${place.price}`} >
                                <Button className="Buttons">View details</Button>
                            </Link>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;
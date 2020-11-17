import React from 'react';
import './Footer.css'
import logo1 from '../../images/map-marker-alt-solid 1.png'
import instagram from '../../images/Vector-1.png';
import LinkedIn from '../../images/Vector-2.png';
import Youtube from '../../images/Vector-3.png';
import facebook from '../../images/Vector.png';

const Footer = () => {
    return (
        <div className="backgroundColor">
            <div className="d-flex" style={{marginLeft:"100px", paddingTop:"50px", paddingBottom:"50px"}}>
                <div className="d-flex">
                    <img src={logo1} width="27px" height="30px" alt="" />
                    <p style={{ marginLeft: "10px" }} className="color">H#340 (4th floor), Road #24,<br />
                       Now DOHS, Mohakhali, Dhaka, Bangladesh <br />
                       Phone: 018XXXXXXXX <br />
                       E-mail: info@company.com <br />
                    </p>
                </div>
                <div>
                    <ul>
                    <li><h3 className="color">Company</h3></li>
                        <li>About</li>
                        <li>Site Map</li>
                        <li>Support</li>
                        <li>Support Center</li>
                        <li>Terms and Conditions</li>
                        <li>Submit listing</li>
                    </ul>
                    
                </div>
                <div style={{marginLeft:"20px"}}>
                    
                   
                        <ul>
                            <li><h3 className="color">Quick</h3></li>
                            <li>Quick links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Terms conditions</li>
                            <li>Our blog</li>
                        </ul>
                       
                       
                </div>
                <div style={{marginLeft: "60px"}} >
                    <h3 className="color">About us</h3>
                    <p className="color" style={{width:"270px"}}>we are the top real estate agency in Sydney, with agents available to answer any question 24/7</p>
                    <img src={facebook} width="30px" alt="" />
                    <img src={instagram} width="30px" style={{marginLeft:"10px"}} alt="" />
                    <img src={LinkedIn} width="30px" style={{marginLeft:"10px"}} alt="" />
                    <img src={Youtube} width="30px" style={{marginLeft:"10px"}} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Footer;
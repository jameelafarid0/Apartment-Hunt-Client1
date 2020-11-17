import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HouseRent from '../HouseRent/HouseRent';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HouseRent></HouseRent>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
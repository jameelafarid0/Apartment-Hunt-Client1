import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="body">
            <h1>FIND YOUR HOUSE RENT</h1>
            <div className="center">
                <input className="input" type="text" placeholder="  Search...." />
                <button className="button">Find now</button>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import logo from "../../images/Logo.png";

const DashboardHeader = ({option}) => {
    return (
        <div className="mt-3">
            <div className="row">
                <img className="ml-5" style={{width:"130px",height:"50px"}} src={logo} alt=""/>
                <h4 style={{marginLeft:"90px"}}>{option}</h4>
                <h4 className="ml-auto mr-4">Naymul Hasan</h4>
            </div>
        </div>
    );
};

export default DashboardHeader;
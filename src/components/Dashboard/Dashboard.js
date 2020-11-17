import { faHdd, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AddHouse from './AddHouse';
import BookingList from './BookingList';
import "./Dashboard.css";
import DashboardHeader from './DashboardHeader';
import MyRent from './MyRent';

const Dashboard = () => {
   
    const [option,setOption] = useState("Booking List");
  
    const handleOption = (name) => {
       
            setOption(name)
        
    }
    
    return (
      <section>
            <DashboardHeader option = {option}></DashboardHeader>
            <div className="container-fluid row mt-4">
                    <div className="col-md-2 col-2">
                        <div>
                           <div className="mt-5">
                               
                                <h6 onClick={()=>handleOption("Booking List")} className={option === "Booking List"?"active font-weight-bold":"font-weight-bold"}><FontAwesomeIcon className={option === "Booking List"?"active mr-2":"mr-2"} icon={faHdd} />Booking List</h6>

                                <h6 onClick={()=>handleOption("Add House")} className={option === "Add House"?"active font-weight-bold ":"font-weight-bold"}><FontAwesomeIcon className={option === "Add House"?"active mr-2":"mr-2"} icon={faPlus} />Add House</h6>

                                <h6 onClick={()=>handleOption("My Rent")} className={option === "My Rent"?"active font-weight-bold ":"font-weight-bold"}><FontAwesomeIcon className={option === "My Rent"?"active mr-2":"mr-2"} icon={faHome} />My Rent</h6>
                             
                           </div>
                        </div>
                    </div>
                        
                        <div className="col-md-10 row pt-5 pb-5 dashboard-main">
                            {
                                option === "Booking List" &&
                                <BookingList></BookingList>
                            }
                            {
                                option === "Add House" &&
                                <AddHouse></AddHouse>
                            }
                            {
                                option === "My Rent" && 
                                <MyRent></MyRent>
                            }
                           
                        </div>
        
                   
                </div>
      </section>
    );
};

export default Dashboard;
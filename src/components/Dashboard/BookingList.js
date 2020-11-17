import React, { useEffect, useState } from 'react';
import ServiceTable from './ServiceTable';

const BookingList = () => {
    const [allService,setAllService] = useState([])

   useEffect(()=>{
        fetch("https://obscure-ridge-72586.herokuapp.com/getbooking")
        .then(res => res.json())
        .then(data =>{
            setAllService(data)
            
        })
   },[])
   
    return (
        <div style={{backgroundColor:"white"}} className="p-3 table-responsive">
             <table className="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allService.map(service => <ServiceTable key={service._id} service={service}></ServiceTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import MyRentTable from './MyRentTable';

const MyRent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);

    useEffect(()=>{
        fetch(`https://obscure-ridge-72586.herokuapp.com/singlebooking?email=` +  loggedInUser.email)
        .then(res =>  res.json())
        .then(data =>{
            setService(data);
        })
    },[loggedInUser.email])

    return (
        <div style={{backgroundColor:"white"}} className="p-3 table-responsive">
             <table className="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">House Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        service.map(service => <MyRentTable  service={service}></MyRentTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyRent;
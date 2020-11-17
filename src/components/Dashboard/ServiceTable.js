import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ServiceTable = ({service}) => {
    const {_id,fullname,email,phone,status,message} = service;

    const handleClick = (name) =>{
        // fetch(`https://secret-garden-14792.herokuapp.com/update/${_id}`,{
        //     method : "PATCH",
        //     headers : {'content-type' : 'application/json'},
        //     body:JSON.stringify({status:name})
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     if(data){
        //         alert("status updated")
        //     }
        //     else{
        //         alert("update failed")
        //     }
        // })
       
    }
    return (
        <tr>
            <th scope="row">{fullname}</th>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{message}</td>
            <td>
                <DropdownButton id="dropdown-basic-button" title={status}>
                            <Dropdown.Item onClick={()=>handleClick("pending")} >Pending</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleClick("On going")}>On going</Dropdown.Item>
                            <Dropdown.Item onClick={()=>handleClick("Done")} >Done</Dropdown.Item>
                </DropdownButton>
            </td>
        </tr>
    );
};

export default ServiceTable;
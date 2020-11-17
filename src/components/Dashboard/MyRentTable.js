import React from 'react';

const MyRentTable = ({service}) => {
    const {title,status,price} = service;
    return (
        <tr>
        <th scope="row">{title}</th>
        <td>{price}</td>
        <td>
            <button>{status}</button>
        </td>
    </tr>
    );
};

export default MyRentTable;
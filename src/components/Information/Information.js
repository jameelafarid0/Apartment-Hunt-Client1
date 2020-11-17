import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Information.css'

const Information = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const newData = {...data}
        newData.status = 'Pending'
        console.log(newData)

        fetch('https://obscure-ridge-72586.herokuapp.com/addbooking', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Your order has been made successfully!')
            }
        })
    }
    return (
        <div>
            <div className="d-flex" style={{marginTop:"45px", marginLeft:"130px", marginBottom:"50px"}} >
                <div>
                    <img src="https://i.imgur.com/zsVdN4u.png" width="712px" height="350px" alt=""/>
                    <div className="d-flex" style={{marginTop:"25px"}}>
                        <img src="https://i.imgur.com/mXvrqRO.png" width="160px" height="100px" alt=""/>
                        <img src="https://i.imgur.com/zEeiPhb.png" width="160px" height="100px" style={{marginLeft:"25px"}} alt=""/>
                        <img src="https://i.imgur.com/ToNYcvO.png" width="160px" height="100px" style={{marginLeft:"25px"}} alt=""/>
                        <img src="https://i.imgur.com/OhuHpjc.png" width="160px" height="100px" style={{marginLeft:"25px"}} alt=""/>
                    </div>
                </div>
                <div className="container1">

                <form  className="container2" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="form-input input1"
                                ref={register({ required: true })}
                            />
                             {errors.fullname && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone No."
                                className="form-input input1"
                                style={{marginTop:"17px"}}
                                ref={register({ required: true })}
                            /> 
                            {errors.phone && <span className="text-danger ml-3">This field is required</span>}<br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                style={{marginTop:"17px"}}
                                className="form-input input1"
                                ref={register({ required: true })}
                            /> 
                            {errors.email && <span className="text-danger ml-3">This field is required</span>}<br />
                            <textarea
                                rows="6"
                                cols="39"
                                maxlength="100"
                                name="message"
                                placeholder="Message"
                                className="text-area"
                                style={{marginTop:"17px", border:"none", paddingLeft:"10px"}}
                                ref={register({ required: true })}
                            ></textarea>
                            {errors.message && <span className="text-danger ml-3">This field is required</span>}<br />
                            <Link to={`/order/:service`}>
                            <input
                                type="submit"
                                className="button3"
                                placeholder="Request Booking"
                            />
                            </Link>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default Information;
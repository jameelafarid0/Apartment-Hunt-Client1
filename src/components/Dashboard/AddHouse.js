import React, { useState } from 'react';

const AddHouse = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);

    const handleChange = (e) =>{
        const file = e.target.files[0];
        setFile(file);
    }
    const handleBLur = (e) =>{
        const data = {...info};
        data[e.target.name] = e.target.value;
        setInfo(data);
    }
    const handleSubmit = (e) =>{
        const formData = new FormData();
        formData.append('file',file);
        formData.append('title',info.title);
        formData.append('address',info.address);
        formData.append('bedroom',info.bedroom);
        formData.append('bathroom',info.bathroom);
        formData.append('price',info.price);

        fetch("https://obscure-ridge-72586.herokuapp.com/addhome",{
            method : "POST",
            body : formData
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert("data send successfully")
            } else {
                alert("faieled to end data")
            }
        })
        e.preventDefault();
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Service Title</label>
                        <input name="title" onBlur= {handleBLur} type="text" required  className="form-control"/>
                    </div>
                    <div className="col">
                        <label htmlFor="">Price</label>
                        <input name="price" onBlur= {handleBLur} type="text" required className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Location</label>
                        <input name="address" onBlur= {handleBLur} type="text" required  className="form-control"/>
                    </div>
                    <div className="col">
                        <label htmlFor="">Bathroom</label>
                        <input name="bathroom" onBlur= {handleBLur} type="text" required className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">Bedroom</label>
                        <input name="bedroom" onBlur= {handleBLur} type="text" required  className="form-control"/>
                    </div>
                    <div className="col">
                        <label htmlFor="">Thumbnail</label>
                        <input name="file" onChange = {handleChange} type="file" required className="form-control"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-success mt-3">Submit</button>
           </form>
        </div>
    );
};

export default AddHouse;
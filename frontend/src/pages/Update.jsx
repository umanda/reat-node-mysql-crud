import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [book,setBook] = useState({
        title : "",
        description : "",
        cover : "",
        price : null,
    });

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split('/')[2];

    const handleChange = (e) =>{
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async (e)=>{
        e.preventDefault();

        try {
         await axios.put('http://localhost:8800/books/'+bookId,book);
         navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="form">
      <h1>Update book</h1>
      <input type="text" onChange={handleChange} placeholder="title"  name="title"/>
      <input type="text" onChange={handleChange} placeholder="description" name="description" />
      <input type="text" onChange={handleChange} placeholder="cover" name="cover" />
      <input type="number" onChange={handleChange} placeholder="price"  name="price"/>

      <button className="formButton" onClick={handleClick}>Update Book</button>
    </div>
  );
}

export default Update
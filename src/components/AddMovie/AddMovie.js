import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './AddMovie.css'

const AddMovie = ({addNewMovie}) => {
    const [inputs, setInputs] = useState({
title:'',
description:'',
image:'',
rate:'',
    })

const handleChange = (e) => {
e.preventDefault()
setInputs({...inputs,[e.target.name]:e.target.value})}

const handleAdd = () => {
    addNewMovie({...inputs, id:uuidv4()})
}


  return (
    <div className="Add_movie">
      <div className="inputs">
        <input placeholder="Title" name="title" onChange={handleChange}/>
        <input placeholder="Description" name="description" onChange={handleChange}/>
        <input placeholder="Image" name="image" onChange={handleChange}/>
        <input placeholder="Rate" name="rate" onChange={handleChange}/>
        <button onClick={handleAdd}>Add New Movie</button>
      </div>
    </div>
  );
};

export default AddMovie;

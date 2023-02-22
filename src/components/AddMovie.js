import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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
    <div style={{marginTop:'100px', display:'flex', flexDirection:'row', justifyContent:'center'}}>
      <input placeholder="Title" name="title" onChange={handleChange}/>
      <input placeholder="Description" name="description" onChange={handleChange}/>
      <input placeholder="Image" name="image" onChange={handleChange}/>
      <input placeholder="Rate" name="rate" onChange={handleChange}/>
      <button onClick={handleAdd}>Add New Movie</button>
    </div>
  );
};

export default AddMovie;

import "./MovieCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import React, { useState } from "react";

const MovieCard = ({ movie, deletedMov, updateMov }) => {
  
  const [inpUpd, setInpUpd] = useState(movie.title)

  const handleChange = (e) => {
    setInpUpd(e.target.value)
  }

  const handleUpdate = () => {
    updateMov(movie.id, inpUpd)
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} style={{width:'18rem', height:'250px'}}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <input placeholder="Update Title" value={inpUpd} onChange={handleChange} name="Update"/> 
        <button onClick={handleUpdate}>Update</button>
        <Card.Text>{movie.description}</Card.Text>
        <StarRatingComponent
          name="Star" /* name of the radio input, it is required */
          value={
            movie.rate
          } /* number of selected icon (`0` - none, `1` - first) */
          editing={
            false
          } /* is component available for editing, default `true` */
        />
        <Button variant="primary" onClick={() => deletedMov(movie.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

import "./MovieCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, deletedMov, updateMov }) => {
  
  const [inpUpd, setInpUpd] = useState(movie.title)

  const handleChange = (e) => {
    setInpUpd(e.target.value)
  }

  const handleUpdate = () => {
    updateMov(movie.id, inpUpd)
  }
  /* style={{ width: "18rem", height:'500px',}} */
  return (
    <Card className="Card_holder" >
      <Link to={`/MovieDescription/${movie.id}`} >
        <Card.Img variant="top" src={movie.image} style={{width:'100%', height:'250px'}}/>
        </Link>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <input style={{ marginTop:"1rem", marginBottom:"1rem"}} placeholder="Update Title" value={inpUpd} onChange={handleChange} name="Update"/> 
        <button onClick={handleUpdate}>Update</button>
        <Card.Text className="paragraph_holder">{movie.description}</Card.Text>
        <div className="stars_holder">
          <StarRatingComponent
            name="Star" /* name of the radio input, it is required */
            value={
              movie.rate
            } /* number of selected icon (`0` - none, `1` - first) */
            editing={
              false
            } /* is component available for editing, default `true` */
          />
        </div>
        <Button className="btn_delete" style={ {variant:"primary"}} onClick={() => deletedMov(movie.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

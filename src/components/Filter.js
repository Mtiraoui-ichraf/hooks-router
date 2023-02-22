import StarRatingComponent from "react-star-rating-component";

const Filter = ({ searchMov, rateMov }) => {
  return (
    <div>
      <input style={{marginTop:'50px'}} placeholder="Search" onChange={(e) => searchMov(e.target.value)} />
      <br></br>
      <StarRatingComponent
        name="Star" /* name of the radio input, it is required */
        onStarClick={(value) => rateMov (value)}
        emptyStarColor='#333'
        starColor='#F2668B'
      />
    </div>
  );
};

export default Filter;

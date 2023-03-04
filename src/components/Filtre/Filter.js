import StarRatingComponent from "react-star-rating-component";
import './Filter.css'

const Filter = ({ searchMov, rateMov }) => {
  return (
    <div className="search_holder">
      <input style={{marginTop:'50px'}} placeholder="Search" onChange={(e) => searchMov(e.target.value)} />
      <br></br>
      <StarRatingComponent className='stars'
        name="Star" /* name of the radio input, it is required */
        onStarClick={(value) => rateMov (value)}
        emptyStarColor='white'
        starColor='#D9B959'
      />
    </div>
  );
};

export default Filter;

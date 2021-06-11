import React from 'react';
import axios from 'axios';
import StarsRating from 'stars-rating';

const Rating = (props) => {
  return (
    <div className="rating">
      <StarsRating count={5} value={props.calValue} half={true} edit={false} color2={'#333300'} />
      {props.reviewCount > 0
        ? <a href='#jumpEntry' className="review-text" style={{textDecoration: 'underline'}} onClick={() => {
          document.getElementsByClassName('numberOfReviews')[0].focus();
        }}>
        Read all {props.reviewCount} reviews
        </a>
        : <div className="review-text">No Reviews</div>}
    </div>

  );
};

export default Rating;
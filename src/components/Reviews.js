import { useEffect, useState } from 'react';
import { apiRequest } from '../services/userServices';

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
        const response = await apiRequest('GET', 'http://localhost:8000/api/v1/articles/');
        console.log(response);
        const reviews = response.results
        console.log(reviews);
        setReviews(reviews);
        console.log(reviews);
    }

  const reviewItems = reviews.map(review =>
      <div className="review">
        <a className="review_link">
          <div className="review_title">
            {review.title}
          </div>
          <div className="review_meta">
            <ul>
              <li>
                By: {review.author}
              </li>
              <li>
                Rating: {review.rating}
              </li>
            </ul>
          </div>
        </a>
      </div>
      );

  return (
    <div>
      <h2> Reviews </h2>
      <div className="reviews">
        {reviewItems}
      </div>
    </div>
  )
}

export default Reviews

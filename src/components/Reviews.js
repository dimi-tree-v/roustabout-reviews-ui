import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disc } from 'react-bootstrap-icons';
import { IconLink, TextLink } from './Button';
import { apiRequest } from '../services/userServices';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
        const response = await apiRequest('GET', 'http://localhost:8000/api/v1/articles/');
        setReviews(response.results);
    }

  const reviewItems = reviews.map(review =>

      <div className="reviews-item">
        <Link to={`/reviews/${review.id}`}>
          <div className="reviews-item-image">
            <Disc/>
          </div>
          <div className="reviews-item-title">
            {review.title}
          </div>
          <div className="reviews-item-meta">
            <ul>
              <li>
                By: {review.author}
              </li>
              <li>
                Rating: {review.rating}
              </li>
            </ul>
          </div>
        </Link>
      </div>
      );

  return (
    <div>
      <h2 className="page-titles"> Reviews </h2>
      <div className="reviews">
        {reviewItems}
      </div>
    </div>
  )
}

export default Reviews

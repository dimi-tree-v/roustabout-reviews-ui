import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disc } from 'react-bootstrap-icons';
import { IconLink, TextLink } from './Button';
import Loading from './Loading'
import { apiRequest } from '../services/userServices';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  },[]);

  const fetchItems = async () => {
        const response = await apiRequest('GET', 'http://localhost:8000/api/v1/articles/');
        if (response.results) {
          setReviews(response.results);
          setIsLoading(false);
        } else {
          console.log("No results");
        }
    }

  const reviewItems = reviews.map(review =>

      <div className="reviews-item">
        <Link to={`/reviews/${review.id}`}>
          <div className="reviews-item-image">
            <Disc size='lg'/>
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
      { (isLoading) ? <Loading/>: reviewItems }
      </div>
    </div>
  )
}

export default Reviews

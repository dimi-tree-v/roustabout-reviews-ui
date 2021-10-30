import { useEffect, useState } from 'react';
import { Disc } from 'react-bootstrap-icons';
import { apiRequest } from '../services/userServices';


const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const id = window.location.pathname.split('/').pop();
    const review = await apiRequest('GET', `http://localhost:8000/api/v1/articles/${id}`);
    setReview(review);
  }

  return (
    <div className="review">
        <div className="review-release">
          <div className="review-release-album-art"> <Disc size='xs'/> </div>
          <div className="review-release-album-artists"> {review.artists} </div>
          <div className="review-release-album-title"> {review.release} </div>
        </div>
        <div className="review-title">
          {review.title}
        </div>
        <div className="review-meta">
          <ul>
            <li>
              By: {review.author}
            </li>
            <li>
              Rating: {review.rating}
            </li>
            <li>
              {review.genre}
            </li>
          </ul>
          <div className='review-body'> {review.body} </div>
        </div>
    </div>
  )


};

export default Review;

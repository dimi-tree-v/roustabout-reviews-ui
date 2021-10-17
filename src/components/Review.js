import { useEffect, useState } from 'react';
import { Disc } from 'react-bootstrap-icons';
import { apiRequest } from '../services/userServices';


const Review = () => {
  const [review, setReview] = useState([]);
  const [release, setRelease] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const id = window.location.pathname.split('/').pop();
    const review = await apiRequest('GET', `http://localhost:8000/api/v1/articles/${id}`);
    const release =  review.release;
    delete review.release;
    setRelease(release);
    setReview(review);
  }

  return (
    <div className="review">
        <div className="review-release">
          <div> <Disc size='xs'/> </div>
          <div> {release.artists} </div>
          <div> {release.title} </div>
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
          </ul>
          <div className='review-body'> {review.body} </div>
        </div>
    </div>
  )


};

export default Review;

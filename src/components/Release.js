import { useEffect, useState } from 'react';
import { Disc } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { apiRequest } from '../services/userServices';


const Release = () => {
  const [release, setRelease] = useState([]);
  const [articleReviews, setArticleReviews] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, []);

  const fetchItems = async () => {
    const id = window.location.pathname.split('/').pop();
    const release = await apiRequest('GET', `http://localhost:8000/api/v1/releases/${id}`);
    setRelease(release);
    setArticleReviews(release.articles);
    setUserReviews(release.user_reviews);
  };

  const articleReviewItems = articleReviews.map(article =>
      <div className="release-article-reviews-item">
        <Link to={`/reviews/${article.id}`}>
          <div className="release-article-reviews-item-title">
            {article.title}
          </div>
          <div className="release-article-reviews-item-meta">
            <ul>
              <li>
                By: {article.author}
              </li>
              <li>
                Rating: {article.rating}
              </li>
            </ul>
          </div>
        </Link>
      </div>
    );

    const articleReviewsSection = (
      <div>
        <h2 className="release-sub-headers"> Articles </h2>
        <div className="articles"> {articleReviewItems} </div>
      </div>
    );

    const userReviewItems = userReviews.map(review =>
      <div className="release-user-review-item">
        <div className="release-user-review-header">
          <div className="release-user-review-user">{review.author}</div>
          <div className="release-user-review-rating">{review.rating}</div>
        </div>
        <div className="release-user-review-title">{review.title}</div>
        <div className="release-user-review-body">{review.body}</div>
      </div>
    );

    const userReviewsSection = (
      <div>
        <h2 className="release-sub-headers"> User Reviews </h2>
        <div className="release-user-reviews"> {userReviewItems} </div>
      </div>
    )

  return (
      <div className="release">
        <div className="release-main-info">
          <div className="release-art"> <Disc size='xs'/> </div>
          <ul>
            <li>
              <div className="release-title"> {release.title} </div>
            </li>
            <li>
              <div className="release-artists"> {release.artists} </div>
            </li>
            <li>
              <div className="release-type"> {release.type} </div>
            </li>
            <li>
              <div className="release-genre"> {release.genre} </div>
            </li>
            <li>
              <div className="release-date"> {release.date_released} </div>
            </li>
          </ul>
        </div>
        <div className="release-reviews">

          { (articleReviews.length > 0) ? articleReviewsSection : null }
          { (userReviews.length > 0) ? userReviewsSection : null }

        </div>
        <div className="other-releases">
          <h2 className="release-sub-headers">Other releases by {release.artists}</h2>


        </div>
      </div>

  )
};

export default Release;

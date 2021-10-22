import { useEffect, useState } from 'react';
import { Disc } from 'react-bootstrap-icons';
import Loading from './Loading';
import { apiRequest } from '../services/userServices';


const NewRelease = () => {
  const [release, setRelease] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    setIsLoading(false);
  }, []);

  const fetchItems = async () => {
    const id = window.location.pathname.split('/').pop();
    const release = await apiRequest('GET', `http://localhost:8000/api/v1/releases/${id}`);
    setRelease(release);
    console.log(release)
  };

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
              <div className="release-genre"> {release.genre} </div>
            </li>
            <li>
              <div className="release-date"> {release.date_released} </div>
            </li>
          </ul>
        </div>
        <div className="release-reviews">
          <h2 className="release-sub-headers">Reviews</h2>
          <div className="articles"></div>
          <div className="user-reviews"></div>
        </div>
        <div className="other-releases">
          <h2 className="release-sub-headers">Releases by this Artist</h2>
        </div>
      </div>

  )
};

export default NewRelease;

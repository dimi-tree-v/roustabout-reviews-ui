import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Disc } from 'react-bootstrap-icons';
import { IconLink, TextLink } from './Button';
import Loading from './Loading'
import { apiRequest } from '../services/userServices';

const NewReleases = () => {
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    fetchItems();
    setIsLoading(false);
  },[]);


  const fetchItems = async () => {
        const response = await apiRequest('GET', 'http://localhost:8000/api/v1/releases/');
        if (response.results) {
          setReleases(response.results);
          setIsLoading(false);
        } else {
          console.log("No results");
        }
    }

    const releaseItems = releases.map(release =>

        <div className="releases-item">
          <Link to={`/releases/${release.id}`}>
            <div className="releases-item-image">
              <Disc size='lg'/>
            </div>
            <div className="releases-item-title">
              {release.title}
            </div>
            <div className="releases-item-meta">
              <ul>
                <li>
                  {release.artists}
                </li>
                <li>
                  {release.genre}
                </li>
                <li>
                  {release.date_released}
                </li>
              </ul>
            </div>
          </Link>
        </div>
        );

  return (
    <div>
      <h2 className="page-titles"> New Releases </h2>
      <div className="new-releases">
        { (isLoading) ? <Loading/>: releaseItems }
      </div>
    </div>
  )
}

export default NewReleases;

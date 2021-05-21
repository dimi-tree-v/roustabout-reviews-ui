import { useEffect } from 'react';
import { apiRequest } from '../services/userServices';

const Reviews = () => {

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
    const data = await apiRequest('GET', 'http://localhost:8000/api/v1/articles/');
  }

  return (
    <h2> Reviews </h2>
  )
}

export default Reviews

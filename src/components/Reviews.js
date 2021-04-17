import { useEffect } from 'react';

const Reviews = () => {

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:8000/api/v1/articles/');
    console.log(data);
    console.log('yo');
  }

  return (
    <h2> Reviews </h2>
  )
}

export default Reviews

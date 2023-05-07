import React,{ useEffect, useState } from 'react'
import ShowCard from '../../components/ShowCard/ShowCard'
import './ShowList.css'

const ShowList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
    <h1>Latest Shows</h1>

      <div className='show-list'>
        {data.map((item) => (
          <ShowCard item={item} />
        ))}
      </div>
    </div>
  )
}

export default ShowList
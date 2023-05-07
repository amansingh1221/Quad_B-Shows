import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const jsonData = await response.json();
        let item = jsonData.filter((elem) => {

          if (elem.show.id == id) return elem;
        })
        setData(item);

      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  console.log(data);

  return (
    <div className='show-page'>{data.length > 0 &&
      <h1 className='show-name'>{data[0].show.name}</h1>
    }
  
      <div className='show-img'>
      </div>
    </div>
  )
}

export default Show
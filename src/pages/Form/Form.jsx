import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Form.css'
const Form = () => {
  const {id}=useParams();
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
  



  return (
   
<>
<h1>Book Tickets Now!!!</h1>
<form >
<h2>{data.length > 0 &&data[0].show.name}</h2>
<label htmlFor='date'>Date: <input type='date' id='date'></input></label>

<label htmlFor='num'>Number of Tckets: <input type='number' id='num'></input></label>

<button type='submit'>Confirm Booking</button>

  
</form>
</>
  )
}

export default Form
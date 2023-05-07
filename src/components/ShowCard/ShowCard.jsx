import React from 'react'
import './ShowCard.css'
import {Link} from 'react-router-dom'
const ShowCard = ({item}) => {
  console.log(item);

  const handleClick=()=>{
    
  }
  // const pat=item.show.image.medium
  return (
    <div className='show-card'>
        <h2><Link to={`/show/${item.show.id}`}>{item.show.name}</Link></h2>
        <div className='show-language'>Language: {item.show.language}</div>
        <div className='show-rating'>Rating: {
          (item.show.rating.average==null)?0:item.show.rating.average
          }</div>
          <button className='btn'key={item.show.id} onClick={handleClick} type='button'>Book Tickets</button>
          
    </div>
  )
}

export default ShowCard
import React from 'react'
import './ShowCard.css'
import {Link, useNavigate} from 'react-router-dom'
const ShowCard = ({item}) => {
  // console.log(item);
const navigate=useNavigate();
const id_=item.show.id;

const handleclick=()=>{
    navigate(`/form/${id_}`)
}
  // const pat=item.show.image.medium
  return (
    <div className='show-card'>
        <h2><Link to={`/show/${item.show.id}`}>{item.show.name}</Link></h2>
        <div className='show-language'>Language: {item.show.language}</div>
        <div className='show-rating'>Rating: {
          (item.show.rating.average==null)?0:item.show.rating.average
          }</div>
          <button className='btn' onClick={handleclick} type='button'>Book Tickets</button>
          
    </div>
  )
}

export default ShowCard
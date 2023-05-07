import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='navbar'>
   
      <ul> 
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      
      </ul>
    </nav>
  )
}

export default Navbar
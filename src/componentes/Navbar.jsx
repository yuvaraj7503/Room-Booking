import React from 'react'
import'./Navbar.css'
import { FaHotel } from "react-icons/fa6";




const Navbar = () => {
  return (
    <header className='header'>
         <a href='/' className='logo'>  <FaHotel />  Hostels Bexio</a>
        <nav className='navbar'>
            <a href='/'> Home</a>
            <a href='/'> Rooms</a>
            <a href='/'> Facilities </a>
            <a href='/'> Blog</a>
            <a href='/'> Contact</a>
            
        </nav>
        <button  className='button'>Explore Room </button>
        <br></br>
        
        
        
    

    </header>
  )
}

export default Navbar

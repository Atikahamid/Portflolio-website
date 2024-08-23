import React, {useState} from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
 
export default function Navbar() {
  const [menueOpen, setMenueOpen] =useState(false);
  return (
    <nav className='nav'>
      <div className="nav1">
        <img src={require('../Assets/logo.png')} alt="" />
        <a href="/">Portfolio</a>
      </div>
      <div className="nav2">
        <div onClick={() => setMenueOpen(!menueOpen)}>
        {
          menueOpen ? <IoClose  className='menuebtn'/> :   <FaBars className='menuebtn' />
        }
        </div>
  
        <ul className={menueOpen ? 'menue_open' : 'menue_items'} onClick={() => setMenueOpen(false)}>
          <li> <a href="#about">About</a></li>
          <li> <a href="#experience">Experience</a> </li>
          <li> <a href="#projects">Project</a></li>
        </ul>
       
       
      </div>
    </nav>
  )
}

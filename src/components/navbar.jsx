import React from 'react';
import './navbar.css';
import contactimg from '../assets/contact.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopItems" >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopItems" >about</Link>
            <Link activeClass='active' to='jobs' spy={true} smooth={true} offset={-100} duration={500} className="desktopItems" >services</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src={contactimg} alt="" className="desktopMenuimg" />Contact me</button>
    </nav>

  );
}

export default Navbar

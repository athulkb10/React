import React from 'react'
import bg from '../../assets/image-removebg-preview.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introtext">I'm <span className="introName">Athul</span><br/>a UI Designer</span>
            <p className="introPara">I'm a UI designer that can create <br/> User-frienldy and visually appealing websites</p>
 
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
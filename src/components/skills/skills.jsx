import React from 'react';
import './skills.css';
import html from '../../assets/html-removebg-preview.png';
import javascript from '../../assets/JavaScript-removebg-preview.png';
import react from '../../assets/react-removebg-preview.png';
const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I Know</span>
            <span className="skillDescription">I specialize in transforming ideas into visually engaging, user-centered designs, ensuring seamless experiences through a balance of creativity, functionality, and intuitive interaction."</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={html} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>HTML & CSS</h2><br />
                    <p>HTML provide the structure of web content, while CSS styles and enhances its visual presentation.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={javascript} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>JavaScript</h2><br />
                    <p>JavaScript adds interactivity and dynamic behavior to websites, making them more engaging and functional for users.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={react} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                    <h2>React.js</h2><br />
                    <p>React.js is a JavaScript library for building fast and dynamic user interfaces using reusable components and a virtual DOM.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills
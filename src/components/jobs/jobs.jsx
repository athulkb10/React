import React from 'react'
import './jobs.css'
import uiimg from '../../assets/ui-removebg-preview.png'
import webimg from '../../assets/web-removebg-preview.png'
import appimg from '../../assets/appd-removebg-preview.png'
 
const Jobs = () => {
  return(
    <section id="jobs">
        <span className="jobTitle">What i'm good at</span>
        <span className="jobDescription">I offer custom UI design solutions, focusing on creating intuitive, visually appealing interfaces that enhance user experience across web and mobile platforms.</span>
        <div className="jobBoxes">
            <div className="jobBox">
                <img src={uiimg} alt="" className='jobimg'/>
                <div className="jobText">
                <h2>UI Designing</h2>
                <p>crafting intuitive, visually appealing interfaces that enhance user interaction and experience.</p>
                </div>
            </div>
            <div className="jobBox">
                <img src={webimg} alt="" className='jobimg' />
                <div className="jobText">
                <h2>Web Designing</h2>
                <p>creating the layout, structure, and visual elements of websites to ensure an engaging and functional user experience.</p>
                </div>
            </div>
            <div className="jobBox">
                <img src={appimg} alt="" className='jobimg'/>
                <div className="jobText">
                <h2>App designing</h2>
                <p>creating user-friendly and visually appealing interfaces for mobile or desktop applications, focused on enhancing user interaction and experience.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Jobs
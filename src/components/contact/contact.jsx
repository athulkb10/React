import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <section id="contact">
            <div className="contactTitle">
                <p>Let's work together</p><br />
                Contact me through
            </div>
            <div className="contactInfo">
            <span className="number"><i class="fa-solid fa-phone"></i>  Phone no <br /><span className="info">7994239451</span></span>
            <span className="email"><i class="fa-regular fa-envelope"></i> Email <br /><span className="info">athulkbiju10@gmail.com</span></span>
            </div>
    </section>
  )
}

export default Contact
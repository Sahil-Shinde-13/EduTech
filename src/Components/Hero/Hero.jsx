import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to EduTech - Your Future Starts Here!</h1>
            <p>At EduTech, we are dedicated to providing world-class education and fostering a culture of innovation and excellence. Join us to embark on a journey of lifelong learning and success.</p>
            <button className='btn'>Explore more <img src={arrow} alt="arrow" /></button>
        </div>

    </div>
  )
}

export default Hero
//import React from 'react'
import './Hero.css'
import arrow from './thin-arrow-direction-right-svgrepo-com.svg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Evolve.Initiate.Expand</h1>
        <p>We are a team of talented designers</p>
        <button className='btn'>EXPLORE MORE <img src={arrow} alt='arrow'/></button>
      </div>
    </div>
  )
}

export default Hero

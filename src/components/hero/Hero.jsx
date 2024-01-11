import React from 'react'
import "./hero.css"
import Data from './Data'
import Carousel from './carousel/Carousel'

function Hero() {
  return (
    <section className='hero section' id='hero'>
    
        <div className='hero_container container grid'>
            <div className='hero_content grid'>
                <Data/>
                <Carousel/>
            </div>
        </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import giftbox1 from "../../../assets/giftbox/giftbox1.jpg"
import giftbox2 from "../../../assets/giftbox/giftbox2.jpg"
import giftjar1 from "../../../assets/giftjar/giftjar1.jpg"
import giftjar2 from "../../../assets/giftjar/giftjar2.jpg"
import giftjar3 from "../../../assets/giftjar/giftjar3.jpg"
import "./carousel.css"

const images = [giftbox1, giftbox2, giftjar1, giftjar2, giftjar3]
function Carousel() {
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
      const [imageIndex, setImageIndex] = useState(0);

      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        autoplay: true,
        autoplaySpeed: 1500, 
      };
      
    
  return (
    <div className='slide_container'>
         <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"} >
            <img src={img} alt={img}  />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Carousel
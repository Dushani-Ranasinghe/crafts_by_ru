import React, { useEffect, useState } from "react";
import "./about.css";
import Gift from "../../assets/giftcard/giftcard4.jpg";
import Gift1 from "../../assets/giftcard/giftcard1.jpg";
import Gift2 from "../../assets/giftcard/giftcard2.jpg";

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Gift1, Gift2, Gift];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4100); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <section className="about section" id="about">
      <div className="about_container container grid">
        <div className="about_img_box">
          <div className="about_img_container">
          <div className="image_overlay"></div>
            <img
              src={images[currentImageIndex]}
              alt=""
              className="about_img"
            />
          </div>
        </div>

        <div className="about_data">
          <h1 className="about_title">
            Creating Beautiful Handmade Gifts with Passion and Precision...
          </h1>
          <p className="about_description">
            At Crafts_by_RU, we are dedicated to the art of handcrafting
            exquisite gifts that bring joy and delight. With meticulous
            attention to detail and a commitment to quality, we create unique
            pieces that are sure to leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

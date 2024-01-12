import React from "react";
import "./about.css";
import Gift from "../../assets/giftjar/gitjar5.jpg";
import Gift1 from "../../assets/giftcard/giftcard5.jpg";
import Gift2 from "../../assets/giftbox/giftbox3.jpg";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about_container container grid">

        <div className="about_img_box">
          <div className="about_img_container">
            <img src={Gift} alt="" className="about_img1" />
            <img src={Gift1} alt="" className="about_img2" />
            <img src={Gift2} alt="" className="about_img3" />
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

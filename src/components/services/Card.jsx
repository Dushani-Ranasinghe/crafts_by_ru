import React from "react";
import "./Card.css";

const Card = ({ image, link, description,link_title }) => {
  return (
    <div className="card_container">
      <div className="card_image_container">
        <img src={image} alt="" className="card_img" />
      </div>
      <div className="card_overlay">
        <a href={link}>{link_title}</a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
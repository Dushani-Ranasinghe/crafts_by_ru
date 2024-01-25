import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, to, description, link_title }) => {
  return (
    <div className="card_container">
      <div className="card_image_container">
        <img src={image} alt="" className="card_img" />
      </div>
      <div className="card_overlay">
        <Link to={to}>{link_title}</Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;

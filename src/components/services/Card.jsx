import React from "react";
import "./Card.css"
import Gift from "../../assets/giftbox/giftbox1.jpg"

const Card = () => {
  return (
    <div className="card_container">
      <div className="card_image">
        <img src={Gift} alt=""/>
      </div>
      <div class="card__overlay">
        <h2>Paris</h2>
        <p>Eiffel Tower</p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Card from './Card';
import "./Services.css";
import Gift1 from "../../assets/giftbox/giftbox3.jpg"
import Gift2 from "../../assets/giftcard/giftcard3.jpg"
import Gift3 from "../../assets/giftcard/giftcard2.jpg"
import Gift4 from "../../assets/giftcard/giftcard1.jpg"
import Gift5 from "../../assets/giftcard/giftcard4.jpg"
import Gift6 from "../../assets/giftjar/giftjar4.jpg"

const cardData = [
  {
    image: Gift1, 
    link: "#service1",
    link_title:"Gift Boxes",
    description: "Elegant gift box perfect for any special occasion."
  },
  {
    image: Gift2, 
    link: "#service1",
    link_title:"Gift Cards",
    description: "Artistic cards designed to make every occasion special."
  },
  {
    image: Gift3, 
    link: "#service1",
    link_title:"Gift Jars",
    description: "Adorable gift jar filled with sweet treats. "
  },

  {
    image: Gift4, 
    link: "#service1",
    link_title:"Gift Baskets",
    description: "Surprise your loved ones with our customized gift baskets."
  },
  {
    image: Gift5, 
    link: "#service1",
    link_title:"Explosion boxes",
    description: "Stand out collection of unique explosion boxes."
  },
  {
    image: Gift6, 
    link: "#service1",
    link_title:"Event Deco",
    description: "Transform events with stunning decorations."
  },

];

const Services = () => {
  return (
    <section className="services section" id="services">
    <div>
      <div className='card_box'>
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            link={card.link}
            link_title={card.link_title}
            description={card.description}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;

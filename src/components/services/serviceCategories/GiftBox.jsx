import React from "react";
import "./giftbox.css"; // Ensure the correct import path and file name
import GiftBox1 from "../../../assets/giftbox/giftbox1.jpg";
import GiftBox2 from "../../../assets/giftbox/giftbox2.jpg";
import GiftBox3 from "../../../assets/giftbox/giftbox3.jpg";
import { useNavigate } from "react-router-dom";

const GiftBox = () => {
  const navigate = useNavigate();
  const galleryImages = [
    { id: 1, src: GiftBox1, alt: "Gift Box 1" },
    { id: 2, src: GiftBox2, alt: "Gift Box 2" },
    { id: 3, src: GiftBox3, alt: "Gift Box 3" },
  ];

  return (
    <div className="gift_container container grid">
      <div className="gift_banner">
        <div
          className="banner_image"
          style={{ backgroundImage: `url(${GiftBox3})` }}
        >
          <div className="mask">
            <div className="gift_back" onClick={() => navigate("/")}>
              <i className="uil uil-arrow-left"></i>
            </div>
            <div className="gift_header">
              <h1>Gift Box</h1>
              <p>Explore our beautiful gift box collection</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gift_content grid">
        {/* Image Gallery */}
        <div className="gallery">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery_card">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftBox;

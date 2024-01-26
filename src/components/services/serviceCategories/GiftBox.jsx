import React, { useState } from "react";
import Modal from "react-modal";
import "./giftbox.css";
import GiftBox1 from "../../../assets/giftbox/giftbox1.jpg";
import GiftBox2 from "../../../assets/giftbox/giftbox2.jpg";
import GiftBox3 from "../../../assets/giftbox/giftbox3.jpg";
import { useNavigate } from "react-router-dom";

const SubImageGallery = ({ subImages, closeModal }) => {
  return (
    <div className="gallery_container">
      {subImages.map((subImage, index) => (
        <img src={subImage} alt={index+1} className="item"/>
        
      ))}
      <div className="close-container" onClick={closeModal}>
        <i className="uil uil-times services_modal-close"></i>
      </div>
    </div>
  );
};

const GiftBox = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryImages = [
    { id: 1, src: GiftBox1, alt: "Gift Box 1", subImages: [GiftBox1, GiftBox2, GiftBox3] },
    { id: 2, src: GiftBox2, alt: "Gift Box 2", subImages: [GiftBox2, GiftBox1, GiftBox3] },
    { id: 3, src: GiftBox3, alt: "Gift Box 3", subImages: [GiftBox3, GiftBox1, GiftBox2] },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="gift_container container grid">
      <div className="gift_banner">
        <div className="banner_image" style={{ backgroundImage: `url(${GiftBox3})` }}>
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
          {galleryImages.map((image, index) => (
            <div key={image.id} className="gallery_card" onClick={() => openModal(index)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal" className="img_modal">
        <SubImageGallery subImages={galleryImages[selectedImageIndex].subImages} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default GiftBox;

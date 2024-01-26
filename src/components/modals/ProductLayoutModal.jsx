import React, { useState } from "react";
import "../services/serviceCategories/giftbox.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import SubImageGallery from "../modals/SubImageGalleryModal";

const ProductLayoutModal = ({
  bannerImage,
  title,
  description,
  galleryImages,
}) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="page_container container grid">
      <div className="page_banner">
        <div
          className="banner_image"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="mask">
            <div className="page_back" onClick={() => navigate("/")}>
              <i className="uil uil-arrow-left"></i>
            </div>
            <div className="page_header">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="page_content grid">
        {/* Image Gallery */}
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery_card"
              onClick={() => openModal(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="img_modal"
      >
        <SubImageGallery
          subImages={galleryImages[selectedImageIndex].subImages}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
};

export default ProductLayoutModal;

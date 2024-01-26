import React from "react";
import "../services/serviceCategories/giftbox.css"

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

  export default SubImageGallery;
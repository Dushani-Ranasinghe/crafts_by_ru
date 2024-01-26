import React from "react";
import "./giftbox.css";
import GiftBox1 from "../../../assets/giftbox/giftbox1.jpg";
import GiftBox2 from "../../../assets/giftbox/giftbox2.jpg";
import GiftBox3 from "../../../assets/giftbox/giftbox3.jpg";
import ProductLayoutModal from "../../modals/ProductLayoutModal";
import "./giftbox.css"


const GiftBox = () => {

  const galleryImages = [
    { id: 1, src: GiftBox1, alt: "Gift Box 1", subImages: [GiftBox1, GiftBox2, GiftBox3] },
    { id: 2, src: GiftBox2, alt: "Gift Box 2", subImages: [GiftBox2, GiftBox1, GiftBox3] },
    { id: 3, src: GiftBox3, alt: "Gift Box 3", subImages: [GiftBox3, GiftBox1, GiftBox2] },
  ];

  return (
    <div className="gift_container">
     <ProductLayoutModal bannerImage={GiftBox1} title="Gift Boxes" description = "Explore our beautiful Gift Box collection" galleryImages={galleryImages}/>
    </div>
  );
};

export default GiftBox;

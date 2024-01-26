import React from "react";
import GiftJarBackground from "../../../assets/giftjar/giftjar1.jpg";
import GiftJar1 from "../../../assets/giftjar/giftjar2.jpg";
import GiftJar2 from "../../../assets/giftjar/giftjar3.jpg";
import GiftJar3 from "../../../assets/giftjar/giftjar4.jpg";
import ProductLayoutModal from "../../modals/ProductLayoutModal";

const GiftJar = () => {

  const galleryImages = [
    { id: 1, src: GiftJar1, alt: "Gift Box 1", subImages: [GiftJar1, GiftJar2, GiftJar3,GiftJarBackground] },
    { id: 2, src: GiftJar2, alt: "Gift Box 2", subImages: [GiftJar2, GiftJar3, GiftJar1] },
    { id: 3, src: GiftJar3, alt: "Gift Box 3", subImages: [GiftJar3, GiftJarBackground, GiftJar1] },
  ];

  return (
    <div className="gift_container">
     <ProductLayoutModal bannerImage={GiftJarBackground} title="Gift Jars" description = "Explore our beautiful Gift Jar collection" galleryImages={galleryImages}/>
    </div>
  );
};

export default GiftJar;
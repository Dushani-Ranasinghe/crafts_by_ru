import React from "react";
import GiftCardBackground from "../../../assets/giftcard/giftcard1.jpg";
import GiftCard1 from "../../../assets/giftcard/giftcard2.jpg";
import GiftCard2 from "../../../assets/giftcard/giftcard3.jpg";
import GiftCard3 from "../../../assets/giftcard/giftcard4.jpg";
import GiftCard4 from "../../../assets/giftcard/giftcard5.jpg";
import ProductLayoutModal from "../../modals/ProductLayoutModal";

const GiftCard = () => {

  const galleryImages = [
    { id: 1, src: GiftCard1, alt: "Gift Box 1", subImages: [GiftCard1, GiftCard2, GiftCard3,GiftCardBackground, GiftCard4] },
    { id: 2, src: GiftCard2, alt: "Gift Box 2", subImages: [GiftCard2, GiftCard3, GiftCard4, GiftCard1] },
    { id: 3, src: GiftCard3, alt: "Gift Box 3", subImages: [GiftCard3, GiftCard4, GiftCardBackground, GiftCard1] },
    { id: 4, src: GiftCard4, alt: "Gift Box 3", subImages: [GiftCard4, GiftCard1, GiftCardBackground, GiftCard3] }
  ];

  return (
    <div className="gift_container">
     <ProductLayoutModal bannerImage={GiftCardBackground} title="Gift Cards" description = "Explore our beautiful Gift Card collection" galleryImages={galleryImages}/>
    </div>
  );
};

export default GiftCard;
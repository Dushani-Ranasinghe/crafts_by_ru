import React from "react";
import GiftBasketBackground from "../../../assets/giftbasket/gifbasket.jpg";
import GiftBasket1 from "../../../assets/giftbasket/giftbasket1.jpg";
import GiftBasket2 from "../../../assets/giftbasket/giftbasket2.jpg";
import ProductLayoutModal from "../../modals/ProductLayoutModal";

const GiftBasket = () => {

  const galleryImages = [
    { id: 1, src: GiftBasket1, alt: "Gift Box 1", subImages: [GiftBasket1, GiftBasket2,GiftBasketBackground] },
    { id: 2, src: GiftBasket2, alt: "Gift Box 2", subImages: [GiftBasket2, GiftBasketBackground, GiftBasket1] },
  ];

  return (
    <div className="gift_container">
     <ProductLayoutModal bannerImage={GiftBasketBackground} title="Gift Basket" description = "Explore our beautiful Gift Basket collection" galleryImages={galleryImages}/>
    </div>
  );
};

export default GiftBasket;
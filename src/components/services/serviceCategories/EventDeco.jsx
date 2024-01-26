import React from "react";
import EventDecoBackground from "../../../assets/eventDeco/event.jpg";
import EventDeco1 from "../../../assets/eventDeco/event1.jpg";
import EventDeco2 from "../../../assets/eventDeco/event2.jpg";
import EventDeco3 from "../../../assets/eventDeco/event3.jpg";
import ProductLayoutModal from "../../modals/ProductLayoutModal";

const EventDeco = () => {

  const galleryImages = [
    { id: 1, src: EventDeco1, alt: "Gift Box 1", subImages: [EventDeco1, EventDeco2, EventDeco3,EventDecoBackground] },
    { id: 2, src: EventDeco2, alt: "Gift Box 2", subImages: [EventDeco2, EventDeco3, EventDeco1] },
    { id: 3, src: EventDeco3, alt: "Gift Box 3", subImages: [EventDeco3, EventDecoBackground, EventDeco1] },
  ];

  return (
    <div className="gift_container">
     <ProductLayoutModal bannerImage={EventDecoBackground} title="Event Decoration" description = "Explore our beautiful Event Decoration collection" galleryImages={galleryImages}/>
    </div>
  );
};

export default EventDeco; 
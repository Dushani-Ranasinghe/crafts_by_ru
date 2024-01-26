import React from 'react';
import { useParams } from 'react-router-dom';
import GiftCard from '../services/serviceCategories/GiftCard';
import GiftBox from "../services/serviceCategories/GiftBox"
import GiftJar from '../services/serviceCategories/GiftJar';
import GiftBasket from '../services/serviceCategories/GiftBasket';
import ExplosionBox from '../services/serviceCategories/ExplosionBox';
import EventDeco from '../services/serviceCategories/EventDeco';

const ProductPage = () => {
  const { category } = useParams();

  // Map category names to corresponding components
  const categoryComponents = {
    'gift-cards': GiftCard,
    'gift-boxes': GiftBox,
    'gift-jars': GiftJar,
    'gift-baskets': GiftBasket,
    'explosion-boxes': ExplosionBox,
    'event-deco': EventDeco,
  };

  // Render the selected component or a default message if the category is not found
  const SelectedComponent = categoryComponents[category] || (() => <div>Category Not Found</div>);

  return (
    <div>
    {/* <Header/> */}
      <SelectedComponent />
    </div>
  );
};

export default ProductPage;

import React from "react";
import { useParams } from "react-router-dom";

export const Project = () => {
  const { cardId } = useParams();
  return (
    <div>
      <div>
        <h2> Link title</h2>
        <p>Card ID: {cardId}</p>
        <p> Link description</p>
        {/* Render the detailed information about the card */}
      </div>
    </div>
  );
};

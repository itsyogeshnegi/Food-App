import React from "react";

const Cuisines = ({ image, dishName }) => {
  return (
    <div className="p-2">
      <img src={image} className="h-28"/>
      <h1>{dishName}</h1>
    </div>
  );
};

export default Cuisines;

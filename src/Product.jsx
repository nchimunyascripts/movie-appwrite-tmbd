import React, { useContext, useState } from "react";
import { ColorContext } from "./App";
import ItemDescription from "./ItemDescription";

function Product() {
  const { color, setColor } = useContext(ColorContext);
  const handleColorChange = () => {
    const newColor =
      color === "bg-purple-500" ? "bg-blue-500" : "bg-purple-500";
    setColor(newColor);
  };
  return (
    <div>
      <ItemDescription />
      <button onClick={handleColorChange}>Change</button>
    </div>
  );
}

export default Product;

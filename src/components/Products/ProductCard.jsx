import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card" key={item.id}>
      <div className="product-img">
        <img src={item.img} alt={item.title} />
      </div>
      <h3 className="product-title">{item.title}</h3>
      <p className="product-price">{item.price}</p>
    </div>
  );
};

export default ProductCard;

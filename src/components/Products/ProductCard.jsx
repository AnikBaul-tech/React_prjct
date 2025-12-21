import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card" key={item.id}>
      <div className="product-img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="product-card-details">
        <text className="product-title">{item.title}</text>
        <div className="product-card-bottom">
          <button className="button" id="order-btn">Order</button>
          <button className="button" id="like-btn">Like</button>
        </div>
          <p className="product-price">{item.price}</p>
        
      </div>
    </div>
  );
};

export default ProductCard;

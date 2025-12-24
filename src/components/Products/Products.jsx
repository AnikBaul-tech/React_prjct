import React from "react";
import "./Products.css";
import Snowfall from 'react-snowfall'
import FilterCards from "../Functionalities/FilterCards";


const Products = () => {
  
  return (
    <section className={`products-section`}>
      <Snowfall color="rgba(125, 160, 149, 1)"/>
      <div className="products-header">
        <h2>Our Products</h2>
        <p>Premium essentials crafted for comfort and identity.</p>
      </div>
      
      <FilterCards />
    </section>
  );
};

export default Products;

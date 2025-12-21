import React from "react";
import { useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import SearchComponent from "../Functionalities/SearchProductCards";
import Snowfall from 'react-snowfall'

const productsData = [
  {
    id: 1,
    title: "Classic Oversized Tee",
    price: "$39.99",
    img: "https://images.unsplash.com/photo-1761522001763-c45e3e0d2377?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Premium Hoodie",
    price: "$59.99",
    img: "https://images.unsplash.com/photo-1616196395402-31872a09315b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Minimal Joggers",
    price: "$49.99",
    img: "https://plus.unsplash.com/premium_photo-1681912767618-b78349675d1d?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Lehenga",
    price: "$49.99",
    img: "https://images.pexels.com/photos/13661843/pexels-photo-13661843.jpeg",
  },
  {
    id: 5,
    title: "Kurti",
    price: "$49.99",
    img: "https://images.pexels.com/photos/28390563/pexels-photo-28390563.jpeg",
  },
];


const filters = ["All", "T-Shirts", "Hoodies", "Bottoms", "Accessories"];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <section className={`products-section`}>
      <Snowfall color="rgba(125, 160, 149, 1)"/>
      <div className="products-header">
        <h2>Our Products</h2>
        <p>Premium essentials crafted for comfort and identity.</p>
      </div>

      <div className="products-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}

        <div className="sort-box">
          <select>
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <SearchComponent items={productsData}/>

      {/* <div className="products-grid">
        {productsData.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </div> */}
    </section>
  );
};

export default Products;

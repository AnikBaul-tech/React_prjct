import React from "react";
import { useContext,useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Products.css";
import ProductCard from "./ProductCard";

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
];


const filters = ["All", "T-Shirts", "Hoodies", "Bottoms", "Accessories"];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`products-section ${theme}`}>
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

      <div className="products-grid">
        {productsData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </section>
  );
};

export default Products;

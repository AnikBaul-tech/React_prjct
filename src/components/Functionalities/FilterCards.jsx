import React from "react";
import { useState,useMemo } from "react";
import SearchComponent from "./SearchProductCards";

const FilterCards = () => {
  const filters = ["All", "Casual", "Ethnic", "Official", "Western", "Winter"];
  const [activeFilter, setActiveFilter] = useState("All");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const productsData = [
    {
      id: 1,
      title: "Classic Oversized Tee",
      price: "$39.99",
      img: "https://images.unsplash.com/photo-1761522001763-c45e3e0d2377?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
      coName: "UrbanWear Co.",
      type: "Casual"
    },
    {
      id: 2,
      title: "Premium Hoodie",
      price: "$59.99",
      img: "https://images.unsplash.com/photo-1616196395402-31872a09315b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      coName: "CozyThreads",
      type: "Casual"
    },
    {
      id: 3,
      title: "Minimal Joggers",
      price: "$30.99",
      img: "https://plus.unsplash.com/premium_photo-1681912767618-b78349675d1d?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0",
      coName: "FlexFit Apparel",
      type: "Casual"
    },
    {
      id: 4,
      title: "Lehenga",
      price: "$80.99",
      img: "https://images.pexels.com/photos/13661843/pexels-photo-13661843.jpeg",
      coName: "Ethnic Elegance",
      type: "Ethnic"
    },
    {
      id: 5,
      title: "Kurti",
      price: "$49.99",
      img: "https://images.pexels.com/photos/28390563/pexels-photo-28390563.jpeg",
      coName: "TraditionWear",
      type: "Casual"
    },
    {
      id: 6,
      title: "Saree",
      price: "$59.99",
      img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
      coName: "Graceful Drapes",
      type: "Ethnic"
    },
    {
      id: 7,
      title: "Blazer",
      price: "$89.99",
      img: "https://images.unsplash.com/photo-1622497170185-5d668f816a56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      coName: "SharpStyle",
      type: "Official"
    },
    {
      id: 8,
      title: "One Piece",
      price: "$39.99",
      img: "https://images.unsplash.com/photo-1765229294711-69b1c8d769db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
      coName: "ChicWear",
      type: "Western"
    },
    {
      id: 9,
      title: "Jackets",
      price: "$59.99",
      img: "https://plus.unsplash.com/premium_photo-1708274926530-baee350496da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      coName: "WinterShield",
      type: "Winter"
    },
  ];
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return productsData;
    return productsData.filter(item => item.type === activeFilter);
  }, [activeFilter, productsData]);

  return (
    <>
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
      <SearchComponent items={filteredItems}/>
    </>
  );
};

export default FilterCards;

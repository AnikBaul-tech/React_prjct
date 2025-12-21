import { useState, useMemo } from "react";
import ProductCard from "../Products/ProductCard";

export default function SearchComponent({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = useMemo(() => {
    return items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  return (
    <div className="products-body">
      <div className="search-box-container">
      <input
        type="text"
        className="search-box"
        id="products-search"
        placeholder="🔍 Search…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
        <div className="products-grid">
        {filtered.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))}
        </div>
    </div>
  );
}

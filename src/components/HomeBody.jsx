import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./HomeBody.css";

const HomeBody = () => {
  const { theme } = useContext(ThemeContext); // "light" or "dark"

  return (
    <div className={`home-body ${theme}`}>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Wear Your Story</h1>
          <p>Minimal. Modern. Made for movement.</p>
          <div className="hero-buttons">
            <button className="button">Shop Men</button>
            <button className="button">Shop Women</button>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="collections">
        <h2>Featured Collections</h2>
        <div className="collection-grid">
          <div className="collection-card" id="street"><p>Streetwear Essentials</p></div>
          <div className="collection-card" id="winter"><p>Winter Collection</p></div>
          <div className="collection-card" id="classic"><p>Minimal Classics</p></div>
          <div className="collection-card" id="active"><p>Activewear</p></div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="brand-story">
        <div className="story-content">
          <h2>Designed for Everyday Movement</h2>
          <p>
            We create clothing that blends comfort, minimalism, and modern design.
            Inspired by real people and real stories.
          </p>
          <button className="button">Know More</button>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          <div className="product-card">Product 4</div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <h2>What We Stand For</h2>
        <div className="values-grid">
          <div className="value-card">Premium Fabrics</div>
          <div className="value-card">Sustainable Materials</div>
          <div className="value-card">Made in India</div>
          <div className="value-card">Easy Returns</div>
        </div>
      </section>

    </div>
  );
};

export default HomeBody;
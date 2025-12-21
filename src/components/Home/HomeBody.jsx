import "./HomeBody.css";

const HomeBody = () => {

  return (
    <div className={`home-body`}>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <text>Wear Your Story</text>
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
          <div className="product-card"><p>Product 1</p></div>
          <div className="product-card"><p>Product 2</p></div>
          <div className="product-card"><p>Product 3</p></div>
          <div className="product-card"><p>Product 4</p></div>
        </div>
      </section>

    </div>
  );
};

export default HomeBody;
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>AnikBrand</h2>
          <p>Crafting modern digital experiences with precision, creativity, and care.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Previous Orders</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-info">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@anikbrand.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Kolkata, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AnikBrand. All rights reserved.</p>
      </div>
    </footer>
  );
}
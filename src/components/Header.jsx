import {Link} from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <header className={isDark ? "header dark" : "header"}>
      <div className="brand">AnikBrand</div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <Link to="/" id="home">Home</Link>
        <Link to="/products" id="products">Products</Link>
        <a href="#" id="prev-orders">Previous Orders</a>
      </nav>

      <div className="actions">
        <button
          className="toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDark ? "🌙" : "☀️"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
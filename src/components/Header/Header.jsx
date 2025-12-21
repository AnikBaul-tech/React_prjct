import {NavLink} from "react-router-dom"
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import "./Header.css";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <header className={isDark ? "header dark" : "header"}>
      <div className="brand">AnikBrand</div>

      <nav className={menuOpen ? "nav open" : "nav"}>
        <NavLink to="/" id="home" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
        <NavLink to="/products" id="products" className={({ isActive }) => (isActive ? "active-link" : "")}>Products</NavLink>
        <NavLink to="/previous-orders" id="prev-orders" className={({ isActive }) => (isActive ? "active-link" : "")}>Previous Orders</NavLink>
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
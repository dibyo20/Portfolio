import "../../styles/Navbar.css";
import { useState } from "react";
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="nav-left">
          <h3>DB</h3>
        </div>

        <div className="divider" />

        <div className={`nav-center ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="ver-nav on">
            Home
          </Link>
          <Link to="/about" className="ver-nav">
            About
          </Link>
          <Link to="/projects" className="project-nav">
            Projects
          </Link>

          <button className="resume-btn">Resume</button>
        </div>

        <div className="divider" />

        <div className="nav-right">
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <span className="theme-icon">
            <Moon size={20} strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

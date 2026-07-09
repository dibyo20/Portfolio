import "../../styles/Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Refs to calculate sizes and positions
  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Highlight bubble state
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredEl, setHoveredEl] = useState(null);

  const handleLogoClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Find footer element and scroll smoothly to it
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper to adjust bubble size and position with a comfortable padding buffer
  const updateBubblePosition = (targetEl) => {
    if (!targetEl || !navRef.current) {
      setBubbleStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    // 4px horizontal padding, 2px vertical padding on each side
    const left = targetRect.left - navRect.left - 4;
    const top = targetRect.top - navRect.top - 2;
    const width = targetRect.width + 8;
    const height = targetRect.height + 4;

    setBubbleStyle({
      left,
      top,
      width,
      height,
      opacity: 1
    });
  };

  // Run update whenever route pathname, mouse hover, or mobile menu toggle changes
  useEffect(() => {
    const runUpdate = () => {
      if (hoveredEl) {
        updateBubblePosition(hoveredEl);
        return;
      }

      // Default to active subpage route
      const path = location.pathname;
      if (path === "/about") {
        updateBubblePosition(aboutRef.current);
      } else if (path === "/projects") {
        updateBubblePosition(projectsRef.current);
      } else {
        setBubbleStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    runUpdate();

    // If the mobile menu has just opened, wait for the CSS transition to complete and re-run
    if (menuOpen) {
      const timer = setTimeout(runUpdate, 260);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, hoveredEl, menuOpen]);

  // Recalculate bubble positions on window resize
  useEffect(() => {
    const handleResize = () => {
      const path = location.pathname;
      if (path === "/about") {
        updateBubblePosition(aboutRef.current);
      } else if (path === "/projects") {
        updateBubblePosition(projectsRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname]);

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="nav-left">
          <Link to="/" className="db" onClick={handleLogoClick}>
            <div className="db-logo">DB</div>
          </Link>
        </div>

        <div className="divider" />

        <div 
          ref={navRef}
          className={`nav-center ${menuOpen ? "active" : ""}`}
          onMouseLeave={() => setHoveredEl(null)}
        >
          {/* Moving liquid glass bubble background */}
          <div 
            className="navbar-active-bubble"
            style={{
              transform: `translate(${bubbleStyle.left}px, ${bubbleStyle.top}px)`,
              width: `${bubbleStyle.width}px`,
              height: `${bubbleStyle.height}px`,
              opacity: bubbleStyle.opacity,
            }}
          />

          <NavLink 
            ref={aboutRef}
            to="/about" 
            className="ver-nav" 
            onClick={() => setMenuOpen(false)}
            onMouseEnter={(e) => setHoveredEl(e.currentTarget)}
          >
            About
          </NavLink>
          <NavLink 
            ref={projectsRef}
            to="/projects" 
            className="project-nav" 
            onClick={() => setMenuOpen(false)}
            onMouseEnter={(e) => setHoveredEl(e.currentTarget)}
          >
            Projects
          </NavLink>
          <a 
            ref={contactRef}
            href="#contact" 
            className="ver-nav" 
            onClick={handleContactClick}
            onMouseEnter={(e) => setHoveredEl(e.currentTarget)}
          >
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1aqEVkf8Y0tCX4ISiLoL0YFmXFlNW_OoL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>

        <div className="nav-right">
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

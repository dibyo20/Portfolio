import "../../styles/Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation references
  const navRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Sliding bubble indicator state
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
    
    const footer = document.querySelector(".footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update sliding bubble dimensions and position
  const updateBubblePosition = (targetEl) => {
    if (!targetEl || !navRef.current) {
      setBubbleStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

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

  useEffect(() => {
    const runUpdate = () => {
      if (hoveredEl) {
        updateBubblePosition(hoveredEl);
        return;
      }

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

    if (menuOpen) {
      const timer = setTimeout(runUpdate, 260);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, hoveredEl, menuOpen]);

  // Recalculate indicator position on window resize
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
          {/* Active sliding bubble background */}
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
            href="https://drive.google.com/file/d/1_8ahgTMBAa9cw8xjUIg4WFZU1LF5UyhD/view"
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

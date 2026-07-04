import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/PageTransition.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top instantly and trigger transition overlay on pathname change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
      document.documentElement.scrollTo({ top: 0, behavior: "instant" });
    }
    if (document.body) {
      document.body.scrollTop = 0;
      document.body.scrollTo({ top: 0, behavior: "instant" });
    }

    // Mount the transition sweep overlay
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Matches CSS sweep animation duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition-container">
      {/* Liquid Glass Overlay Flow ONLY rendered during active transition */}
      {isTransitioning && (
        <div className="liquid-glass-overlay">
          <div className="liquid-glow glow-1"></div>
          <div className="liquid-glow glow-2"></div>
          <div className="liquid-glow glow-3"></div>
        </div>
      )}
      
      {/* Content wrapper */}
      <div className="page-content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;

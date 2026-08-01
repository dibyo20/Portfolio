import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/PageTransition.css";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset scroll and trigger transition on route change
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

    let transitionTimer;
    // Defer state update to avoid calling setState synchronously in effect
    transitionTimer = setTimeout(() => {
      setIsTransitioning(true);
    }, 0);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => {
      clearTimeout(transitionTimer);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition-container">
      {/* Transition overlay */}
      {isTransitioning && (
        <div className="liquid-glass-overlay">
          <div className="liquid-glow glow-1"></div>
          <div className="liquid-glow glow-2"></div>
          <div className="liquid-glow glow-3"></div>
        </div>
      )}
      
      <div className="page-content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;

import React, { useEffect, useRef } from "react";
import "../../styles/CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  // Keep coordinate trackers in refs to execute zero-re-render anim loop
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Disable completely on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    // Check accessibility prefers-reduced-motion settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Snaps immediately (1) if reduced motion is requested, else glides buttery smooth (0.15)
    const lerpFactor = prefersReducedMotion ? 1 : 0.15;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Make cursor visible on initial motion
      if (cursorRef.current && cursorRef.current.style.opacity === "0") {
        cursorRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Lerp motion loop running at browser refresh rate
    const animateCursor = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerpFactor;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerpFactor;

      if (cursorRef.current) {
        // Offset by 10px to perfectly center the 20px circle
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 10}px, ${cursorPos.current.y - 10}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor-container" style={{ opacity: 0 }}>
      <div className="custom-cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;

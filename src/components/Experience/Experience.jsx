import React, { useRef, useState } from "react";
import "../../styles/Experience.css";

const Experience = () => {
  const cardRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlareStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setGlareStyle({});
  };

  const techStack = [
    "React 19",
    "Vite",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Razorpay",
    "PM2",
    "Nginx",
    "Hostinger VPS",
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience-heading">Professional Experience</h2>

      <div className="experience-container">
        <div
          ref={cardRef}
          className="experience-card"
          style={glareStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="experience-glare"></div>

          <div className="experience-header">
            <div className="experience-role-group">
              <div className="experience-company-badge">
                <span className="experience-pulse"></span>
                <span className="experience-company">Solvit</span>
                <span className="experience-divider">•</span>
                <span className="experience-location">Remote</span>
              </div>
              <h3 className="experience-role">
                Web Development Intern{" "}
                <span className="experience-role-sub">(Full-Stack, MERN)</span>
              </h3>
            </div>
            <div className="experience-timeline">
              <span>Aug 2026 – Present</span>
            </div>
          </div>

          <div className="experience-tech-grid">
            {techStack.map((tech, idx) => (
              <span key={idx} className="experience-tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <ul className="experience-bullet-list">
            <li>
              <strong>Scalability & Performance:</strong> Hardened the Express/MongoDB
              backend for <strong>200–250 concurrent users</strong> with tiered rate
              limiting, 50-socket connection pooling, compound indexing, and PM2
              clustering — cutting catalog query latency from ~350 ms to ~15 ms.
            </li>
            <li>
              <strong>Payment & Booking Flow:</strong> Engineered a payment pipeline with{" "}
              <strong>Razorpay HMAC-SHA256 verification</strong>, Idempotency-Key
              protection, double-booking prevention via partial unique indexes, and
              automatic refund fail-safes.
            </li>
            <li>
              <strong>Zero-Trust Coupons & Security:</strong> Built a coupon engine with
              an admin portal featuring a kill-switch, audit trail, and analytics;
              designed secure auth with rotating HttpOnly refresh tokens, replay
              detection, and silent refresh via Axios interceptors.
            </li>
            <li>
              <strong>Web Optimization:</strong> Reduced initial JavaScript payload from{" "}
              <strong>5.34 MB to 188 kB</strong> using React.lazy route splitting, Vite
              vendor chunking, and Brotli/Gzip compression; eliminated idle background
              polling.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;

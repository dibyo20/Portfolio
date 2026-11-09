import React, { useRef, useState } from "react";
import "../../styles/Experience.css";

const Experience = () => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc;
    const dy = (y - yc) / yc;

    const maxTilt = 3;
    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    });

    setGlareStyle({
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({});
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
          style={{
            ...tiltStyle,
            ...glareStyle,
          }}
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

          <div className="experience-footer">
            <a
              href="https://solvitcounselling.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="experience-live-btn"
            >
              <span>Visit Live Platform</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

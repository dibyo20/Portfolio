import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  const contactRef = useRef(null);
  const [glareStyle, setGlareStyle] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogoClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e) => {
    if (!contactRef.current) return;
    const rect = contactRef.current.getBoundingClientRect();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open user's default email client prefilled
    window.location.href = `mailto:dibyobanerjee20@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 700);
  };

  return (
    <footer className="footer" id="connect">
      <div
        ref={contactRef}
        className="contact-box"
        style={glareStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="contact-glare"></div>

        <h2 className="footer-title">Let's Connect</h2>

        <p className="footer-subtext">
          Have a project in mind, an opportunity, or just want to say hi? Drop a message below!
        </p>

        <form className="connect-form" onSubmit={handleSubmit}>
          <div className="connect-form-row">
            <div className="connect-input-group">
              <label htmlFor="connect-name" className="connect-label">Your Name</label>
              <input
                type="text"
                id="connect-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Smith"
                required
                className="connect-input"
              />
            </div>
            <div className="connect-input-group">
              <label htmlFor="connect-email" className="connect-label">Your Email</label>
              <input
                type="email"
                id="connect-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. alex@example.com"
                required
                className="connect-input"
              />
            </div>
          </div>

          <div className="connect-input-group message-group">
            <label htmlFor="connect-message" className="connect-label">Your Message</label>
            <textarea
              id="connect-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, ideas, or questions..."
              rows={4}
              required
              className="connect-textarea"
            ></textarea>
          </div>

          <div className="connect-form-actions">
            <button type="submit" className="connect-submit-btn" disabled={isSending}>
              {isSending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg
                    className="connect-submit-icon"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>
          </div>

          {isSubmitted && (
            <div className="connect-success-msg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D9FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Message draft opened in your email client! Thank you for reaching out.</span>
            </div>
          )}
        </form>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <Link to="/" className="db" onClick={handleLogoClick}>
            <div className="db-logo">DB</div>
          </Link>
        </div>

        <div className="footer-copyright">
          © 2026 Dibyo's Portfolio. Built with precision.
        </div>

        <div className="footer-links">
          <a href="https://linkedin.com/in/dibyo-banerjee" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/dibyo20" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/u/dibyo20/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-brand">
              Explore <span>Raja Ampat</span>
            </div>
            <p className="footer-desc">
              Your gateway to the last paradise on Earth. We provide sustainable and unforgettable travel experiences in the heart of the Coral Triangle.
            </p>
          </div>

          <div className="footer-col">
            <h4>Discover</h4>
            <div className="footer-links">
              <a href="#destinations">Destinations</a>
              <a href="#activities">Things to Do</a>
              <a href="#culinary">Culinary</a>
              <a href="#culture">Culture</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <div className="footer-links">
              <a href="#">Travel Guide</a>
              <a href="#">FAQ</a>
              <a href="#">Contact Us</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="Facebook">📘</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Raja Ampat Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

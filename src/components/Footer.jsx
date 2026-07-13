import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        {/* Footer Top Divider */}
        <div className="footer-divider"></div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-column">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Studio</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explorers">Explorers</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h4 className="footer-col-title">Contact</h4>
            <address className="footer-address">
              <p>1498w Fulton ste, STE</p>
              <p>20 Chicago, IL 60607.</p>
              <p className="footer-phone">0123 456789000</p>
              <p className="footer-email">
                <a href="mailto:info@elementum.com">info@elementum.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Footer Bottom copyright info */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elementum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

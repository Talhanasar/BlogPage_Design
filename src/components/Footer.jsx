import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NoteRoom</h3>
            <p>Join the country's top note-sharing platform to find the best subject-wise notes for students.</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><Link to="/category/noteroom" className="footer-link">NoteRoom</Link></li>
              <li><Link to="/category/study" className="footer-link">Study</Link></li>
              <li><Link to="/category/hsc" className="footer-link">HSC</Link></li>
              <li><Link to="/category/tips" className="footer-link">Tips & Tricks</Link></li>
              <li><Link to="/category/resources" className="footer-link">Resources</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li className="footer-link">Email: info@noteroom.com</li>
              <li className="footer-link">Phone: +123 456 7890</li>
              <li className="footer-link">Address: 123 Education St, Learning City</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NoteRoom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
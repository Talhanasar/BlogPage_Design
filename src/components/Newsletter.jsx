import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription for:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      {/* Background decorative elements */}
      <div className="newsletter-decoration-1"></div>
      <div className="newsletter-decoration-2"></div>
      
      <div className="container newsletter-content">
        <div className="newsletter-badge">
          STAY UPDATED
        </div>
        
        <h2 className="newsletter-title">
          Join Our <span className="logo-highlight">NoteRoom</span> Community
        </h2>
        
        <p className="newsletter-description">
          Get the latest articles, study materials, and updates directly in your inbox.
          No spam, just valuable content for your academic success.
        </p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        
        <p className="newsletter-terms">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
};

export default Newsletter 
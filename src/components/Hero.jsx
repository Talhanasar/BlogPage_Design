import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      {/* Background decoration elements */}
      <div className="hero-decoration-1"></div>
      <div className="hero-decoration-2"></div>
      
      <div className="container hero-content">
        <h1 className="hero-title">
          Think, Share, Solve <span className="logo-highlight">All in One</span>
          <br />
          <span className="logo-highlight">Place</span>
        </h1>
        <p className="hero-description">
          Join the country's top note-sharing platform to find the best subject-
          wise notes for students
        </p>
      </div>
    </section>
  )
}

export default Hero 
import React, { useState, useEffect } from 'react';
import { blogs } from '../article';
import { Link } from 'react-router-dom';

const PopularPostsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const popularPosts = blogs.filter(blog => blog.isPopular);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % popularPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [popularPosts.length]);

  return (
    <section className="popular-posts-slider">
      <div className="container">
        <div className="slider-container">
          <div 
            className="slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {popularPosts.map(blog => (
              <div key={blog.id} className="slider-item">
                <div className="slider-image">
                  <img src={blog.image} alt={blog.title} />
                  <div className="slider-overlay">
                    <span className="category">{blog.category}</span>
                    <h2 className="title">{blog.title}</h2>
                    <p className="excerpt">{blog.excerpt}</p>
                    <div className="meta">
                      <span>{blog.date}</span>
                    </div>
                    <Link to={`/blog/${blog.id}`} className="btn-outline-light">
                      Read Article
                      <span className="arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {popularPosts.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPostsSlider; 
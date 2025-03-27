import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { title, excerpt, date, category, image } = blog
  
  return (
    <div className="blog-card">
      <div className="blog-card-image-container">
        <img 
          src={image} 
          alt={title}
          className="blog-card-image"
        />
      </div>
      <div className="blog-card-content">
        <div className="blog-card-tag">
          <span className="blog-tag">#{category}</span>
        </div>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-footer">
          <span className="blog-card-date">{date}</span>
          <Link to={`/blog/${blog.id}`} className="blog-card-link">
            Read More 
            <span className="blog-card-link-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard 
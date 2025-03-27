import React, { useEffect } from 'react';
import { blogs } from '../article';
import '../styles/blogDetail.css';
import { Link } from 'react-router-dom';

const BlogDetail = ({ blogId }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = blogs.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return <div className="blog-detail-error">Blog post not found</div>;
  }

  return (
    <>
      <div className="back-to-blog-container">
        <Link to="/" className="back-to-blog">
          <span className="back-arrow">←</span> Back to Blog
        </Link>
      </div>
      
      <article className="blog-detail">
        <div className="blog-header">
          <div className="blog-meta">
            <span className="category">{blog.category}</span>
            <span className="date">{blog.date}</span>
          </div>
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-excerpt">{blog.excerpt}</p>
        </div>

        <div className="blog-content">
          <img src={blog.image} alt={blog.title} className="featured-image" />
          <div className="content">
            {blog.content}
          </div>
        </div>

        <div className="blog-footer">
          <div className="tags">
            {blog.tags && blog.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <div className="share-buttons">
            <button className="share-button">Share on Twitter</button>
            <button className="share-button">Share on LinkedIn</button>
            <button className="share-button">Share on Facebook</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetail; 
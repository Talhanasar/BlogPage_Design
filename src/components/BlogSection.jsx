import React, { useState } from 'react'
import { blogs } from '../article'
import BlogCard from './BlogCard'

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [displayCount, setDisplayCount] = useState(6)

  // Dynamically extract unique categories from blog data
  const uniqueCategories = [...new Set(blogs.map(blog => blog.category))]
  const categories = [
    { id: 'all', name: 'All Posts' },
    ...uniqueCategories.map(category => ({ id: category, name: category }))
  ]

  const filteredBlogs = blogs.filter(blog => 
    selectedCategory === 'all' ? !blog.isPopular : blog.category === selectedCategory && !blog.isPopular
  )

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-title">Latest Articles</h2>
        </div>
        
        <div className="tag-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`tag ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredBlogs.slice(0, displayCount).map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {displayCount < filteredBlogs.length && (
          <div className="load-more">
            <button 
              className="btn btn-outline"
              onClick={() => setDisplayCount(prev => prev + 3)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection 
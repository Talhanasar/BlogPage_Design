import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PopularPostsSlider from '../components/PopularPostsSlider';
import BlogSection from '../components/BlogSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Header />
      <main>
        <Hero />
        <PopularPostsSlider />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage; 
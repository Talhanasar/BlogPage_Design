import React from 'react'
import Header from '../components/Header'
import BlogDetail from '../components/BlogDetail'
import Footer from '../components/Footer'
import '../styles/blogDetail.css'
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
const { id } = useParams();

  return (
    <div className="blog-detail-page">
      <Header />
      <main>
        <BlogDetail blogId={id} />
      </main>
      <Footer />
    </div>
  )
}

export default BlogDetailPage 
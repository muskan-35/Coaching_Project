import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../Data/blogs';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loadedImages, setLoadedImages] = useState({});
  const [failedImages, setFailedImages] = useState({});
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Blogs' },
    { id: 'python', label: 'Python' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'skills', label: 'Future Skills' },
    { id: 'success', label: 'Success Stories' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Tech Insights Blog</h1>
        <p className="text-xl text-gray-600">Master Python, Data Analytics & Future Tech Skills</p>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Image */}
                <div className={`relative h-48 overflow-hidden flex items-center justify-center ${
                  failedImages[post.id] 
                    ? `bg-gradient-to-br from-blue-400 to-blue-600` 
                    : 'bg-gray-200'
                }`}>
                  {!loadedImages[post.id] && !failedImages[post.id] ? (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                      <span className="text-gray-500">Loading...</span>
                    </div>
                  ) : (
                    <img
                      src={post.cardImage}
                      alt={post.title}
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [post.id]: true }))}
                      onError={() => {
                        setFailedImages(prev => ({ ...prev, [post.id]: true }));
                        setLoadedImages(prev => ({ ...prev, [post.id]: true }));
                      }}
                      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                        loadedImages[post.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}
                  <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex gap-4 text-xs text-gray-500 mb-4">
                    <span>📅 {post.date}</span>
                    <span>✍️ {post.author}</span>
                  </div>

                  {/* Read More Button */}
                  <button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No blogs available in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
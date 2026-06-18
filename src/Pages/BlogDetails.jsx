import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../Data/blogs';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => String(p.id) === String(id));

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <button className="mb-4 text-blue-600" onClick={() => navigate(-1)}>← Back</button>
        <h2 className="text-2xl font-semibold">Post not found</h2>
      </div>
    );
  }

  const paragraphs = post.content.split(/\n\s*\n/).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <button className="mb-4 text-blue-600" onClick={() => navigate(-1)}>← Back</button>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date} • {post.author}</p>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />
      )}
      <div className="prose max-w-none text-gray-800">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

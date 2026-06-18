import { Link } from "react-router-dom";

function BlogCards({ blog }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl">

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {blog.category}
        </span>

        <h3 className="text-xl font-bold mt-3">
          {blog.title}
        </h3>

        <p className="text-gray-600 mt-2">
          {blog.description}
        </p>

        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

        <Link
        to={`/blog/${blog.id}`}
        className="text-blue-600 font-semibold"
      >
        Read More →
      </Link>

      </div>
    </div>
  );
}

export default BlogCards;
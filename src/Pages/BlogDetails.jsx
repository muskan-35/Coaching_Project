import { useParams } from "react-router-dom";
import { blogs } from "../Data/BlogData";

function BlogDetails() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <h2 className="text-center text-2xl mt-10">
        Blog Not Found
      </h2>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      <div className="mt-8">
        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm">
          {blog.category}
        </span>

        <h1 className="text-4xl font-bold mt-4">
          {blog.title}
        </h1>

        <p className="text-gray-500 mt-2">
          {blog.date} • {blog.readTime}
        </p>

        <div className="mt-6 text-lg leading-8 text-gray-700">
          {blog.content}
        </div>
      </div>

    </section>
  );
}

export default BlogDetails;
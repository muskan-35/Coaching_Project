import { useState } from "react";
import { blogs } from "../Data/BlogData";
import BlogCards from "../Components/ui/BlogCards";

function Blog() {
  const [activeCategory, setActiveCategory] =
    useState("All Blogs");

  const filteredBlogs =
    activeCategory === "All Blogs"
      ? blogs
      : blogs.filter(
          (blog) =>
            blog.category === activeCategory
        );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold text-center">
        Tech Insights Blog
      </h1>

      <p className="text-center text-gray-600 mt-3">
        Master Python, Data Analytics & Future Tech Skills
      </p>

      <div className="flex justify-center gap-4 flex-wrap mt-10">
        {[
          "All Blogs",
          "Python",
          "Data Analytics",
          "Future Skills",
          "Success Stories",
        ].map((category) => (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(category)
            }
            className={`px-6 py-2 rounded-full border ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {filteredBlogs.map((blog) => (
          <BlogCards
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>

    </div>
  );
}

export default Blog;
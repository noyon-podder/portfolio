import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:5000/api/blog`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setBlogs(data?.data);
        });
    };

    fetchData();
  }, []);

  console.log(blogs);

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <div className="blog-posts">
        {blogs.length === 0 && (
          <p className="text-white text-center text-[20px]">No blogs found.</p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {blogs.map((post, index) => (
            <BlogPost key={index} blog={post} />
          ))}
        </div>
      </div>
      {/* Pagination */}
    </section>
  );
};

export default Blogs;

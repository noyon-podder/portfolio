import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import "./Blogs.css";
import { baseApi } from "../../config/config";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";

const Blogs = () => {
  const { isLoading, data: blogs } = useQuery({
    queryKey: ["PROJECT"],
    queryFn: async () => {
      const response = await fetch(`${baseApi}/api/blog`);
      const data = await response.json();
      // setBlogs(data?.data);
      return data;
    },
  });

  if (isLoading) return <Loading />;

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
          {blogs?.data.map((post, index) => (
            <BlogPost key={index} blog={post} />
          ))}
        </div>
      </div>
      {/* Pagination */}
    </section>
  );
};

export default Blogs;

"use client";

import { useState, useEffect } from "react";
import "./Blog.css";
import BlogList from "../components/BlogList";
import NewPostForm from "../components/NewPostForm";

// Function to fetch posts data from API
async function fetchPosts(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.posts;
}

// Blog Page Component
export default function BlogPage({ searchParams }) {
  const searchQuery = searchParams?.search ?? "";
  const sortOptions = searchParams?.sortBy ?? "";
  const [sortByValue, orderValue] = sortOptions.split("-");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsUrl = "https://dummyjson.com/posts";
    if (searchQuery) {
      postsUrl = `https://dummyjson.com/posts/search?q=${searchQuery}`;
      if (sortOptions) {
        postsUrl += `&sortBy=${sortByValue}&order=${orderValue}`;
      }
    } else if (sortOptions) {
      postsUrl = `https://dummyjson.com/posts?sortBy=${sortByValue}&order=${orderValue}`;
    }
    fetchPosts(postsUrl).then(setPosts); // Fetch initial posts
  }, [searchQuery, sortByValue, orderValue]);

  // Function to handle adding a new post
  const handleAddPost = (newPost) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((createdPost) => {
        // Add the new post to the list
        setPosts((prevPosts) => [createdPost, ...prevPosts]);
      });
  };

  return (
    <section className="blog-wrapper">
      <h1 className="section-header">Blogs</h1>

      {/* Add New Post Form */}
      <NewPostForm onAddPost={handleAddPost} />

      {/* Blog List */}
      <BlogList posts={posts} />
    </section>
  );
}

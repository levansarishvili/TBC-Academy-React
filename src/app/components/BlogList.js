'use client';

import BlogFilter from "../components/BlogFilter";
import BlogItem from "./BlogItem"; 

export default function BlogList({ posts }) {
  return (
    <div className="blog__page-content">
      <BlogFilter />
      <ul className="blog__list">
        {posts.map((post) => (
          <BlogItem
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.body}
            views={post.views}
          />
        ))}
      </ul>
    </div>
  );
}

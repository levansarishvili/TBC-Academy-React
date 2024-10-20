'use client';

import { useState } from "react";
import Button from "../components/Button";

export default function NewPostForm({ onAddPost }) {
  const [newPost, setNewPost] = useState({ title: "", body: "", userId: 1 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    onAddPost(newPost);
    setNewPost({ title: "", body: "", userId: 1 }); 
  };

  return (
    <form className="new-post-form" onSubmit={handleAddPost}>
      <input
        type="text"
        name="title"
        value={newPost.title}
        placeholder="Title"
        onChange={handleInputChange}
        required
      />
      <textarea
        name="body"
        value={newPost.body}
        placeholder="Description"
        onChange={handleInputChange}
        required
      ></textarea>
      <Button className="btn add-post-btn" type="submit" name="Add Post" />
    </form>
  );
}

"use client";

import { useState } from "react";
import Button from "../components/Button";

export default function AddProductForm({ onAddProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [availabilityStatus, setAvailabilityStatus] = useState("In Stock");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      description,
      price,
      availabilityStatus,
    };

    // Simulate a POST request
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    const result = await response.json();

    // Call the onAddProduct function to add the new product to the product list
    onAddProduct(result);
    // Reset form fields
    setTitle("");
    setDescription("");
    setPrice(0);
    setAvailabilityStatus("In Stock");
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <select
        value={availabilityStatus}
        onChange={(e) => setAvailabilityStatus(e.target.value)}
      >
        <option value="In Stock">In Stock</option>
        <option value="Low Stock">Low Stock</option>
        <option value="Out of Stock">Out of Stock</option>
      </select>
      <Button type="submit" name="Add Product" />
    </form>
  );
}

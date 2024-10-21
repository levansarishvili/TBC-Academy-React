'use client';

import Link from "next/link";
import Button from "../components/Button";
import ProductFilter from "../components/ProductFilter";
import Image from "next/image";
import "./Store.css";
import "../mediaQueries.css";
import { useState, useEffect } from "react";

// Create Online Store component and fetch product data
export default function Store({ searchParams }) {
  const searchQuery = searchParams?.search ?? "";
  const filter = searchParams?.category ?? "all";
  const sortOptions = searchParams?.sortBy ?? "";
  const [sortByValue, orderValue] = sortOptions.split("-");
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    stock: 1,
    image: null,
    imagePreview: null,
    availabilityStatus: "in-stock",
  });

  useEffect(() => {
    fetchProducts();
  }, [searchQuery, sortOptions, filter]);

  let productsUrl = "https://dummyjson.com/products";

  if (searchQuery) {
    productsUrl = `https://dummyjson.com/products/search?q=${searchQuery}`;
    if (sortOptions) {
      productsUrl += `&sortBy=${sortByValue}&order=${orderValue}`;
    }
  } else if (sortOptions) {
    productsUrl = `https://dummyjson.com/products?sortBy=${sortByValue}&order=${orderValue}`;
  } else if (filter !== "all") {
    productsUrl = `https://dummyjson.com/products/category/${filter}`;
  }

  async function fetchProducts() {
    const response = await fetch(productsUrl);
    const data = await response.json();
    setProducts(data.products);
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();

    // Prepare form data for image upload
    const formData = new FormData();
    formData.append('title', newProduct.title);
    formData.append('price', newProduct.price);
    formData.append('stock', newProduct.stock);
    formData.append('image', newProduct.image);
    formData.append('availabilityStatus', newProduct.availabilityStatus);

    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: formData,
    });

    const createdProduct = await response.json();

    // Add new product at the beginning of the product list
    setProducts((prevProducts) => [createdProduct, ...prevProducts]);
    setNewProduct({
      title: '',
      price: '',
      stock: 1,
      image: null,
      imagePreview: null,
      availabilityStatus: 'in-stock',
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({
          ...newProduct,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="product__page-wrapper">
      <h1 className="section__header">Products</h1>
      <form onSubmit={handleAddProduct} className="new-product-form">
        <input
          type="text"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          required
        />
        <div className="stock-input-wrapper">
          <input
            type="number"
            placeholder="Product Stock"
            value={newProduct.stock}
            onChange={(e) =>
              setNewProduct({ ...newProduct, stock: e.target.value })
            }
            required
          />
        </div>
        <select
          value={newProduct.availabilityStatus}
          onChange={(e) =>
            setNewProduct({ ...newProduct, availabilityStatus: e.target.value })
          }
        >
          <option value="in-stock">In Stock</option>
          <option value="low-stock">Low Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        {newProduct.imagePreview && (
          <img
            src={newProduct.imagePreview}
            alt="Image Preview"
            className="image-preview"
            style={{ maxWidth: "100px", marginTop: "10px" }}
          />
        )}
        <button type="submit">Add Product</button>
      </form>
      <div className="product__page-content">
        <ProductFilter />
        <ProductList products={products} />
      </div>
    </section>
  );
}

// Product list component
function ProductList({ products }) {
  return (
    <div className="product__list">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.title}
          imageSrc={product.thumbnail || product.imagePreview}
          availabilityStatus={product.availabilityStatus || 'in-stock'}
          stock={product.stock}
          price={product.price}
        />
      ))}
    </div>
  );
}

// Product card component
function Product({ id, name, imageSrc, availabilityStatus, stock, price }) {
  const formattedStatus =
    (availabilityStatus || "in-stock").charAt(0).toUpperCase() +
    (availabilityStatus || "in-stock").slice(1).replace("-", " ");

  return (
    <div className="product-card">
      <Link className="product__link" href={`/store/${id}`}>
        <div className="product__img-wrapper">
          <Image
            className="product__img"
            src={imageSrc}
            alt={name}
            width={100}
            height={100}
            quality={50}
            priority={true}
          />
        </div>
        <div className="product-card__content">
          <h2 className="product__title">{name}</h2>
          <div className="product__desc">
            <div className="product__stock-wrapper">
              <p className="product__availabilityStatus">
                {`${formattedStatus}: ${stock}`}
              </p>
            </div>
            <p className="product__price">{`${price} $`}</p>
          </div>
        </div>
      </Link>
      <Button className="btn" name="Add to cart" />
    </div>
  );
}

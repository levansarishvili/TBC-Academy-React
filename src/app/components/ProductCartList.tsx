"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ProductType {
  id: number;
  product_id: number;
  user_id: string;
  quantity: number;
  name: string;
  price: number;
  image_url: string;
}

export default function ProductCartList({
  products,
}: {
  products: ProductType[];
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  // Calculate total price whenever products change
  useEffect(() => {
    const total = products.reduce(
      (acc, product) => acc + (product.price / 100) * product.quantity,
      0
    );
    setTotalPrice(total);
  }, [products]);

  // Handle product quantity increase
  const handleQuantityIncrease = async (productId: number) => {
    try {
      const res = await fetch(`/api/increase-product-quantity`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        console.log("Product quantity increased successfully");
        router.refresh();
      } else {
        const data = await res.json();
        console.error("Failed to increase product quantity:", data.message);
      }
    } catch (error) {
      console.error("Error increasing product quantity:", error);
    }
  };

  // Handle product quantity decrease
  const handleQuantityDecrease = async (productId: number) => {
    try {
      const res = await fetch(`/api/decrease-product-quantity`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        console.log("Product quantity decreased successfully");
        router.refresh();
      } else {
        const data = await res.json();
        console.error("Failed to decrease product quantity:", data.message);
      }
    } catch (error) {
      console.error("Error decreasing product quantity:", error);
    }
  };

  // Handle product deletion from cart
  const handleDeleteFromCart = async (productId: number) => {
    try {
      const res = await fetch(`/api/delete-product-from-cart`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      if (res.ok) {
        console.log("Product deleted successfully");
        router.refresh();
      } else {
        const data = await res.json();
        console.error("Failed to delete product:", data.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Function to handle buy product button click
  const handleBuyProduct = async () => {
    try {
      const res = await fetch(`/api/buy-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("Failed to buy product:", data.message);
        return;
      }

      const data = await res.json();

      console.log("Product bought successfully");
      if (data.success && data.url) {
        // Redirect to Stripe checkout page
        router.push(data.url);
      }
    } catch (error) {
      console.error("Error buying product:", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-start">
      {/* If cart is empty */}
      {products.length === 0 && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl lg:text-2xl font-medium">
            Your cart is empty
          </h2>
          <Link href="/store">
            <Button className="hover:bg-[#38CB89]/80 transition-all duration-300">
              Go to shop
            </Button>
          </Link>
        </div>
      )}

      {products?.map((product) => (
        <div className="flex items-center space-x-4" key={product.id}>
          <Image
            src={product.image_url}
            alt={product.name}
            className="w-16 h-16 object-cover"
            width={1200}
            height={600}
          />

          <h2 className="text-lg font-semibold">{product.name}</h2>
          <Button
            variant={"destructive"}
            className=""
            onClick={() => handleDeleteFromCart(product.product_id)}
          >
            <Trash2 className="size-4" />
          </Button>
          <p className="">${product.price / 100}</p>
          <p className="">
            Subtotal: ${(product.price / 100) * product.quantity}
          </p>
          <div className="flex items-center gap-4 border rounded-lg px-2 py-1">
            <button onClick={() => handleQuantityDecrease(product.product_id)}>
              <Minus className="size-3.5 cursor-pointer" />
            </button>
            <p className="">{product.quantity}</p>
            <button onClick={() => handleQuantityIncrease(product.product_id)}>
              <Plus className="size-3.5 cursor-pointer" />
            </button>
          </div>
        </div>
      ))}

      {/* Display total price */}
      {products.length > 0 && (
        <div className="w-full text-right">
          <p className="text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </div>
      )}

      {/* Checkout button */}
      {products.length > 0 && (
        <div className="flex justify-center w-full">
          <Button
            className="hover:bg-[#38CB89]/80 transition-all duration-300 w-56"
            variant="default"
            onClick={handleBuyProduct}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
